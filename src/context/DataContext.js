import CreateContext from "./CreateContext";
import serverConnectApi from '../api/serverConnect'
import AsyncStorage from "@react-native-async-storage/async-storage";

const accountReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return {...state, errorMessage: action.payload}
        case 'get_account_type':
            return {errorMessage: '', accountType: action.payload}
        case 'clear_error_message':
            return {...state, errorMessage: ''}
        default:
            return state
    }
}

const getAccountType = dispatch => async () => {
    const accountType = await AsyncStorage.getItem('accountType')
    if (accountType) {
        dispatch({type:'get_account_type', payload: accountType})
    } else {
        dispatch({type: 'add_error', payload: "No account type found."})
    }
}

const clearErrorMessage = dispatch => () => {
    dispatch({type: 'clear_error_message'})
}


export const {Provider, Context} = CreateContext(
    accountReducer,
    {clearErrorMessage, getAccountType},
    {accountType: null, errorMessage: ''}
)