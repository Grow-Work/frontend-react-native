import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import { ScrollView } from 'react-navigation'
import { Context as DataContext } from '../context/DataContext'

const CompanyProfileForm = ({header, errorMessage, onSubmit, buttonText}) => {
    
    const {state} = useContext(DataContext)

    const [name, setName] = useState("")
    const [location, setLocation] = useState("")
    const [sector, setSector] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [description, setDescription] = useState('')
    const [links, setLinks] = useState([company.links])
    
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
            label="Description" 
            value={description} 
            onChangeText={setDescription}
            autoCorrect={false}
            />
        <Input 
            label="Sector" 
            value={sector} 
            onChangeText={setSector}
            />
        <Input 
            label="Email" 
            value={email} 
            onChangeText={setEmail}
            autoCapitalize="none"
            autoCorrect={false}
            />
        <Input 
            label="Phone" 
            value={phone} 
            onChangeText={setPhone}
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
            onPress={() => onSubmit({email, name, phone, sector, description, location})}
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