import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import React, {useState} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Logo from '../assets/Logo.png';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

const LoginScreen = ({navigation}) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const onSignInPressed = () =>{
    var test = true
    if(test){ //this is where validation of username and password
      navigation.navigate('SideNav')
    }
    
  }

  return (
    <View style={ styles.container}>
      <Image source={Logo} style ={styles.image} resizeMode="contain"/>
      <CustomInput placeholder="Username" value={username} setValue={setUsername}/>
      <CustomInput placeholder="Password" value={password} setValue={setPassword} secureEntry={true}/>
      <CustomButton text="LOG IN" onPress={onSignInPressed}/>
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
