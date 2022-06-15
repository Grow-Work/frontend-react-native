import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import CompanyProfileForm from '../../components/CompanyProfileForm'
import NewbProfileForm from '../../components/NewbProfileForm'
import { Context as DataContext } from '../../context/DataContext'

const ProfileCreateScreen = () => {

    const {state, createProfile} = useContext(DataContext)

    return (
        <View style={styles.container}>
        {state.accountType === "company" ? 
            <CompanyProfileForm 
                header="Create Company Profile"
                buttonText="Save"
                onSubmit={createProfile}
            />
            : 
            <NewbProfileForm 
                header="Create Your Profile"
                buttonText="Save"
                onSubmit={createProfile}
            />
        }
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