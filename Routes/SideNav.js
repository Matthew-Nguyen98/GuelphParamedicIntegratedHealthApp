import HomeScreen from '../screens/HomeScreen';
import ContactScreen  from '../screens/ContactScreen';
import ResourceScreen from '../screens/ResourceScreen';
import AssessmentScreen from '../screens/Assessment';
import MedicalDirectiveScreen from '../screens/MedicalDirective';
import FormsScreen from '../screens/Forms';
import { createDrawerNavigator } from '@react-navigation/drawer';

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
</Drawer.Navigator>
    );
}

export default SideNav;