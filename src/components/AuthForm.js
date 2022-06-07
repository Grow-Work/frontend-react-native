import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'

const AuthForm = ({header, errorMessage, onSubmit, buttonText}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [account_type, setAccountType] = useState('')
    
    return (
        <>
        <Text h3 style={{marginBottom: 25}} >{header}</Text>
        <Input 
            label="Email" 
            value={email} 
            onChangeText={setEmail}
            autoCapitalize="none"
            autoCorrect={false}
            />
        <Input 
            label="Password" 
            value={password} 
            onChangeText={setPassword} 
            autoCapitalize="none"
            autoCorrect={false}
            />
        <Input 
            label="Account Type" 
            value={account_type} 
            onChangeText={setAccountType} 
            autoCapitalize="none"
            autoCorrect={false}
            />

        <Text style={styles.errorMessage} >{errorMessage}</Text>
        <Button 
            title={buttonText}
            onPress={() => onSubmit({email, password, account_type})}
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

export default AuthForm