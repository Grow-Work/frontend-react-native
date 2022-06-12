// import * as React from 'react';
import React, {useContext} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import ProfileEditScreen from '../screens/accountScreens/ProfileEditScreen';
import ProfileScreen from '../screens/accountScreens/ProfileScreen';
import ProfileCreateScreen from '../screens/accountScreens/ProfileCreateScreen';
import AccountJobsScreen from '../screens/accountScreens/AccountJobsScreen';
import JobCreateScreen from '../screens/accountScreens/JobCreateScreen';
import SettingsScreen from '../screens/accountScreens/SettingsScreen';
import { Context as DataContext } from '../context/DataContext'
import { NavigationEvents } from 'react-navigation'

const Drawer = createDrawerNavigator();

MyDrawer.navigationOptions = {
    title: 'Account',
    tabBarIcon: <MaterialCommunityIcons name="account-circle-outline" size={20} />
  }

function Drawers() {

  const {state: {accountType}, getAccountType, clearErrorMessage, fetchProfile, fetchJobListings} = useContext(DataContext)
  
  function onFocus() {
    getAccountType()
    fetchProfile()
    fetchJobListings()
    clearErrorMessage()
  }

  return (
    <>
    <NavigationEvents onWillFocus={onFocus} />
    <Drawer.Navigator useLegacyImplementation>
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen name="Create Profile" component={ProfileCreateScreen} />
        <Drawer.Screen name="Edit Profile" component={ProfileEditScreen} />
        <Drawer.Screen name="Your Jobs" component={AccountJobsScreen} />
        {accountType === "company"? <Drawer.Screen name="Add Job" component={JobCreateScreen} /> : null}
        <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
    </>
  );
}

export default function MyDrawer() {
  return (
    <NavigationContainer>
      <Drawers />
    </NavigationContainer>
  );
}
