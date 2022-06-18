import React, {useContext, useState} from 'react'
import { SafeAreaView, StyleSheet, FlatList, TouchableOpacity, Text} from 'react-native'
import { NavigationEvents } from 'react-navigation'
import { Context as DataContext } from '../context/DataContext'
import { ListItem } from 'react-native-elements'
import { Searchbar } from 'react-native-paper';

const JobListScreen = ({navigation}) => {

    const {state, fetchJobs } = useContext(DataContext)
    const [search, setSearch] = useState('');

    const onChangeSearch = query => setSearch(query);

    return (
        <SafeAreaView style={styles.container} forceInset={{top: 'always'}}>
        <NavigationEvents onWillFocus={fetchJobs} />
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={search}
        />
        <Text></Text>
        {state.jobs? 
        <FlatList
        data={state.jobs.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => 
                navigation.navigate('JobDetail', { _id: item._id})
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

JobListScreen.navigationOptions = {
    title: 'Jobs',
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

export default JobListScreen