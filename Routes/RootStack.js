import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen';
import SideNav from './SideNav';
import Reset from '../screens/Reset';
import React from 'react';

//context
import { CredentialsContext } from '../components/CredentialsContext';

const Stack = createNativeStackNavigator();

const RootStack = () =>{
    return(
        <CredentialsContext.Consumer>
            {({storedCredentials}) => (
                <NavigationContainer>
                <Stack.Navigator
                initialRouteName='Login'>
                    {storedCredentials ?(
                    <Stack.Screen name="SideNav" component={SideNav} options={{ headerShown: false }} />
                ):(
                <>
                    <Stack.Screen name="Login" component={LoginScreen}/>
                    <Stack.Screen name="Reset" component={Reset} options={{ headerShown: false }} />
                </>
                )}
                </Stack.Navigator>
                </NavigationContainer>
            )}
        </CredentialsContext.Consumer>
    )
}

export default RootStack;