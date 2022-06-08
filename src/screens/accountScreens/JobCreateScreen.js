import React, {useContext} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import JobListingForm from '../../components/JobListingForm'
import { Context as DataContext } from '../../context/DataContext'

const JobCreateScreen = () => {

    const {state, getAccountType, clearErrorMessage} = useContext(DataContext)
    const jobs = []

    return (
        <View style={styles.container}>
        <JobListingForm
            header="Create New Job Listing"
            errorMessage={state.errorMessage}
            buttonText="Add Job"
            // onSubmit={signup}
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
        marginTop: 30
    }
})

export default JobCreateScreen