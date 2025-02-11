import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home';
import Perfil from '../screens/Perfil';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen options={{headerShown: false}} name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Perfil} />
    </Drawer.Navigator>
  );
}