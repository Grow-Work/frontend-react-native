import CreateContext from "./CreateContext";
import serverConnectApi from '../api/serverConnect'
import AsyncStorage from "@react-native-async-storage/async-storage";

const dataReducer = (state, action) => {
    switch (action.type) {
        case 'fetch_job_listings':
            return action.payload
        case 'fetch_companies':
            return action.payload
        case 'fetch_newbs':
            return action.payload
        case 'get_account_type':
            return {errorMessage: '', accountType: action.payload}
        case 'fetch_account_profile':
            return action.payload
        case 'fetch_account_jobs':
            return
        case 'save_job':
            return
        case 'add_error':
            return {...state, errorMessage: action.payload}
        case 'clear_error_message':
            return {...state, errorMessage: ''}
        case 'reset_job_form':
            return {...state, title: '', location: ''}
        default:
            return state
    }
}

const fetchJobListings = dispatch => async () => {

    try {
        const response = await serverConnectApi.get('/jobs')
        dispatch({type: 'fetch_job_listings', payload: response.data})
    } catch (error) {
        dispatch({type: 'add_error', payload: `${error}`})
    }

}

const fetchNewbs = dispatch => async () => {

    try {
        const response = await serverConnectApi.get('/professionals')
        dispatch({type: 'fetch_newbs', payload: response.data})
    } catch (error) {
        dispatch({type: 'add_error', payload: `${error}`})
    }

}

const fetchCompanies = dispatch => async () => {

    try {
        const response = await serverConnectApi.get('/companies')
        dispatch({type: 'fetch_companies', payload: response.data})
    } catch (error) {
        dispatch({type: 'add_error', payload: `${error}`})
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
    dataReducer,
    {clearErrorMessage, getAccountType, fetchCompanies, fetchNewbs, fetchJobListings},
    {accountType: null, errorMessage: ''}
)