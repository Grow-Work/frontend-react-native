import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'

const NavLink = ({navigation, touchText, linkTo}) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate(linkTo)} >
            <Text style={styles.link} >{touchText}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    link: {
        color: 'blue',
        marginTop: 30,
        fontSize: 16
    }
})

export default withNavigation(NavLink)