import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import { ScrollView } from 'react-navigation'

const NewbProfileForm = ({header, errorMessage, onSubmit, buttonText}) => {

    const initialFormValues = {
        first_name: "",
        last_name: "",
        location: "",
        email: "",
        phone: "",
        bio: "",
        skills: ""
    }
  
      const [form, setForm] = useState(initialFormValues)
    
    return (
        <ScrollView>
            <Text h3 style={{marginBottom: 25}} >{header}</Text>
            <Input 
                label="First Name" 
                value={form.first_name} 
                onChangeText={text => setForm({...form, first_name: text})}
                autoCorrect={false}
            />
            <Input 
                label="Last Name" 
                value={form.last_name} 
                onChangeText={text => setForm({...form, last_name: text})}
                autoCorrect={false}
            />
            <Input 
                label="Location" 
                value={form.location} 
                onChangeText={text => setForm({...form, location: text})}
                autoCorrect={false}
            />
            <Input 
                label="Email" 
                value={form.email} 
                onChangeText={text => setForm({...form, email: text})}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Input 
                label="Phone" 
                value={form.phone} 
                placeholder="ex.: 555-555-5555"
                onChangeText={text => setForm({...form, phone: text})}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Input 
                label="Bio" 
                value={form.bio} 
                onChangeText={text => setForm({...form, bio: text})}
                autoCorrect={false}
            />
            <Input 
                label="Skills" 
                value={form.skills} 
                onChangeText={text => setForm({...form, skills: text})}
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