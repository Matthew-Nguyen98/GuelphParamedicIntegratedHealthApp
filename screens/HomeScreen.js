import { StyleSheet, Text, View, TextInput, Button, Image, Pressable} from 'react-native';
import React, {useContext} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CredentialsContext } from '../components/CredentialsContext';
import CustomButton from '../components/CustomButton';
import Logo from '../assets/Logo.png';




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

    
    <View style={ styles.container }>
      <Image source={Logo} style ={styles.image} resizeMode="contain"/>

      <Pressable style={styles.button} onPress={() => navigation.navigate('Contact')}>
        <Text style={styles.text}>Contacts</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={() => navigation.navigate('MedicalDirective')}>
        <Text style={styles.text}>Medical Directives</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={() => navigation.navigate('Resources')}>
        <Text style={styles.text}>Resources</Text>
        </Pressable>

      <Pressable style={styles.button}onPress={() => navigation.navigate('Assessments')}>
        <Text style={styles.text}>Assessments</Text>
      </Pressable>

      <Pressable style={styles.button}onPress={() => navigation.navigate('Forms')}>
        <Text style={styles.text}>Forms</Text>
      </Pressable>
      <Pressable
      onPress={clearLogin}
      style={styles.logout}>
        <Text style={styles.logoutText}>Log Out</Text>
      </Pressable>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    textAlign: "center",
    marginTop: 30,
    paddingVertical: 8,
},
  container:{
    display: 'flex',
    alignItems: 'center',

  },
  button:{
      backgroundColor: '#3b71f3',
      minWidth: '70%',

      padding: 15,
      marginVertical: 5,

      alignItems: 'center',
      borderRadius: 5,
  },
  text:{
    color: 'white',
    fontSize: 18,
  },
  image:{
    width:'70%',
    height:'50%',
    maxWidth: 300,
    maxHeight: 200,
    marginTop: '5%',
    marginBottom: '10%',
  },
  logout:{
    backgroundColor: 'transparent',
    borderColor: '#3b71f3',
    borderWidth: 1,
    marginTop: 40,
    minWidth: '30%',
    alignItems: 'center',
    borderRadius: 5,

  },
  logoutText:{
    color: '#3b71f3',
    minWidth: '70%',
    fontWeight: 'bold',


    paddingVertical: 7,
    paddingHorizontal: 15,
    marginVertical: 1,
  }

});
