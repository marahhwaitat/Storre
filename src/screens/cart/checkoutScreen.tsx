import React from "react";
import { StyleSheet, View, Text, Alert } from "react-native";
import AppSaveView from "../../components/views/AppSaveView";
import { commonStyle, sharedPaddingHorizontal } from "../../style/sharedStyles";
import { s, vs } from "react-native-size-matters";
import { AppColors } from "../../style/colors";
import AppText from "../../components/texts/AppText";
import AppTextInput from "../../components/input/AppTextInput";
import AppButton from "../../components/buttons/AppButton";
import { Is_Android, Is_IOS } from "../../constants/constant";
import AppTextInputController from "../../components/input/AppTextInputController";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup
  .object({
    fullName: yup
      .string()
      .required("Name is required")
      .min(3, "Name must be at least 3 characters"),
    phoneNumber: yup
      .string()
      .required("Phone number is required")
      .matches(/^[0-9]+$/, "Phone number must contain only digits")
      .min(10, "Phone number must be at least 10 digits")
      .max(15, "Phone number must be at most 15 digits"),

    detailedAddress: yup
      .string()
      .required("Address is required")
      .min(
        15,
        "Please provide a detailed address with at least 15 characters "
      ),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

const CheckoutScreen: React.FC = () => {
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });
  const saveOrder = (formData: FormData) => {
    Alert.alert(JSON.stringify(formData));
    console.log(formData);
  };
  return (
    <AppSaveView>
      <View style={{ paddingHorizontal: sharedPaddingHorizontal }}>
        <View style={styles.inputsContainer}>
          <AppTextInputController
            control={control}
            name={"fullName"}
            placeholder="Full Name"
          />
          <AppTextInputController
            control={control}
            name={"phoneNumber"}
            placeholder="Phone Number"
          />
          <AppTextInputController
            control={control}
            name={"detailedAddress"}
            placeholder="Detailed Address"
          />
        </View>
      </View>
      <View style={styles.bottomButtonContainer}>
        <AppButton title="confirm" onPress={handleSubmit(saveOrder)} />
      </View>
    </AppSaveView>
  );
};

export default CheckoutScreen;

const styles = StyleSheet.create({
  inputsContainer: {
    ...commonStyle.shadow,
    padding: s(8),
    borderRadius: s(8),
    backgroundColor: AppColors.white,
    marginTop: Is_IOS ? vs(15) : undefined,
    paddingTop: vs(15),
  },
  bottomButtonContainer: {
    paddingHorizontal: sharedPaddingHorizontal,
    position: "absolute",
    bottom: Is_Android ? vs(15) : 0,
    width: "100%",
    borderTopWidth: 1,
    borderColor: AppColors.lightGray,
    paddingTop: vs(10),
  },
});
