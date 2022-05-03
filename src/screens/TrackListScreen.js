import React from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'

const TrackListScreen = ({navigation}) => {
    return (
    <>
    <Button 
            title="details"
            onPress={() => navigation.navigate('TrackDetail')}
        />
    </>
    )
}

TrackListScreen.navigationOptions = {
    title: 'Tracks'
}

const styles = StyleSheet.create({})

export default TrackListScreen