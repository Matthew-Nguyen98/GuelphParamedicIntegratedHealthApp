import { StyleSheet, Text, View, Button } from 'react-native';
import react from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import ContactScreen  from './screens/ContactScreen';
import ResourceScreen from './screens/ResourceScreen';
import AssessmentScreen from './screens/Assessment';
import MedicalDirectiveScreen from './screens/MedicalDirective';
import FormsScreen from './screens/Forms';
import SideNav from './Routes/SideNav';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
// function Root() {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="Home" component={HomeScreen} />
//       <Drawer.Screen name="Contact" component={ContactScreen} />
//       <Drawer.Screen name="Resources" component={ResourceScreen} />
//       <Drawer.Screen name="Assessments" component={AssessmentScreen} />
//       <Drawer.Screen name="Forms" component={FormsScreen} />
//     </Drawer.Navigator>
//   );
// }

export default function App() {
  return (
    <NavigationContainer Style={styles.container}>
        <Stack.Navigator>
    <Stack.Screen name="Login" component={LoginScreen}/>
    <Stack.Screen name="SideNav" component={SideNav} options={{ headerShown: false }} />
  </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  sectionTitle: {
    fontSize:24,
    fontWeight: 'bold'
  },
});
