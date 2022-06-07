import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ProfileCreateScreen = () => {
    return (
        <View style={styles.container}>
        <Text style={styles.header} >Profile Create Screen</Text>
        <Text style={styles.text} >This screen will be conditionally rendered.</Text>
        </View>
        )
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

export default ProfileCreateScreen