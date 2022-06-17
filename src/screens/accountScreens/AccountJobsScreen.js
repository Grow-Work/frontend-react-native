import React, {useContext, useEffect} from 'react'
import { SafeAreaView, StyleSheet, FlatList, View, Text} from 'react-native'
import { Context as DataContext } from '../../context/DataContext'
import { List } from 'react-native-paper';
import JobListingEdit from '../../components/modals/JobListingEdit';
import JobListingView from '../../components/modals/JobListingView';
import JobListingDelete from '../../components/modals/JobListingDelete';
import { ScrollView } from 'react-navigation'

const AccountJobsScreen = () => {

    const {state} = useContext(DataContext)

    useEffect(() => {
  }, [state.jobListings])

    return (
        <SafeAreaView style={styles.container} forceInset={{top: 'always'}}>
        <ScrollView nestedScrollEnabled={true}>
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
            {/* <List.Icon color={Colors.green600} icon="eye" /> */}
            <JobListingView id={item._id} />
            <JobListingEdit id={item._id} />
            <JobListingDelete id={item._id} />
            </View>
            </List.Accordion>
          );
        }}
      />
      : <Text>Loading...</Text>}
      </ScrollView>
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