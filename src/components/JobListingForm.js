import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import { ScrollView } from 'react-navigation'

const JobListingForm = ({header, errorMessage, onSubmit, buttonText}) => {

    const initialFormValues = {
        title: '',
        company: '',
        description: '',
        compensation: '',
        job_type: '',
        location: '',
        apply_link: '',
        required_skills: '',
        preferred_skills: ''
    }

    const [form, setForm] = useState(initialFormValues)
    
    return (
        <>
        <Text h3 style={{marginBottom: 25}} >{header}</Text>
        <ScrollView>
            <Input 
                label="Title" 
                value={form.title} 
                onChangeText={text => setForm({...form, title: text})}
                autoCorrect={false}
                />
            <Input 
                label="Company" 
                value={form.company} 
                onChangeText={text => setForm({...form, company: text})}
                autoCorrect={false}
                />
            <Input 
                label="Description" 
                value={form.description} 
                onChangeText={text => setForm({...form, description: text})}
                autoCapitalize="none"
                autoCorrect={false}
                />
            <Input 
                label="Compensation"
                placeholder='Hourly wage or salary.'
                value={form.compensation} 
                onChangeText={text => setForm({...form, compensation: text})}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Input 
                label="Job Type"
                placeholder='Full time, contract, etc.'
                value={form.job_type} 
                onChangeText={text => setForm({...form, job_type: text})}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Input 
                label="Location" 
                value={form.location} 
                onChangeText={text => setForm({...form, location: text})}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Input 
                label="Apply Link" 
                value={form.apply_link} 
                onChangeText={text => setForm({...form, apply_link: text})} 
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Input 
                label="Required Skills" 
                value={form.required_skills} 
                onChangeText={text => setForm({...form, required_skills: text})} 
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Input 
                label="Preferred Skills" 
                value={form.preferred_skills} 
                onChangeText={text => setForm({...form, preferred_skills: text})} 
                autoCapitalize="none"
                autoCorrect={false}
            />

            <Text style={styles.errorMessage} >{errorMessage}</Text>
            <Button 
                title={buttonText}
                onPress={() => {
                    onSubmit(form);
                    setForm(initialFormValues)
                }}
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