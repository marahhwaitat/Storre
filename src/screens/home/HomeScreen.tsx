import { StyleSheet,Text ,View } from "react-native";
import React from "react";
import AppSaveView from "../../components/views/AppSaveView";
import HomeHeader from "../../components/headers/HomeHeader";
import { AppFonts } from "../../style/fonts";
import ProductCard from "../../constants/cards/ProductCard";
import { FlatList } from 'react-native';
import { products } from "../../data/products";
import { s, vs } from "react-native-size-matters";

const HomeScreen = () => {
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
                                onAddToCartPress={() =>{}}
                               
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