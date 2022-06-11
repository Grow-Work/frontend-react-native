import React, {useContext} from 'react'
import { StyleSheet, View } from 'react-native'
import CompanyProfileForm from '../../components/CompanyProfileForm'
import { Context as DataContext } from '../../context/DataContext'

const ProfileEditScreen = () => {

    const {state, editCompanyProfile} = useContext(DataContext)

    return (
        <View style={styles.container}>
        <CompanyProfileForm 
            header="Create Profile"
            buttonText="Save"
            onSubmit={editCompanyProfile}
        />
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