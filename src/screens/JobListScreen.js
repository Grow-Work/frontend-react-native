import React, {useEffect, useState} from 'react'
import { SafeAreaView, StyleSheet, Text, Button} from 'react-native'
import serverConnectApi from '../api/serverConnect'

const JobListScreen = ({navigation}) => {

    const [jobList, setJobList] = useState([])

    useEffect(() => {
        serverConnectApi
          .get('/jobs')
          .then((res) => setJobList(res.data))
          .catch((err) => console.log(err, "it has an error"));
      }, []);

      console.log(jobList)

    return (
        <SafeAreaView style={styles.container} forceInset={{top: 'always'}}>
        <Text style={styles.header} >Job List Screen</Text>
        <Text style={styles.text} >This is some other info about this screen.</Text>
        <Text></Text>
        <Button 
            title="details"
            onPress={() => navigation.navigate('JobDetail')}
        />
        </SafeAreaView>
    )
}

JobListScreen.navigationOptions = {
    title: 'Jobs',
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

export default JobListScreen