import React, {useContext} from 'react'
import { StyleSheet, Text } from 'react-native'
import {Button} from 'react-native-elements'
import { Context as AuthContext } from '../../context/AuthContext'
import { SafeAreaView } from 'react-native-safe-area-context'

const SettingsScreen = () => {

    const {signout} = useContext(AuthContext)

    return (
        <SafeAreaView style={styles.container} forceInset={{top: 'always'}}>
        <Text style={styles.header} >Change email and password will go here. And maybe delete account?</Text>
        <Text></Text>
        <Button style={styles.button} title="Sign Out" onPress={signout} />
        </SafeAreaView>
        )
}

const styles = StyleSheet.create({
    header: {
        fontSize: 30,
        marginBottom: 20
    },
    container: {
        margin: 15,
        flex: 1,
        marginTop: 50
    },
    text: {
        fontSize: 20
    }
})

export default SettingsScreen