import React from 'react'
import { View, StyleSheet, Text, Button, Linking} from 'react-native'

const ProfileListScreen = ({navigation}) => {
    return (
    <>
    {/* this is an expamle of adding in a clickable link to an axternal URL */}
    <Text style={{color: 'blue'}}
      onPress={() => Linking.openURL('http://google.com')}>
  Google
</Text>
    <Button 
            title="details"
            onPress={() => navigation.navigate('ProfileDetail')}
        />
    </>
    )
}

ProfileListScreen.navigationOptions = {
    title: 'Profiles'
}

const styles = StyleSheet.create({})

export default ProfileListScreen