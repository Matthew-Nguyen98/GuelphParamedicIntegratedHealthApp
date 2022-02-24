
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, View, TextInput, Button, ButtonGroup, withTheme } from 'react-native';
import react from 'react';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

const onSubmit= () =>{
    //if oldpassword matches db && new password == confirm password
    //{update database}

    //elseif oldpassword doesnt match alert{incorrect password}

    //elseif newpassword != confirm password alert {passwords do not match}

    alert("Password changed");
}


const Password = () => {
    return(
    <SafeAreaView style={styles.container}>
        {/* change password */}
        <Text style={styles.title}>Change Password</Text>
        <CustomInput placeholder="Old Password" />
        <CustomInput placeholder="new Password"/>
        <CustomInput placeholder="Confirm Password"/>

        <CustomButton text="Submit" onPress={onSubmit}/>

        

    </SafeAreaView>
    );
}

export default Password;

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