import { createStackNavigator } from "@react-navigation/stack";
import SignInScreen from "../screens/auth/signInScreen";
import SignUpScreen from "../screens/auth/signupScreen";

const stack =createStackNavigator()

export default function AuthStack () {
    return (
        <stack.Navigator
           screenOptions={{
            headerShown:false
           }}
        
        >
            <stack.Screen  name="signInScreen" component={SignInScreen}/>
            <stack.Screen  name="signUpScreen" component={SignUpScreen}/>
        </stack.Navigator>
    )
}