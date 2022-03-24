import { StyleSheet, Text, View, TextInput, Button, ButtonGroup, withTheme } from 'react-native';
import React, {useContext} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CredentialsContext } from '../components/CredentialsContext';
import CustomButton from '../components/CustomButton';



const HomeScreen = ({navigation}) => {

  const {storedCredentials, setStoredCredentials} = useContext(CredentialsContext);
  const clearLogin = () => {
    AsyncStorage.removeItem('loginCredentials')
    .then(() => {
      setStoredCredentials("");
    })
    .catch(error => console.log(error))
  }

  return (

    
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Contact')}
        title="Contacts"
      />
      <Button
        onPress={() => navigation.navigate('Forms')}
        title="Forms"
      />
      <Button
        onPress={() => navigation.navigate('MedicalDirective')}
        title="Medical Directives"
      />
      <Button
        onPress={() => navigation.navigate('Resources')}
        title="Resources"
      />
      <Button
        onPress={() => navigation.navigate('Assessments')}
        title="Assessments"
      />
      <CustomButton
      text={"LOG OUT"}
      onPress={clearLogin}/>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container:{
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
},
    title: {
        fontSize: 30,
        textAlign: "center",
        marginTop: 30,
        paddingVertical: 8,
    },
});
