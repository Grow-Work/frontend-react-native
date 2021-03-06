import CreateContext from "./CreateContext";
import serverConnectApi from '../api/serverConnect'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { navigate } from "../navigationRef";

const dataReducer = (state, action) => {
    switch (action.type) {
        case 'fetch_jobs':
            return {...state, jobs: action.payload}
        case 'fetch_companies':
            return {...state, companies: action.payload}
        case 'fetch_newbs':
            return {...state, newbs: action.payload}
        case 'get_account_type':
            return {...state, accountType: action.payload}
        case 'fetch_account_profile':
            return {...state, accountProfile: action.payload}
        case 'edit_account_profile':
            return {...state, accountProfile: action.payload}
        case 'fetch_job_listings':
            return {...state, jobListings: action.payload}
        case 'edit_company_job_listings':
            return {...state, formValues: action.payload}
        case 'fetch_newb_saved_jobs':
            return {...state, savedJobs: action.payload}
        case 'add_error':
            return {...state, errorMessage: action.payload}
        case 'clear_error_message':
            return {...state, errorMessage: ''}
        case 'reset_job_form':
            return {...state, title: '', company: ''}
        default:
            return state
    }
}

const fetchJobs = dispatch => async () => {

    try {
        const response = await serverConnectApi.get('/jobs')
        dispatch({type: 'fetch_jobs', payload: response.data.reverse()})
    } catch (error) {
        dispatch({type: 'add_error', payload: `${error}`})
    }

}

const fetchNewbs = dispatch => async () => {

    try {
        const response = await serverConnectApi.get('/professionals')
        dispatch({type: 'fetch_newbs', payload: response.data.reverse()})
    } catch (error) {
        dispatch({type: 'add_error', payload: `${error}`})
    }

}

const fetchCompanies = dispatch => async () => {

    try {
        const response = await serverConnectApi.get('/companies')
        dispatch({type: 'fetch_companies', payload: response.data.reverse()})
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

const fetchJobListings = dispatch => async () => {
    
    try {
        const company = await serverConnectApi.get('/account/job-listings')
        // const response = await serverConnectApi.get('/account/saved-jobs')
        dispatch({type: 'fetch_job_listings', payload: company.data.reverse()})
    } catch (error) {
        dispatch({type: 'add_error', payload: `${error}`})
    }

}

const createJobListing = dispatch => async (form) => {
   
    try {
        const response = await serverConnectApi.post('/account/job-listings', form)
        dispatch({type: 'fetch_job_listings', payload: response.data})
    } catch (error) {
        dispatch({type: 'add_error', payload: `${error}`})
    }
}

const editJobListing = dispatch => async ({form, _id}) => {
   
    try {
        const response = await serverConnectApi.put(`/account/job-listings/${_id}`, form)
        dispatch({type: 'fetch_job_listings', payload: response.data})
    } catch (error) {
        dispatch({type: 'add_error', payload: `${error}`})
    }
}

const deleteJobListing = dispatch => async ({_id}) => {

    try {
        await serverConnectApi.delete(`/account/job-listings/${_id}`)
        const response = await serverConnectApi.get('/account/job-listings')
        dispatch({type: 'fetch_job_listings', payload: response.data})
    } catch (error) {
        dispatch({type: 'add_error', payload: `${error}`})
    }
}

const fetchProfile = dispatch => async () => {
    try {
        const response = await serverConnectApi.get('/account/profile')
            dispatch({type: 'fetch_account_profile', payload: response.data})

    } catch (error) {
        dispatch({type: 'add_error', payload: `${error}`})
    }

}

const createProfile = dispatch => async (form) => {

    try {
        await serverConnectApi.post('/account/profile', form)
        navigate('Account')
    } catch (error) {
        dispatch({type: 'add_error', payload: `${error}`})
    }
}

const editProfile = dispatch => async (form) => {
  
    try {
        const response = await serverConnectApi.put('/account/profile', form)
        dispatch({type: 'edit_account_profile', payload: response.data})

    } catch (error) {
        dispatch({type: 'add_error', payload: `${error}`})
    }
}

const deleteProfile = dispatch => async () => {

    try {
        await serverConnectApi.delete('/account/profile')
    } catch (error) {
        dispatch({type: 'add_error', payload: `${error}`})
    }
}

const clearErrorMessage = dispatch => () => {
    dispatch({type: 'clear_error_message'})
}


export const {Provider, Context} = CreateContext(
    dataReducer,
        {
        clearErrorMessage, 
        getAccountType, 
        fetchNewbs, 
        fetchJobs, 
        fetchCompanies, 
        fetchProfile, 
        createProfile, 
        editProfile, 
        deleteProfile, 
        fetchJobListings,
        createJobListing, 
        editJobListing, 
        deleteJobListing, 
        },
    {accountType: null, errorMessage: ''}
)