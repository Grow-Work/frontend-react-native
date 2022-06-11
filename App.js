import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import SigninScreen from './src/screens/authScreens/SigninScreen';
import SignupScreen from './src/screens/authScreens/SignupScreen';
import NewbProfileDetailScreen from './src/screens/NewbProfileDetailScreen';
import NewbProfileListScreen from './src/screens/NewbProfileListScreen';
import {Provider as AuthProvider} from './src/context/AuthContext'
import {Provider as DataProvider} from './src/context/DataContext'
import { setNavigator } from './src/navigationRef';
import ResolveAuthScreen from './src/screens/authScreens/ResolveAuthScreen';
import {MaterialIcons, Ionicons, FontAwesome5} from '@expo/vector-icons'
import CompanyListScreen from './src/screens/CompanyListScreen';
import CompanyDetailScreen from './src/screens/CompanyDetailScreen';
import JobListScreen from './src/screens/JobListScreen';
import JobDetailScreen from './src/screens/JobDetailScreen';
import MyDrawer from './src/components/MyDrawer';
import TestScreen from './src/screens/TestScreen';

const NewbProfileListFlow = createStackNavigator({
  NewbProfileList: NewbProfileListScreen,
  NewbProfileDetail: NewbProfileDetailScreen,
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
    Account: MyDrawer,
    JobListFlow,
    NewbProfileListFlow,
    CompanyListFlow,
    Test: TestScreen
  }),
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <AuthProvider>
      <DataProvider>
        <App ref={(navigator) => {setNavigator(navigator)}} />
      </DataProvider>
    </AuthProvider>
  )
}