import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { AppColors } from "../../style/colors";
import { s, vs } from "react-native-size-matters";
import { IMAGES } from "../../constants/imagespaths";

const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <Image source={IMAGES.appLogo} style={styles.logo} />
      <Text> HomeHeader</Text>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.primary,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: vs(10),
  },

  logo: {
    height: vs(40),
    width: s(40),
    tintColor: AppColors.white,
  },
});
