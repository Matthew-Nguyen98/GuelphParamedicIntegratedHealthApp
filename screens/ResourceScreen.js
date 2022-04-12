import React from 'react';
import Axios from 'axios';
import {useEffect, useState} from 'react';
import { settings } from '../config/config';
import CustomInput from '../components/CustomInput';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Button } from 'react-native';
import { openComposer } from "react-native-email-link";
import { Linking } from 'react-native';

const Item = ({ firstName, lastName, emailAddress, officePhone, mobilePhone, position  }) => (
  <View style={styles.item}>             
    <Text style={styles.title}>{firstName} {lastName} {position} </Text>
    <Button onPress={() =>  Linking.openURL('mailto:'+emailAddress)} title={emailAddress}></Button>
    <Button onPress={() =>  Linking.openURL('tel:'+officePhone)} title={officePhone}></Button>
  </View>
);


const ResourceScreen = () => {

  const [resources, setResources] = useState([]);

  useEffect(() => {
      Axios.get(settings.baseAPI+"resources")
      .then((response) => {
        console.log(response.data);
        const myResources = response.data;
        setResources(myResources);
      })
      .catch((error) => {
        console.log('There has been a problem with your fetch operation: ' + error.message);
         // ADD THIS THROW error
          throw error;
      });
    },[]);

    const renderItem = ({ item }) => (
      <Item style={styles.item}
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
      placeholder='Search for a Resource'/>
      <FlatList
        data={resources}
        renderItem={renderItem}
        keyExtractor={item => item.resourceID}
      />
    </View>
  );
}

export default ResourceScreen;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
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
    // maxWidth: 350,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 8,
  },
  title: {
    fontSize: 32,
  },
});
