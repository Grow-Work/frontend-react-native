import React, {useContext} from 'react'
import { StyleSheet, Text } from 'react-native'
import {Button} from 'react-native-elements'
import { Context as AuthContext } from '../context/AuthContext'
import { SafeAreaView } from 'react-native-safe-area-context'


const AccountScreen = ({navigation}) => {

    const {signout} = useContext(AuthContext)


    return (
        <SafeAreaView style={styles.container} forceInset={{top: 'always'}}>
        <Text style={styles.header} >Account Screen</Text>
        <Text style={styles.text} >This is some other info about this screen.</Text>
        <Text></Text>
        <Button 
            title="Create Profile"
            onPress={() => navigation.navigate('ProfileCreate')}
        />
        <Text></Text>
        <Button style={styles.button} title="Sign Out" onPress={signout} />
        </SafeAreaView>
        )
}

AccountScreen.navigationOptions = {
    title: 'Account',
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

export default AccountScreen