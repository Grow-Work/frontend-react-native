import React, {useContext, useEffect, useState} from 'react'
import { SafeAreaView, StyleSheet, FlatList, View, Text} from 'react-native'
import { Context as DataContext } from '../../context/DataContext'
import { List, Colors } from 'react-native-paper';
import JobListingEdit from '../../components/modals/JobListingEdit';

const AccountJobsScreen = () => {

    const {state} = useContext(DataContext)
    const [jobId, setJobId] = useState("")

    useEffect(() => {
      console.log("job useEffect here")
  }, [state.jobListings])

    return (
        <SafeAreaView style={styles.container} forceInset={{top: 'always'}}>
          {/* <List.AccordionGroup expandedId={item._id}> */}
        {state.jobListings? 
        <FlatList
        data={state.jobListings}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <List.Accordion
            theme={{ colors: { primary: '#2e9103' }}}
            title={item.title}>
            <View style={styles.listing} >
            <List.Icon color={Colors.green600} icon="eye" />
            <JobListingEdit id={item._id} />
            <List.Icon color={Colors.green600} icon="trash-can-outline" />
            </View>
            </List.Accordion>
          );
        }}
      />
      : <Text>Loading...</Text>}
      {/* </List.AccordionGroup> */}
        </SafeAreaView>
        )
}

const styles = StyleSheet.create({
    header: {
        fontSize: 20,
        marginBottom: 10
    },
    container: {
        margin: 15,
        flex: 1,
        marginTop: 15
    },
    text: {
        fontSize: 20
    },
    listing: {
      display: 'flex',
      flexDirection: 'row'
    }
})

export default AccountJobsScreen