import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import { ScrollView } from 'react-navigation'
import { Context as DataContext } from '../context/DataContext'

const JobListingForm = ({header, errorMessage, onSubmit, buttonText}) => {

    const {state, createJobListing} = useContext(DataContext)

    const [title, setTitle] = useState('')
    const [company, setCompany] = useState('')
    const [description, setDescription] = useState('')
    const [compensation, setCompensation] = useState('')
    const [apply_link, setapply_link] = useState('')
    const [location, setLocation] = useState('')

    useEffect(() => {
        
    }, [state])
    
    return (
        <>
        <Text h3 style={{marginBottom: 25}} >{header}</Text>
        <ScrollView>
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
                />
            <Input 
                label="Description" 
                value={description} 
                onChangeText={setDescription} 
                autoCapitalize="none"
                autoCorrect={false}
                />
            <Input 
                label="Compensation" 
                value={compensation} 
                onChangeText={setCompensation} 
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Input 
                label="Location" 
                value={location} 
                onChangeText={setLocation} 
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Input 
                label="Apply Link" 
                value={apply_link} 
                onChangeText={setapply_link} 
                autoCapitalize="none"
                autoCorrect={false}
            />

            <Text style={styles.errorMessage} >{errorMessage}</Text>
            <Button 
                title={buttonText}
                onPress={() => onSubmit({title, company})}
            />
        </ ScrollView>
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