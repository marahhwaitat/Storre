import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/home/HomeScreen";
import CartScreen from "../screens/cart/CartScreen";
import ProfileScreen from "../screens/profile/ProfileScreen";
import { AppColors } from "../style/colors";
import { s, vs } from "react-native-size-matters";
import { Ionicons } from '@expo/vector-icons';
import { Is_Android } from "../constants/constant";

const Tab = createBottomTabNavigator ()

export default function MainAppBottomTabs (){
    return (
        <Tab.Navigator
        screenOptions={{

        headerShown:false,
        tabBarActiveTintColor :AppColors.primary,
        tabBarLabelStyle : {
            marginTop : vs(4),
            fontSize : s(12)
        },
        tabBarStyle : Is_Android && {
            height :vs(50)
        }
        }}>
            <Tab.Screen name="Home"  component={HomeScreen} 
            options={{
                tabBarIcon :({color , size}) =>(
                    <Ionicons  name="home" size ={size} color={color}/>
                ),
                title : "Home"
            }}
            />
             <Tab.Screen name="Cart"  component={CartScreen}  options={ {
                tabBarIcon : ({color ,size}) => (
                   <Ionicons name="cart" size={size} color={color} />

                )  ,
                title :"Cart"           }}/>
              <Tab.Screen name="Profile"  component={ProfileScreen} options={{
                tabBarIcon :({color ,size }) => (
                    <Ionicons name="person" size={size} color={color}  />
                )
              }}/>
              
        </Tab.Navigator>
    )
};