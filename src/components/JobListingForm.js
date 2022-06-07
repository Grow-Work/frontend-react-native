import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'

const JobListingForm = ({header, errorMessage, onSubmit, buttonText}) => {

    const [title, setTitle] = useState('')
    const [company, setCompany] = useState('')
    const [description, setDescription] = useState('')
    
    return (
        <>
        <Text h3 style={{marginBottom: 25}} >{header}</Text>
        <Input 
            label="Title" 
            value={title} 
            onChangeText={setTitle}
            autoCorrect={false}
            />
        <Input 
            label="Company" 
            value={company} 
            onChangeText={setCompany}
            autoCorrect={false}
            secureTextEntry
            />
        <Input 
            label="Description" 
            value={description} 
            onChangeText={setDescription} 
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry
            />

        <Text style={styles.errorMessage} >{errorMessage}</Text>
        <Button 
            title={buttonText}
            onPress={() => onSubmit({title, company, description})}
        />
        </>
    )
}

const styles = StyleSheet.create({
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginBottom: 15
    }
})

export default JobListingForm