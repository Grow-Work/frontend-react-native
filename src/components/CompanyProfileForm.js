import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import { ScrollView } from 'react-navigation'

const CompanyProfileForm = ({header, errorMessage, onSubmit, buttonText}) => {

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [location, setLocation] = useState('')
    
    return (
        <ScrollView>
        <Text h3 style={{marginBottom: 25}} >{header}</Text>
        <Input 
            label="Name" 
            value={name} 
            onChangeText={setName}
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
            onPress={() => onSubmit({email, name, location})}
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

export default CompanyProfileForm