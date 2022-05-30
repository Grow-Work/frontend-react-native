import React from 'react'
import { SafeAreaView, StyleSheet, Text, Button, Linking} from 'react-native'
import {MaterialIcons} from '@expo/vector-icons'

const NewbProfileListScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container} forceInset={{top: 'always'}}>
        <Text style={styles.header} >Newb List Screen</Text>
        <Text style={styles.text} >This is some other info about this screen.</Text>
        <Text></Text>
        <Button 
            title="details"
            onPress={() => navigation.navigate('NewbProfileDetail')}
        />
        </SafeAreaView>
    )
}

NewbProfileListScreen.navigationOptions = {
    title: 'Newbs'
}

const styles = StyleSheet.create({
    header: {
        fontSize: 30,
        marginBottom: 50
    },
    container: {
        margin: 15,
        flex: 1,
        marginTop: 50
    }
})

export default NewbProfileListScreen