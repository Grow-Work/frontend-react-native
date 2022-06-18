import React, { useContext } from 'react'
import { View, StyleSheet, Text, Pressable, Button} from 'react-native'
import { Context as DataContext } from '../../context/DataContext'
import { NavigationEvents } from 'react-navigation'

const WelcomeScreen = ({navigation}) => {

    const {state, getAccountType} = useContext(DataContext)
    
    return (
        
        <View style={styles.container}>
        <NavigationEvents onWillFocus={getAccountType} />
        <Text>Welcome!</Text>
        <Button onPress={() => 
                navigation.navigate('Create')
            }
            title={"Let's do this!!"}
            />
        </View>
        )
}

WelcomeScreen.navigationOptions = () => {
    return {
      headerShown: false,
    };
};

const styles = StyleSheet.create({
    container: {
        margin: 15,
        flex: 1,
        justifyContent: 'center',
        marginBottom: 120
    }
})

export default WelcomeScreen