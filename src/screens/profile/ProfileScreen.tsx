import { StyleSheet,Text ,View } from "react-native";
import React from "react";
import AppSaveView from "../../components/views/AppSaveView";
import HomeHeader from "../../components/headers/HomeHeader";
import ProfileSectionButton from "../../components/buttons/profileSectionButton";
import { sharedPaddingHorizontal } from "../../style/sharedStyles";
import AppText from "../../components/texts/AppText";
import { s, vs } from "react-native-size-matters";
import MyOrdersScreen from "../profile/MyOrdersScreen"
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {
  const navigation = useNavigation();
  
  return (
    <AppSaveView>
      <HomeHeader />
      <AppText variant="bold" style={{ fontSize: s(18), marginTop: vs(10) }}>
        Hello, Ahmed
      </AppText>
      <View style={{ paddingHorizontal: sharedPaddingHorizontal }}>
        <ProfileSectionButton
          title={"My Orders"}
          onPress={() => navigation.navigate("MyOrdersScreen")}
        />
        <ProfileSectionButton title={"Language"} />
        <ProfileSectionButton title={"Logout"}/>
      </View>
    </AppSaveView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});