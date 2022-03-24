import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import React, {useState, useContext} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Logo from '../assets/Logo.png';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import { settings } from '../config/config';
import axios from 'axios';
import SideNav from '../Routes/SideNav';
import Reset from './Reset';
import { CredentialsContext } from '../components/CredentialsContext';
import AsyncStorage from '@react-native-async-storage/async-storage';




const LoginScreen = ({navigation}) => {

const {storedCredentials, setStoredCredentials} = useContext(CredentialsContext);
const [emailAddress, setEmailAddress] = useState('');
const [password, setPassword] = useState('');

  const onSignInPressed = (emailAddress,password ) =>{
    const url=settings.baseAPI+"login";
    const values = {emailAddress,password};
    console.log(url);
    console.log(values);
    axios.post(url,values)
         .then((response)=>{
             const result = response.data;
             //add validation to make sure user[0] exists
             if(result != null)
             {
               if(result.user.length > 0)
               {
                 console.log("got here" + result.user[0].emailAddress);
               }
             }
             console.log("user:" + result.user[0].emailAddress);
             console.log(result);
             const {status,message,user} = result;
             //success case
             if (status !== 'SUCCESS'){
                 //handleMessage(message,status);
              console.log(status);
             }
             else{
                 persistLogin(response.data, message, status)
                 console.log("success");
             }
     //        setSubmitting(false);
         })
         .catch(error =>{
        //setSubmitting(false);
        //handleMessage("Error occured. Try again later");
  
    })
  
  }

  const persistLogin = (credentials, message, status) => {
    AsyncStorage.setItem('loginCredentials', JSON.stringify(credentials))
    .then(() =>{
      // handleMessage(message, status);
      setStoredCredentials(credentials)
    })
    .catch((error) => {
      console.log(error);
      // handleMessage('persisting login failed');
    })
  }

  return (
    <View style={ styles.container}>
      <Image source={Logo} style ={styles.image} resizeMode="contain"/>
      <CustomInput placeholder="Username" value={emailAddress} setValue={setEmailAddress}/>
      <CustomInput placeholder="Password" value={password} setValue={setPassword} secureEntry={true}/>
      <CustomButton text="LOG IN"  onPress={() =>{
         onSignInPressed(emailAddress,password);
        }}/>
              <CustomButton style={styles.reset} text="reset Password" onPress={() =>{navigation.navigate('Reset');}}/>
       {/* <Button
                title="Log In"
                buttonStyle={styles.button}
                type="outline"
                titleStyle={{ color: 'rgba(78, 116, 289, 1)' }}              
        onPress={() => navigation.navigate('Home')}
      /> */}
         
    </View>
  );
};

export default LoginScreen;

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
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'white',
  },
  image:{
    width:'70%',
    height:'50%',
    maxWidth: 300,
    maxHeight: 200,
    marginTop: '5%',
    marginBottom: '10%',
  }

});
