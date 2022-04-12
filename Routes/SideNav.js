import HomeScreen from '../screens/HomeScreen';
import ContactRoutes from './ContactRoutes';
import ContactScreen from '../screens/ContactScreen';
import ResourceScreen from '../screens/ResourceScreen';
import AssessmentScreen from '../screens/Assessment';
import MedicalDirectiveScreen from '../screens/MedicalDirective';
import FormsScreen from '../screens/Forms';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AccountScreen from '../screens/AccountScreen';

const Drawer = createDrawerNavigator();

const SideNav = () => {
    return(
<Drawer.Navigator>
<Drawer.Screen name="Home" component={HomeScreen} />
<Drawer.Screen name="Contact" component={ContactScreen} />
<Drawer.Screen name="Resources" component={ResourceScreen} />
<Drawer.Screen name="Assessments" component={AssessmentScreen} />
<Drawer.Screen name="MedicalDirective" component={MedicalDirectiveScreen} />
<Drawer.Screen name="Forms" component={FormsScreen} />
<Drawer.Screen name="Account" component={AccountScreen} />
</Drawer.Navigator>
    );
}

export default SideNav;