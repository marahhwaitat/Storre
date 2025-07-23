import { FlatList, StyleSheet,Text ,View } from "react-native";
import React from "react";
import AppSaveView from "../../components/views/AppSaveView";
import HomeHeader from "../../components/headers/HomeHeader";
import EmptyCart from "./EmptyCart";
import CartItem from "../../components/cart/cartItem";
import TotalView from "../../components/cart/totalView";
import { products } from "../../data/products";
import { sharedPaddingHorizontal } from "../../style/sharedStyles";
import AppButton from "../../components/buttons/AppButton";
import {useNavigation} from '@react-navigation/native'
const CartScreen = () => {
    const navigation = useNavigation()
    return (
        <AppSaveView >
   <HomeHeader />
   { /* <EmptyCart/> */}
   <View style={{paddingHorizontal:sharedPaddingHorizontal ,flex :1}}></View>
    <FlatList 
    data = {products}
    keyExtractor={(item) => item.id.toString()}
    renderItem={({item}) =>{
        return <CartItem {...item} />
    }}
   showsVerticalScrollIndicator = {false}
    />
   
<TotalView itemPrice={5000} orderTotal={5025}/>
<AppButton title="continue" onPress={() => navigation.navigate("CheckoutScreen")} />
        </AppSaveView>
    )
}

export default CartScreen

const styles = StyleSheet .create ({
    
})