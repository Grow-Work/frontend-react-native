import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import { ScrollView } from 'react-navigation'

const CompanyProfileForm = ({header, errorMessage, onSubmit, buttonText}) => {
    
    const initialFormValues = {
        name: "",
        description: "",
        location: "",
        sector: "",
        phone: "",
        email: ""
      }

      const [form, setForm] = useState(initialFormValues)
    
    return (
        <ScrollView>
        <Text h3 style={{marginBottom: 25}} >{header}</Text>
        <Input 
            label="Name" 
            value={form.name} 
            onChangeText={text => setForm({...form, name: text})}
            autoCorrect={false}
            />
        <Input 
            label="Description" 
            value={form.description} 
            onChangeText={text => setForm({...form, description: text})}
            autoCorrect={false}
            />
        <Input 
            label="Sector" 
            value={form.sector} 
            onChangeText={text => setForm({...form, sector: text})}
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
            onChangeText={text => setForm({...form, phone: text})}
            autoCorrect={false}
            />
        <Input 
            label="Location" 
            value={form.location} 
            onChangeText={text => setForm({...form, location: text})}
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

export default CompanyProfileForm