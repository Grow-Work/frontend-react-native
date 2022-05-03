import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {FontAwesome} from '@expo/vector-icons'

const TrackCreateScreen = () => {
    return (
        <View style={styles.container}>
        <Text style={styles.header} >TrackCreateScreen</Text>
        <Text style={styles.text} >This is some other info about this screen.</Text>
        </View>
        )
}

TrackCreateScreen.navigationOptions = {
    title: 'Add Track',
    tabBarIcon: <FontAwesome name="plus" size={20} />
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

export default TrackCreateScreen