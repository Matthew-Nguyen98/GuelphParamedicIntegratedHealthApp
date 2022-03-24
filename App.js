import { StyleSheet, Text, View, Button } from 'react-native';
import react, { useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { CredentialsContext } from './components/CredentialsContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RootStack from './Routes/RootStack';
import AppLoading from 'expo-app-loading';



const Drawer = createDrawerNavigator();

export default function App() {

const [appReady, setAppReady] = useState(false);
const [storedCredentials, setStoredCredentials] = useState('');

const checkLoginCredentials = () => {
  AsyncStorage
  .getItem('loginCredentials')
  .then((result) => {
    if(result !== null){
      setStoredCredentials(JSON.parse(result));
    }
    else{
      setStoredCredentials(null);
    }
  })
  .catch(error => console.log(error))
}

if(!appReady){
  return(
    <AppLoading
    startAsync={checkLoginCredentials}
    onFinish={() => setAppReady(true)}
    onError={console.warn}
    />
  )
}
  return (
  <CredentialsContext.Provider value={{storedCredentials, setStoredCredentials}}>
  <RootStack/>
  </CredentialsContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  sectionTitle: {
    fontSize:24,
    fontWeight: 'bold'
  },
});
