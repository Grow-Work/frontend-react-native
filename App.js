import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import ProfileCreateScreen from './src/screens/ProfileCreateScreen';
import ProfileDetailScreen from './src/screens/ProfileDetailScreen';
import NewbProfileListScreen from './src/screens/NewbProfileListScreen';
import {Provider as AuthProvider} from './src/context/AuthContext'
import { setNavigator } from './src/navigationRef';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';
import {MaterialIcons, Ionicons, MaterialCommunityIcons, FontAwesome5} from '@expo/vector-icons'
import CompanyListScreen from './src/screens/CompanyListScreen';
import CompanyDetailScreen from './src/screens/CompanyDetailScreen';
import JobListScreen from './src/screens/JobListScreen';
import JobDetailScreen from './src/screens/JobDetailScreen';

const NewbProfileListFlow = createStackNavigator({
  NewbProfileList: NewbProfileListScreen,
  ProfileDetail: ProfileDetailScreen,
})

NewbProfileListFlow.navigationOptions = {
  title: 'Newbs',
    tabBarIcon: <Ionicons name="people-outline" size={20} />
}

const CompanyListFlow = createStackNavigator({
  CompanyList: CompanyListScreen,
  CompanyDetail: CompanyDetailScreen,
})

CompanyListFlow.navigationOptions = {
  title: 'Companies',
  tabBarIcon: <FontAwesome5 name="building" size={20} />
}

const AccountFlow = createStackNavigator({
  Account: AccountScreen,
  ProfileCreate: ProfileCreateScreen
})

AccountFlow.navigationOptions = {
  title: 'Account',
  tabBarIcon: <MaterialCommunityIcons name="account-circle-outline" size={20} />
}

const JobListFlow = createStackNavigator({
  JobList: JobListScreen,
  JobDetail: JobDetailScreen
})

JobListFlow.navigationOptions = {
  title: 'Jobs',
    tabBarIcon: <MaterialIcons name="work-outline" size={20} />
}

const switchNavigator = createSwitchNavigator({
  resolveAuth: ResolveAuthScreen,
  loginFlow: createStackNavigator ({
    Signup: SignupScreen,
    Signin: SigninScreen,
  }),
  mainFlow: createBottomTabNavigator({
    AccountFlow,
    JobListFlow,
    NewbProfileListFlow,
    CompanyListFlow,
  }),
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <AuthProvider>
      <App ref={(navigator) => {setNavigator(navigator)}} />
    </AuthProvider>
  )
}