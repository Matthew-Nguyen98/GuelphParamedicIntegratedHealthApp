import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const LoginScreen = ({navigation}) => {
  return (
    <SafeAreaView style={ styles.container}>
      <Image
      source={{
        uri: 'http://guelph.ca/wp-content/uploads/GWParamedicsLogo-e1493822602747.png'
      }}
      />
      <Text style={ styles.title}>Log In:</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
      />
       <Button
                title="Log In"
                buttonStyle={styles.button}
                type="outline"
                titleStyle={{ color: 'rgba(78, 116, 289, 1)' }}              
        onPress={() => navigation.navigate('Home')}
      />
         
    </SafeAreaView>
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
input: {
    height: 40,
    width: '80%',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 6,
    
  },
  container:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '40%',
  },
  button:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'white',
  } 

});
