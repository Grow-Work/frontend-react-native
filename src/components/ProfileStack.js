import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import ProfileEditScreen from '../screens/accountScreens/ProfileEditScreen';
import ProfileScreen from '../screens/accountScreens/ProfileScreen';

const ProfileFlow = createStackNavigator({
    Profile: ProfileScreen,
    ProfileEdit: ProfileEditScreen
  })

export default ProfileFlow