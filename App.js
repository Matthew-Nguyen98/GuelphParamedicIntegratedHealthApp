import { StyleSheet, Text, View, Button } from 'react-native';
import react from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import ContactScreen  from './screens/ContactScreen';
import ResourceScreen from './screens/ResourceScreen';
import AssessmentScreen from './screens/Assessment';
import MedicalDirectiveScreen from './screens/MedicalDirective';
import FormsScreen from './screens/Forms';
import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
export default function App() {


  return (
    <NavigationContainer>
    <Drawer.Navigator initialRouteName='Login'>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Contact" component={ContactScreen} />
      <Drawer.Screen name="Resource" component={ResourceScreen} />
      <Drawer.Screen name="Assessment" component={AssessmentScreen} />
      <Drawer.Screen name="MedicalDirective" component={MedicalDirectiveScreen} />
      <Drawer.Screen name="Forms" component={FormsScreen} />
    </Drawer.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  ArticleWraper:{
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize:24,
    fontWeight: 'bold'
  },
});
