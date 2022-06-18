import React, {useContext, useEffect} from 'react'
import { StyleSheet, Text } from 'react-native'
import { Context as DataContext } from '../../context/DataContext'
import { SafeAreaView } from 'react-native-safe-area-context'
import CompanyProfileEdit from '../../components/modals/CompanyProfileEdit'
import NewbProfileEdit from '../../components/modals/NewbProfileEdit'
import { ScrollView } from 'react-navigation'

const ProfileScreen = () => {

    const {state} = useContext(DataContext)
    const profile = state.accountProfile

    useEffect(() => {
        
    }, [state.accountProfile])

    return (
        <SafeAreaView style={styles.container} forceInset={{top: 'always'}}>
        {profile? 
            <>
            {state.accountType === "company" ? 
            <>
            <ScrollView>
            <CompanyProfileEdit 
                header="Edit Profile"
                buttonText="Save"
            />
            <Text style={styles.header}>{profile.name}</Text>
            <Text style={styles.text} >
                {profile.location}
                {'\n'}{'\n'}
                Sector: {profile.sector}
                {'\n'}{'\n'}
                {profile.description}
                {'\n'}{'\n'}
                {profile.email}
                {'\n'}{'\n'}
                {profile.phone}
                </Text>
                </ScrollView>
            </>
            : 
            <>
            <ScrollView>
            <NewbProfileEdit
                header="Edit Profile"
                buttonText="Save"
            />
            <Text style={styles.header}>{profile.first_name} {profile.last_name}</Text>
            <Text style={styles.text} >
                {profile.location}
                {'\n'}{'\n'}
                {profile.bio}
                {'\n'}{'\n'}
                {profile.email}
                {'\n'}{'\n'}
                {profile.phone}
                {'\n'}{'\n'}
                {profile.skills}
                {'\n'}{'\n'}
                </Text>
            </ScrollView>
            </>
            }
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
        flex: 1
    },
    text: {
        fontSize: 20
    }
})

export default ProfileScreen