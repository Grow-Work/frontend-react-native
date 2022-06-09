// import * as React from 'react';
import React, {useContext} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import ProfileEditScreen from '../screens/accountScreens/ProfileEditScreen';
import ProfileScreen from '../screens/accountScreens/ProfileScreen';
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

  const {state, getAccountType} = useContext(DataContext)
  console.log(state)
  return (
    <>
    <NavigationEvents onWillFocus={getAccountType} />
    <Drawer.Navigator useLegacyImplementation>
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen name="Edit Profile" component={ProfileEditScreen} />
        <Drawer.Screen name="Jobs" component={AccountJobsScreen} />
        {state === "test"? <Drawer.Screen name="Add Job" component={JobCreateScreen} /> : null}
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
