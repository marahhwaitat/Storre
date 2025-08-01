import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import FlashMessage, { showMessage } from "react-native-flash-message";
import { NavigationContainer } from "@react-navigation/native";
import MainAppStack from "./src/navigation/MainAppStack";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import { store } from "./src/store/store";
export default function App() {
  const [fontLoaded] = useFonts({
    "Nunito-Bold": require("./src/assets/fonts/Nunito-Bold.ttf"),
    "Nunito-MediumItalic": require("./src/assets/fonts/Nunito-MediumItalic.ttf"),
    "Nunito-Medium": require("./src/assets/fonts/Nunito-Medium.ttf"),
  });
  if (!fontLoaded) {
    return <ActivityIndicator size={"large"} />;
  }
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <FlashMessage position={"top"} />

          <MainAppStack />
        </NavigationContainer>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({});
