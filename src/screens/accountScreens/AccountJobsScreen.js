import React, {useContext} from 'react'
import { SafeAreaView, StyleSheet, FlatList, TouchableOpacity, Text} from 'react-native'
import { Context as DataContext } from '../../context/DataContext'
import { ListItem } from 'react-native-elements'

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
            <TouchableOpacity onPress={() => 
                console.log("Hi!")
            }
            >
              <ListItem>
                <ListItem.Content>
                  <ListItem.Title style={styles.header} >{item.title}</ListItem.Title>
                  <Text>{item.company}</Text>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>
            </TouchableOpacity>
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