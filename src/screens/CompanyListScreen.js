import React, {useContext} from 'react'
import { SafeAreaView, StyleSheet, FlatList, TouchableOpacity, Text} from 'react-native'
import { NavigationEvents } from 'react-navigation'
import { Context as DataContext } from '../context/DataContext'
import { ListItem } from 'react-native-elements'

const CompanyListScreen = ({navigation}) => {

    const {state, fetchCompanies } = useContext(DataContext)

    return (
        <SafeAreaView style={styles.container} forceInset={{top: 'always'}}>
        <NavigationEvents onWillFocus={fetchCompanies} />
        <FlatList
        data={state}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => 
                navigation.navigate('CompanyDetail', { _id: item._id})
            }
            >
              <ListItem>
                <ListItem.Content>
                  <ListItem.Title style={styles.header} >{item.name}</ListItem.Title>
                  <Text>{item.location}</Text>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>
            </TouchableOpacity>
          );
        }}
      />
        </SafeAreaView>
    )
}

CompanyListScreen.navigationOptions = {
    title: 'Companies',
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
    }
})

export default CompanyListScreen