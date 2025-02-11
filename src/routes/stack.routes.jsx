import { createStackNavigator } from "@react-navigation/stack";

import Login from "../screens/Login";
import Home from "../screens/Home";
import Cadastro from "../screens/Cadastro";
import DrawerRoutes from "./drawer.routes";

const Stack = createStackNavigator();

export default function StackRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{headerShown: false}} name="Login" component={Login} />
            <Stack.Screen options={{headerShown: false}} name="Home" component={DrawerRoutes} />
            <Stack.Screen options={{headerShown: false}} name="Cadastro" component={Cadastro} />
        </Stack.Navigator>
    );
}
