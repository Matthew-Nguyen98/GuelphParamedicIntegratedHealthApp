import React from 'react';
import Axios from 'axios';
import {useEffect, useState} from 'react';
import { settings } from '../config/config';
import CustomInput from '../components/CustomInput';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import { Linking } from 'react-native';

const Item = ({ firstName, lastName, emailAddress, officePhone, mobilePhone, position  }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{firstName} {lastName} <a href={"mailto:" + emailAddress}>{emailAddress}</a> <a href={"tel:" + officePhone}> {officePhone}</a> {position}</Text>
  </View>
);



const ContactScreen = () => {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
      Axios.get(settings.baseAPI+"contacts")
      .then((response) => {
        console.log(response.data);
        const myContacts = response.data;
        setContacts(myContacts);
      })
      .catch((error) => {
        console.log('There has been a problem with your fetch operation: ' + error.message);
         // ADD THIS THROW error
          throw error;
      });
    },[]);

  const renderItem = ({ item }) => (
    <Item
     firstName={item.firstName}
     lastName={item.lastName}
     emailAddress={item.emailAddress}
     officePhone={item.officePhone}
     position={item.position}
     />
  );

  return (
    <View style={styles.container}>
      <CustomInput
      placeholder='Search for a Contact'/>
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
