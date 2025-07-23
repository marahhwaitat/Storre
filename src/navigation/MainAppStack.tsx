import { createStackNavigator } from "@react-navigation/stack";
import AuthStack from "./authStack";
import MainAppBottomTabs from "./MainAppBottomTabs";
import CheckoutScreen from "../screens/cart/checkoutScreen";

 

 const Stack = createStackNavigator()

 export default function MainAppStack () {
    return (
        <Stack.Navigator
        screenOptions={{
            headerShown :false
        }

        }>
            <Stack.Screen  name="AuthStack" component={AuthStack}/>
       <Stack.Screen  name="MainAppBottomTabs" component={MainAppBottomTabs}/>
       <Stack.Screen  name="CheckoutScreen" options={{headerShown :true}} component={CheckoutScreen}/>
       

        </Stack.Navigator>
    )
 }
