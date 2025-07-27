import React, { FC } from "react";
import { StyleSheet, TextStyle, TextInput, View } from "react-native";
import { s, vs } from "react-native-size-matters";
import { AppColors } from "../../style/colors";
import {
  Control,
  Controller,
  FieldValue,
  FieldValues,
  Path,
} from "react-hook-form";
import AppTextInput from "./AppTextInput";
import AppText from "../texts/AppText";
interface AppTextInputControllerProps<T extends FieldValues> {
  keyboardType?: "default" | "email-address" | "numeric";
  secureTextEntry?: boolean;
  placeholder: string;
  control: Control<T>;
  name: Path<T>;
  rules?: object;
}
const AppTextInputController = <T extends FieldValues>({
  keyboardType,
  secureTextEntry,
  placeholder,
  control,
  name,
  rules,
}: AppTextInputControllerProps<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <>
          <AppTextInput
            value={value}
            onChangeText={onChange}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
            style={error && styles.errorInput}
          />
          {error && (
            <AppText style={styles.textError}>{error.message} </AppText>
          )}
        </>
      )}
    />
  );
};

export default AppTextInputController;

const styles = StyleSheet.create({
  input: {
    height: vs(40),
    borderRadius: s(25),
    borderWidth: 1,
    borderColor: AppColors.borderColor,
    paddingHorizontal: s(15),
    fontSize: s(16),
    backgroundColor: AppColors.white,
    width: "100%",
    marginBottom: vs(10),
  },
  errorInput: {
    borderColor: AppColors.redColor,
  },
  textError: {
    color: AppColors.redColor,
    fontSize: s(12),
    textAlign: "center",
    marginBottom: vs(10),
    marginTop: -vs(5),
  },
});
