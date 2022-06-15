import React, {useContext} from 'react'
import { StyleSheet, Text } from 'react-native'
import { Context as DataContext } from '../context/DataContext'
import { SafeAreaView } from 'react-native-safe-area-context'

const JobDetailScreen = ({navigation}) => {

    const {state} = useContext(DataContext)
    const _id = navigation.getParam('_id')
    const job = state.jobs.find(t => t._id === _id)

    return (
        <SafeAreaView style={styles.container} forceInset={{top: 'always'}}>
            <Text style={styles.header} >{job.title}</Text>
            <Text style={styles.text}>
                Company: {job.company}
                {'\n'}{'\n'}
                Description: {job.description}
                {'\n'}{'\n'}
                Compensation: {job.compensation}
                {'\n'}{'\n'}
                Required Skills: {job.required_skills}
                {'\n'}{'\n'}
                Preferred Skills: {job.preferred_skills}
                {'\n'}{'\n'}
                Location: {job.location}
                {'\n'}{'\n'}
                {job.job_type}
                {'\n'}{'\n'}
                {job.apply_link}
             </Text>
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
        marginTop: 15
    },
    text: {
        fontSize: 20,
        marginBottom: 5
    }
})

export default JobDetailScreen