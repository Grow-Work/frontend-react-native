import React, {useContext, useState} from 'react'
import { SafeAreaView, StyleSheet, FlatList, TouchableOpacity, Text} from 'react-native'
import { NavigationEvents } from 'react-navigation'
import { Context as DataContext } from '../context/DataContext'
import { ListItem } from 'react-native-elements'
import { Searchbar } from 'react-native-paper';

const NewbProfileListScreen = ({navigation}) => {

    const {state, fetchNewbs } = useContext(DataContext)
    const [search, setSearch] = useState('');

    const onChangeSearch = query => setSearch(query);

    return (
        <SafeAreaView style={styles.container} forceInset={{top: 'always'}}>
         <NavigationEvents onWillFocus={fetchNewbs} />
         <Searchbar
            placeholder="Search Skills"
            onChangeText={onChangeSearch}
            value={search}
          />
        <Text></Text>
         {state.newbs? 
       <FlatList
       data={state.newbs.filter((item) => item.location.toLowerCase().includes(search.toLowerCase()))}
       keyExtractor={(item) => item._id}
       renderItem={({ item }) => {
         return (
           <TouchableOpacity onPress={() => 
               navigation.navigate('NewbProfileDetail', { _id: item._id})
           }>
             <ListItem>
               <ListItem.Content>
                 <ListItem.Title style={styles.header} >{item.first_name}</ListItem.Title>
                 <Text>{item.location}</Text>
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

NewbProfileListScreen.navigationOptions = {
    title: 'Newbs'
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

export default NewbProfileListScreen