import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import CustomInput from '../components/CustomInput';


const ContactScreen = () => {
  
const [keyword, setKeyword] = useState('');
  return (
    <View style= {styles.container}>
            <CustomInput placeholder="Search for a Contact" value={keyword} setValue={setKeyword} secureEntry={false}/>
    </View>
  );
};

export default ContactScreen;

const styles = StyleSheet.create({
  container:{
    display: 'flex',
    alignItems: 'center',

  },
});
