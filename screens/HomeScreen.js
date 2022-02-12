import { StyleSheet, Text, View, TextInput, Button, ButtonGroup, withTheme } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';



const HomeScreen = ({navigation}) => {

  return (

    
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Contact')}
        title="Search db"
      />
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
    nav:{
      display: 'flex',
      justifyContent: 'space-evenly',
      marginTop: '50%',
      alignItems: 'center',
    },
    button:{
      justifyContent: 'space-between',
      backgroundColor: 'transparent',
      fontSize: 20,
      margin: 10,
      width: 200,
    }
});
