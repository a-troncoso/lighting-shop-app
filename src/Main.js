import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Onboarding from "./screens/onboarding";

import Colors from "./styles/colors";

const Main = () => {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Onboarding />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondary[50],
  },
});

export default Main;
