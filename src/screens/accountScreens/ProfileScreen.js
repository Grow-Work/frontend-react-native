import React, {useContext, useEffect} from 'react'
import { StyleSheet, Text } from 'react-native'
import { Context as DataContext } from '../../context/DataContext'
import { SafeAreaView } from 'react-native-safe-area-context'
import CompanyProfileEdit from '../../components/modals/CompanyProfileEdit'
import NewbProfileEdit from '../../components/modals/NewbProfileEdit'

const ProfileScreen = () => {

    const {state} = useContext(DataContext)

    useEffect(() => {
        
    }, [state.accountProfile])

    return (
        <SafeAreaView style={styles.container} forceInset={{top: 'always'}}>
        {state.accountProfile? 
            <>
            {state.accountType === "company" ? 
            <CompanyProfileEdit 
                header="Edit Profile"
                buttonText="Save"
            />
            : 
            <NewbProfileEdit
                header="Edit Profile"
                buttonText="Save"
            />
            }
            <Text style={styles.header} >{state.accountProfile.name}</Text>
            <Text style={styles.text} >{state.accountProfile.location}</Text>
            </>
        : <Text>Loading...</Text>}
        
        
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

export default ProfileScreen