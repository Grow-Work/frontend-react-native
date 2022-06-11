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
        case 'fetch_company_job_listings':
            return {...state, jobListings: action.payload}
        case 'fetch_newb_saved_jobs':
            return {...state, savedJobs: action.payload}
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

let accountType

const fetchJobs = dispatch => async () => {

    try {
        const response = await serverConnectApi.get('/jobs')
        dispatch({type: 'fetch_jobs', payload: response.data})
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
    accountType = await AsyncStorage.getItem('accountType')
    if (accountType) {
        dispatch({type:'get_account_type', payload: accountType})
    } else {
        dispatch({type: 'add_error', payload: "No account type found."})
    }
}

const fetchCompanyJobListings = dispatch => async () => {

    try {
        const response = await serverConnectApi.get('/account/company/job-listings')
        dispatch({type: 'fetch_company_job_listings', payload: response.data})
    } catch (error) {
        dispatch({type: 'add_error', payload: `${error}`})
    }

}

const createJobListing = dispatch => async ({title, company}) => {
    console.log("createjoblisting function")
    try {
        const response = await serverConnectApi.post('/account/company/job-listings', {title, company})
        dispatch({type: 'reset_job_form'})
    } catch (error) {
        dispatch({type: 'add_error', payload: `${error}`})
    }
}

const editJobListing = dispatch => async ({title, company}) => {

    try {
        await serverConnectApi.put('/account/company/job-listings', {title, company})
    } catch (error) {
        dispatch({type: 'add_error', payload: `${error}`})
    }
}

const deleteJobListing = dispatch => async () => {

    try {
        await serverConnectApi.delete('/account/company/job-listings')
    } catch (error) {
        dispatch({type: 'add_error', payload: `${error}`})
    }
}

const fetchProfile = dispatch => async () => {
    try {
        const company = await serverConnectApi.get('/account/company/profile')
        const newb = await serverConnectApi.get('/account/professional/profile')
        if (accountType == "company") {
            console.log("company account")
            dispatch({type: 'fetch_account_profile', payload: company.data})
        } else {
            console.log("not company account")
            dispatch({type: 'fetch_account_profile', payload: newb.data})
        }
    } catch (error) {
        dispatch({type: 'add_error', payload: `${error}`})
    }

}

const createCompanyProfile = dispatch => async ({name, email, location}) => {

    try {
        await serverConnectApi.post('/account/company/profile', {name, email, location})
        // navigate('Account')
    } catch (error) {
        dispatch({type: 'add_error', payload: `${error}`})
    }
}

const editCompanyProfile = dispatch => async ({name, location, email}) => {

    try {
        await serverConnectApi.put('/account/company/profile', {name, location, email})
    } catch (error) {
        dispatch({type: 'add_error', payload: `${error}`})
    }
}

const deleteCompanyProfile = dispatch => async () => {

    try {
        await serverConnectApi.delete('/account/company/profile')
    } catch (error) {
        dispatch({type: 'add_error', payload: `${error}`})
    }
}

const createNewbProfile = dispatch => async ({first_name, email, location}) => {

    try {
        const response = await serverConnectApi.post('/account/professional/profile', {first_name, email, location})
        navigate('Account')
    } catch (error) {
        dispatch({type: 'add_error', payload: `${error}`})
    }
}

const editNewbProfile = dispatch => async ({first_name, location}) => {

    try {
        await serverConnectApi.put('/account/professional/profile', {first_name, location})
    } catch (error) {
        dispatch({type: 'add_error', payload: `${error}`})
    }
}

const deleteNewbProfile = dispatch => async () => {

    try {
        await serverConnectApi.delete('/account/professional/profile')
    } catch (error) {
        dispatch({type: 'add_error', payload: `${error}`})
    }
}

const clearErrorMessage = dispatch => () => {
    dispatch({type: 'clear_error_message'})
}


export const {Provider, Context} = CreateContext(
    dataReducer,
    {clearErrorMessage, getAccountType, fetchCompanies, createJobListing, fetchNewbs, fetchJobs, deleteCompanyProfile, deleteNewbProfile, deleteJobListing, editCompanyProfile, editJobListing, editNewbProfile, createNewbProfile, fetchProfile, createCompanyProfile, fetchCompanyJobListings},
    {accountType: null, errorMessage: ''}
)