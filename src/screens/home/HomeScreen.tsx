import { StyleSheet,Text ,View } from "react-native";
import React from "react";
import AppSaveView from "../../components/views/AppSaveView";
import HomeHeader from "../../components/headers/HomeHeader";
import { AppFonts } from "../../style/fonts";
import ProductCard from "../../constants/cards/ProductCard";
import { FlatList } from 'react-native';
import { products } from "../../data/products";
import { s, vs } from "react-native-size-matters";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../store/reducers/cartSlice";

const HomeScreen = () => {
    const dispatch = useDispatch ()
    return (
        <AppSaveView>
         <HomeHeader/>
         <FlatList 
         numColumns={2}
         data={products}
         keyExtractor={ (item) => item.id.toString()}
         renderItem={({item}) => <ProductCard 
                                imageURL={item.imageURL}
                                title={item.title}
                                price={item.price}
                                onAddToCartPress={() =>{dispatch(addItemToCart(item))}}
                               
         />}
         columnWrapperStyle = {{
          justifyContent :"space-between",
          marginBottom :vs(10),

         }}
         contentContainerStyle = {{
            paddingHorizontal : s(10)
         }}
         />
        </AppSaveView>
    )
}

export default HomeScreen

const styles = StyleSheet .create ({
    
})