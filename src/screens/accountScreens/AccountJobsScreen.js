import React, {useContext, useState, useEffect} from 'react'
import { StyleSheet, Text } from 'react-native'
import { Context as AuthContext } from '../../context/AuthContext'
import { SafeAreaView } from 'react-native-safe-area-context'
import serverConnectApi from '../../api/serverConnect'

const AccountJobsScreen = ({navigation}) => {

    // const [accountProfile, setAccountProfile] = useState({})

    // useEffect(() => {
    //     serverConnectApi
    //       .get('/account/company/profile')
    //       .then((res) => setAccountProfile(res.data))
    //       .catch((err) => console.log(err, "account screen error"));
    //   }, []);

    //   console.log("account profile:",accountProfile)

    return (
        <SafeAreaView style={styles.container} forceInset={{top: 'always'}}>
        <Text style={styles.header} >Account Jobs Here</Text>
        <Text style={styles.text} >...if any.</Text>
        <Text></Text>
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

export default AccountJobsScreen