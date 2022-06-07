import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import ProfileCreateScreen from './ProfileCreateScreen';
import AccountScreen from './AccountScreen';
import AccountJobsScreen from './AccountJobsScreen';
import JobCreateScreen from './JobCreateScreen';
import SettingsScreen from './SettingsScreen';

const account_type = "company"
// const account_type = "newb"

const Drawer = createDrawerNavigator();

MyDrawer.navigationOptions = {
    title: 'Account',
    tabBarIcon: <MaterialCommunityIcons name="account-circle-outline" size={20} />
  }

function Drawers() {
  return (
    <Drawer.Navigator useLegacyImplementation>
        <Drawer.Screen name="Profile" component={AccountScreen} />
        <Drawer.Screen name="Create Profile" component={ProfileCreateScreen} />
        <Drawer.Screen name="Jobs" component={AccountJobsScreen} />
        {account_type === "company"? <Drawer.Screen name="Add Job" component={JobCreateScreen} /> : null}
        <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

export default function MyDrawer() {
  return (
    <NavigationContainer>
      <Drawers />
    </NavigationContainer>
  );
}
