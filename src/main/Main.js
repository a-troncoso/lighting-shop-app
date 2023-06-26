import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Onboarding, Catalog } from "../screens";
import TabBar from "./components/tabBar";

import Colors from "../styles/colors";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const mainStackOptions = {
  headerShown: false,
};

const Main = () => {
  return (
    <View style={styles.container}>
      <StatusBar hidden />

      <Stack.Navigator screenOptions={mainStackOptions}>
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Private" component={Private} />
      </Stack.Navigator>
    </View>
  );
};

const Private = () => {
  return (
    <Tab.Navigator
      screenOptions={mainStackOptions}
      tabBar={(props) => <TabBar {...props} />}
    >
      <Stack.Screen name="Home" component={Catalog} />
      <Stack.Screen name="Catalog" component={Catalog} />
      <Stack.Screen name="Shop" component={Catalog} />
      <Stack.Screen name="Ranking" component={Catalog} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondary[50],
  },
});

export default Main;
