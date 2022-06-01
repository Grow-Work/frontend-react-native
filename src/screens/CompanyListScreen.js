import React from 'react'
import { SafeAreaView, StyleSheet, Text, Button} from 'react-native'

const CompanyListScreen = ({navigation}) => {

    const [companiesList, setCompaniesList] = useState([])

    useEffect(() => {
        serverConnectApi
          .get('/jobs')
          .then((res) => setCompaniesList(res.data))
          .catch((err) => console.log(err, "it has an error"));
      }, []);

      console.log(companiesList)

    return (
        <SafeAreaView style={styles.container} forceInset={{top: 'always'}}>
        <Text style={styles.header} >Company List Screen</Text>
        <Text style={styles.text} >This is some other info about this screen.</Text>
        <Text></Text>
        <Button 
            title="details"
            onPress={() => navigation.navigate('CompanyDetail')}
        />
        </SafeAreaView>
    )
}

CompanyListScreen.navigationOptions = {
    title: 'Companies',
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

export default CompanyListScreen