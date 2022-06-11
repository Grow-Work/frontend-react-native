import React, {useContext} from 'react'
import { SafeAreaView, StyleSheet, FlatList, Text} from 'react-native'
import { Context as DataContext } from '../../context/DataContext'
import { List, Colors } from 'react-native-paper';

const AccountJobsScreen = () => {

    const {state} = useContext(DataContext)

    return (
        <SafeAreaView style={styles.container} forceInset={{top: 'always'}}>
        {state.jobListings? 
        <FlatList
        data={state.jobListings}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <List.Accordion
            left={props => <List.Icon {...props} color={Colors.green600} icon="equal" />}
            title={item.title}>
            <List.Item title={`Company: ${item.company}`} />
            <List.Item 
            title={item.location} />
          </List.Accordion>
          );
        }}
      />
      : <Text>Loading...</Text>}
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
    }
})

export default AccountJobsScreen