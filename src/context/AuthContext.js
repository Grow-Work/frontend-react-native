import createDataContext from "./createDataContext";
import serverConnectApi from '../api/serverConnect'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return {...state, errorMessage: action.payload}
        case 'signin':
            return {errorMessage: '', token: action.payload}
        case 'clear_error_message':
            return {...state, errorMessage: ''}
        case 'signout':
            console.log('signout case here')
            return {token: null, errorMessage: ''}
        default:
            return state
    }
}

const tryLocalSignin = dispatch => async () => {
    const token = await AsyncStorage.getItem('token')
    if (token) {
        dispatch({type:'signin', payload: token})
        navigate('ProfileList')
    } else {
        navigate('Signup')
    }
}

const clearErrorMessage = dispatch => () => {
    dispatch({type: 'clear_error_message'})
}

const signup = dispatch => async ({email, password, account_type}) => {
        try {
            const response = await serverConnectApi.post('/auth/signup', {email, password, account_type})
            await AsyncStorage.setItem('token', response.data.token)
            dispatch({type: 'signin', payload: response.data.token})
            navigate('Account')
        } catch (error) {
            dispatch({type: 'add_error', payload: "Sign up failed."})
        }
    }

const signin = dispatch => async ({email, password}) => {
        try {
            const response = await serverConnectApi.post('/auth/signin', {email, password})
            await AsyncStorage.setItem('token', response.data.token)
            dispatch({type: 'signin', payload: response.data.token})
            navigate('Account')
        } catch (error) {
            dispatch({type: 'add_error', payload: "In correct email or password."})
        }
    }

const signout = dispatch => async () => {
        await AsyncStorage.removeItem('token')
        dispatch({type:'signout'})
        console.log('ready to navigate back?')
        navigate('Signin')
    }

export const {Provider, Context} = createDataContext(
    authReducer,
    {signin, signout, signup, clearErrorMessage, tryLocalSignin},
    {token: null, errorMessage: ''}
)