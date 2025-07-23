import { StyleSheet,Text ,View } from "react-native";
import React from "react";
import AppSaveView from "../../components/views/AppSaveView";
import HomeHeader from "../../components/headers/HomeHeader";
import { s, vs } from "react-native-size-matters";
import AppText from "../../components/texts/AppText";
import { AppFonts } from "../../style/fonts";
import { AppColors } from "../../style/colors";
import AppButton from "../../components/buttons/AppButton";
import {useNavigation} from '@react-navigation/native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
const EmptyCart = () => {
    const navigation = useNavigation()
    return (
    <View style ={styles.Container}>
        <MaterialCommunityIcons 
        name="shopping-outline"
        size={s(100)} 
        color={AppColors.primary}
        style={styles.icon}/>
      <AppText style={styles.title} > Your Cart IS Empty</AppText>
      <AppText  style={styles.subTitle}> Browse our product and find something you like </AppText>
    <AppButton title="Start Shopping"  style={styles.button} onPress={()=> navigation.navigate("Home")} /> 
    
    </View>
    )
}

export default EmptyCart

const styles = StyleSheet .create ({
    Container  :{
        flex :1,
        justifyContent :"center",
        alignItems :"center",
        paddingHorizontal :s(20),

    },

    title:{

        fontSize : s(20),
        fontFamily :AppFonts.Bold,
        color :AppColors.primary,
        marginBottom : vs(10)
    },
    subTitle : {
      fontSize : s(16),
        fontFamily :AppFonts.Medium,
        color :AppColors.medGray,
        textAlign:"center",
        marginBottom : vs(20)
    }, 
    button :{
        width : "90%"

    },
     icon:{
        marginBottom : vs(20),
        opacity :.9
     }
    
})