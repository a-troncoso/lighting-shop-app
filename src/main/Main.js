import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5, Entypo, Feather } from "@expo/vector-icons";
import { Onboarding, Catalog } from "../screens";
import TabBar from "./components/tabBar";

import Colors from "../styles/colors";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const baseNavigatorOptions = {
  headerShown: false,
};

const Main = () => {
  return (
    <View style={styles.container}>
      <StatusBar hidden />

      <Stack.Navigator screenOptions={baseNavigatorOptions}>
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Private" component={Private} />
      </Stack.Navigator>
    </View>
  );
};

const Private = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        header: (props) => <NavigationBar {...props} />,
      }}
      tabBar={(props) => <TabBar {...props} />}
    >
      <Stack.Screen name="Home" component={Catalog} />
      <Stack.Screen name="Catalog" component={Catalog} />
      <Stack.Screen name="Shop" component={Catalog} />
      <Stack.Screen name="Ranking" component={Catalog} />
    </Tab.Navigator>
  );
};

const MenuButton = () => {
  return (
    <TouchableOpacity>
      <Feather name="menu" size={24} color={Colors.primary[40]} />
    </TouchableOpacity>
  );
};

const NavigationBar = () => {
  return (
    <View style={styles.navigationBar}>
      <MenuButton />
      <View
        style={{
          width: 32,
          height: 32,
          borderRadius: 16,
          backgroundColor: Colors.primary[40],
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondary[50],
  },
  navigationBar: {
    backgroundColor: Colors.secondary[50],
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingVertical: 16,
    alignItems: "center",
  },
});

export default Main;
