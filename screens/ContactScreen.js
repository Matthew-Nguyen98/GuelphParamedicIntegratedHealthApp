import React from 'react';
import Axios from 'axios';
import {useEffect, useState} from 'react';
import { settings } from '../config/config';
import CustomInput from '../components/CustomInput';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Button } from 'react-native';
import { Linking } from 'react-native';
import CustomButton from '../components/CustomButton';

const Item = ({ firstName, lastName, emailAddress, officePhone, mobilePhone, position  }) => (
  <View style={styles.item}>             
    <Text style={styles.title}>{firstName} {lastName} {position} </Text>
    <Button onPress={() =>  Linking.openURL('mailto:'+emailAddress)} title={emailAddress}></Button>
    <Button onPress={() =>  Linking.openURL('tel:'+officePhone)} title={officePhone}></Button>
  </View>
);

const ContactScreen = ({navigation}) => {
  const [category, setCategory] = useState('');
  const [contacts, setContacts] = useState([]);
  const [customContacts,setCustomContacts] = useState(contacts);


 
    const renderItem = ({ item }) => (
      <Item style={styles.item} 
       firstName={item.firstName}
       lastName={item.lastName} 
       emailAddress={item.emailAddress}
       officePhone={item.officePhone}
       position={item.position}
       />
    );

    useEffect(() => {
      Axios.get(settings.baseAPI+"contacts")
      .then((response) => {
        console.log(response.data);       
        const myContacts = response.data; // replace firstname with category.includes (useState of search)
        setContacts(myContacts);
      })
      .catch((error) => {
        console.log('There has been a problem with your fetch operation: ' + error.message);
         // ADD THIS THROW error
          throw error;
      });
    },[]);

  return (
    <View style={styles.container}>
      <CustomInput
      placeholder='Search for a Contact'
      value={category}
      setValue= {setCategory
      }
      />
      
      <FlatList
        data={contacts}
        renderItem={renderItem}
        keyExtractor={item => item.contactID}
      />
    </View>
  );
}
export default ContactScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    justifyContent: 'center',
    alignItems: 'center',

  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    maxWidth: 350,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 8,
  },
  title: {
    fontSize: 32,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
