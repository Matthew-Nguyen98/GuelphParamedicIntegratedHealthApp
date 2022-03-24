import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import React, {useState, useContext} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Logo from '../assets/Logo.png';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import { settings } from '../config/config';
import axios from 'axios';
import { CredentialsContext } from '../components/CredentialsContext';


const AccountScreen = ({navigation}) => {



  const {storedCredentials, setStoredCredentials} = useContext(CredentialsContext);
  //set email to stored email


  //logic

  const onChangePress = (emailAddress,oldPassword, newPassword, confirmPassword ) =>{
    console.log(newPassword);
    console.log(confirmPassword);
    
    if(newPassword == confirmPassword){
    const url=settings.baseAPI+"changepwd";
    const values = {emailAddress,oldPassword,newPassword};
    console.log(url);
    console.log("this is the email:" + values.emailAddress);
    axios.post(url,values)
         .then((response)=>{
             const result = response.data;
             console.log(result);
             const {status,message,user} = result;
             //success case
             if (status !== 'SUCCESS'){
                 //handleMessage(message,status);
              console.log(status);
             }
             else{
               
                 navigation.navigate('Home');
                 console.log("success");
             }
     //        setSubmitting(false);
         })
         .catch(error =>{
  
        //setSubmitting(false);
        //handleMessage("Error occured. Try again later");
  
    })
  }
  else{
    console.log("passwords do not match");
  }
}

  const [emailAddress, setEmailAddress] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <View style={ styles.container}>
      <Image source={Logo} style ={styles.image} resizeMode="contain"/>
      <Text style={styles.title}>Change Password</Text>
      <CustomInput placeholder={storedCredentials.user[0].emailAddress} editable={false}/>
      <CustomInput placeholder="Old Password" value={oldPassword} setValue={setOldPassword}/>
      <CustomInput placeholder="New Password" value={newPassword} setValue={setNewPassword}/>
      <CustomInput placeholder="Confirm Password" value={confirmPassword} setValue={setConfirmPassword}/>
      <CustomButton text="UpdatePassword"  onPress={() =>{
         onChangePress(storedCredentials.user[0].emailAddress,oldPassword,newPassword, confirmPassword);
        }}/>      
    </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    textAlign: "center",
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
