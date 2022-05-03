import React, { useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import { Context as AuthContext } from '../context/AuthContext'
import { NavigationEvents } from 'react-navigation'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'

const SignupScreen = () => {

    const {state, signup, clearErrorMessage} = useContext(AuthContext)

    return (
        <View style={styles.container}>
            <NavigationEvents 
                onWillFocus={clearErrorMessage}
            />
        <AuthForm 
            header="Sign Up for Tracker"
            errorMessage={state.errorMessage}
            buttonText="Sign Up"
            onSubmit={signup}
        />
        <NavLink 
            touchText="Already have an account? Sign in instead."
            linkTo='Signin'        />
        </View>
        )
}

SignupScreen.navigationOptions = () => {
    return {
      headerShown: false,
    };
};

const styles = StyleSheet.create({
    container: {
        margin: 15,
        flex: 1,
        justifyContent: 'center',
        marginBottom: 120
    }
})

export default SignupScreen