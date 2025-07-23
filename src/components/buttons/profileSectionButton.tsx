import { StyleSheet,Text ,TouchableOpacity,View } from "react-native";
import React ,{FC} from "react";
import AppSaveView from "../../components/views/AppSaveView";
import HomeHeader from "../../components/headers/HomeHeader";
import AppText from "../texts/AppText";
import { AppColors } from "../../style/colors";
import { s, vs } from "react-native-size-matters";
import { AppFonts } from "../../style/fonts";
import {MaterialIcons} from "@expo/vector-icons"


interface IProfileSectionButton {
    onPress : () => void;
    title :string
}


const ProfileSectionButton: FC <IProfileSectionButton>= ({onPress, title}) => {
    return (
     <TouchableOpacity  onPress={onPress} style={styles.container}>
        <View style={styles.textContainer}>
     <AppText style={styles.textTitle}>{title} </AppText>
     </View>
    <View>
      <MaterialIcons name="arrow-forward-ios" size={s(14)} color={AppColors.medGray}/>
    </View>
     </TouchableOpacity>



    )
}

export default ProfileSectionButton

const styles = StyleSheet .create ({
    container :{
         width :"100%",
         borderBottomColor :AppColors.lightGray,
         paddingBottom : vs(14),
         flexDirection: "row",
         borderBottomWidth :1

    },
    textTitle :{
        fontSize :s(16) ,
        fontFamily:AppFonts.Medium,
        color :AppColors.primary

    },
    textContainer:{
        flex:5,
        alignItems:"flex-start",
        justifyContent:"flex-start",
        marginHorizontal : s(8)
    }
    
})