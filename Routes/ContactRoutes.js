import HomeScreen from '../screens/HomeScreen';
import ContactScreen  from '../screens/ContactScreen';
import ResourceScreen from '../screens/ResourceScreen';
import AssessmentScreen from '../screens/Assessment';
import MedicalDirectiveScreen from '../screens/MedicalDirective';
import FormsScreen from '../screens/Forms';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import AccountScreen from '../screens/AccountScreen';
import { FlatList, View, Pressable, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import { settings } from '../config/config';





const ContactRoutes = () => {
    const [category, setCategory] = useState('');
    useEffect(() => {
        Axios.get(settings.baseAPI+"contacts")
        .then((response) => {
          console.log(response.data);       
          const myContacts = response.data;
          setCategory(myContacts);
        })
        .catch((error) => {
          console.log('There has been a problem with your fetch operation: ' + error.message);
           // ADD THIS THROW error
            throw error;
        });
      },[]);

      const Item = ({ categoryName }) => (
        <View >
          <Pressable onPress={() => navigation.navigate('Contact')} style={styles.title}>{categoryName}</Pressable>
        </View>
      );

      const renderItem = ({ item }) => (
        <Item 
            categoryName={item.categoryID}
         />
      );


    return(
         //render all of the categories in a pressable list -> navigate to contactscreen with the prop of the category
        <View>
        <FlatList
        data={category}
        renderItem={renderItem}
        keyExtractor={item => item.contactID}
      />
      </View>
    );
}

/* <Stack.Navigator>
<Stack.Screen name="Home" component={HomeScreen} />
<Stack.Screen name="Contact" component={ContactScreen} />
<Stack.Screen name="Resources" component={ResourceScreen} />
<Stack.Screen name="Assessments" component={AssessmentScreen} />
<Stack.Screen name="MedicalDirective" component={MedicalDirectiveScreen} />
<Stack.Screen name="Forms" component={FormsScreen} />
<Stack.Screen name="Account" component={AccountScreen} />
</Stack.Navigator> */


export default ContactRoutes;

const styles = StyleSheet.create({
    container: {
      flex: 1,
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