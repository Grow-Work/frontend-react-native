import React, {useContext} from 'react'
import { StyleSheet, Text } from 'react-native'
import { Context as DataContext } from '../context/DataContext'
import { SafeAreaView } from 'react-native-safe-area-context'

const NewbProfileDetailScreen = ({navigation}) => {

    const {state} = useContext(DataContext)
    const _id = navigation.getParam('_id')
    const company = state.find(t => t._id === _id)

    return (
        <SafeAreaView style={styles.container} forceInset={{top: 'always'}}>
        <Text style={styles.header} >{company.name}</Text>
        <Text style={styles.text} >{company.location}</Text>
        <Text style={styles.text} >And other data here...</Text>
        </SafeAreaView>
        )
}

const styles = StyleSheet.create({
    header: {
        fontSize: 30,
        marginBottom: 10
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

export default NewbProfileDetailScreen