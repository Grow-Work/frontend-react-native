import React, { useState, useContext } from 'react'
import { StyleSheet } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import { ScrollView } from 'react-navigation'
import { Context as DataContext } from '../context/DataContext'

const NewbProfileForm = ({header, errorMessage, onSubmit, buttonText}) => {
    const {state} = useContext(DataContext)

    const [email, setEmail] = useState('')
    const [first_name, setFirstName] = useState('')
    const [location, setLocation] = useState('')
    
    return (
        <ScrollView>
            <Text h3 style={{marginBottom: 25}} >{header}</Text>
            <Input 
                label="First Name" 
                value={first_name} 
                onChangeText={setFirstName}
                autoCorrect={false}
            />
            <Input 
                label="Email" 
                value={email} 
                onChangeText={setEmail}
                autoCapitalize="none"
                autoCorrect={false}
                />
            <Input 
                label="Location" 
                value={location} 
                onChangeText={setLocation}
                autoCorrect={false}
                />

            <Text style={styles.errorMessage} >{errorMessage}</Text>
            <Button 
                title={buttonText}
                onPress={() => onSubmit({email, first_name, location})}
            />
        </ ScrollView>
    )
}

const styles = StyleSheet.create({
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginBottom: 15
    }
})

export default NewbProfileForm