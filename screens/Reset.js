import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import Logo from '../assets/Logo.png';
import { useState } from 'react';
import { settings } from '../config/config';
import axios from 'axios';

const Reset = () => {

    const [emailAddress, setEmailAddress] = useState('');

    const onResetPressed = (emailAddress) =>{
        const url=settings.baseAPI+"pwdreset";
        const values = {emailAddress};
        console.log(url);
        console.log(values);
        axios.post(url,values)
             .then((response)=>{
                 const result = response.data;
                 console.log(result);
                 const {status,message} = result;
                 //success case
                 if (status !== 'EMAILED'){
                     //handleMessage(message,status);
                  console.log("Reset Failed");
                  console.log(status);
                 }
                 else{
                     navigation.navigate('Login');
                     console.log("PasswordReset");
                 }
         //setSubmitting(false);
             })
             .catch(error =>{
      
            //setSubmitting(false);
            //handleMessage("Error occured. Try again later");
          })
}

return(
<View style={ styles.container}>
<Image source={Logo} style ={styles.image} resizeMode="contain"/>
<CustomInput
placeholder={"Enter your Email Address"}
value={emailAddress} setValue={setEmailAddress} />
<CustomButton
text="Reset Password"  onPress={()=>{onResetPressed(emailAddress)}}/>
</View>
)
}

export default Reset;

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
      width:'100%',
      height:'100%',
      maxWidth: 300,
      maxHeight: 200,
      marginTop: '5%',
      marginBottom: '10%',
    }
  
  });
  