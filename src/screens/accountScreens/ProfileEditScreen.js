import React, {useContext} from 'react'
import { StyleSheet, View } from 'react-native'
import CompanyProfileForm from '../../components/CompanyProfileForm'
import NewbProfileForm from '../../components/NewbProfileForm'
import { Context as DataContext } from '../../context/DataContext'

const ProfileEditScreen = () => {

    const {state, editProfile} = useContext(DataContext)

    return (
        <View style={styles.container}>
        {state.accountType === "company" ? 
            <CompanyProfileForm 
                header="Edit Profile"
                buttonText="Save"
                onSubmit={editProfile}
            />
            : 
            <NewbProfileForm 
                header="Edit Profile"
                buttonText="Save"
                onSubmit={editProfile}
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

export default ProfileEditScreen