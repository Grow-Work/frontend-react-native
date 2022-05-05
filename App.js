import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import ProfileCreateScreen from './src/screens/ProfileCreateScreen';
import ProfileDetailScreen from './src/screens/ProfileDetailScreen';
import ProfileListScreen from './src/screens/ProfileListScreen';
import {Provider as AuthProvider} from './src/context/AuthContext'
import { setNavigator } from './src/navigationRef';
import {FontAwesome} from '@expo/vector-icons'
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';

const ProfileListFlow = createStackNavigator({
  ProfileList: ProfileListScreen,
  ProfileDetail: ProfileDetailScreen,
})

ProfileListFlow.navigationOptions = {
  title: 'Profiles',
  tabBarIcon: <FontAwesome name="th-list" size={20} />
}

const switchNavigator = createSwitchNavigator({
  resolveAuth: ResolveAuthScreen,
  loginFlow: createStackNavigator ({
    Signup: SignupScreen,
    Signin: SigninScreen,
  }),
  mainFlow: createBottomTabNavigator({
    ProfileListFlow,
    ProfileCreate: ProfileCreateScreen,
    Account: AccountScreen,
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