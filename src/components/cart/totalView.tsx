import { StyleSheet, Text, View } from "react-native";
import React , {FC} from "react";
import AppSaveView from "../../components/views/AppSaveView";
import HomeHeader from "../../components/headers/HomeHeader";
import CartItem from "../../components/cart/cartItem";
import { vs } from "react-native-size-matters";
import AppText from "../texts/AppText";
import { s } from "react-native-size-matters";
import { AppColors } from "../../style/colors";
import { shippingFees, taxes } from "../../constants/constant";
interface ITotalView {
    itemPrice : number,
    orderTotal : number ,
}
const TotalView  : FC<ITotalView>= ({itemPrice, orderTotal}) => {
 
    return (
    <View>
      <View style={styles.row}>
        <AppText style={styles.textTitle}> Item Price :</AppText>
        <AppText style={styles.textPrice}> ${itemPrice}</AppText>
      </View>
      <View style={styles.row}>
        <AppText style={styles.textTitle}> Taxes:</AppText>
        <AppText style={styles.textPrice}> ${taxes}</AppText>
      </View>
      <View style={styles.row}>
        <AppText style={styles.textTitle}> Shipping Fee:</AppText>
        <AppText style={styles.textPrice}>   ${shippingFees}</AppText>
      </View>
      <View style={styles.separator} />
        <View style={styles.row}>
            <AppText style={styles.textTitle}> Order Total:</AppText>
        <AppText style={styles.textPrice}> ${orderTotal}</AppText>

        </View>


      </View>
  
  );
};

export default TotalView;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: vs(10),
  },
  textTitle: {
    fontSize: vs(16),
    flex: 1,
  },
  textPrice: {
    fontSize: s(16),
    color: AppColors.primary,
  },

  separator: {
    height: 1,
    width: "100%",
    backgroundColor: AppColors.blueGray,
    marginVertical: vs(5),
  },
});
