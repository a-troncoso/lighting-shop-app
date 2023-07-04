import { StyleSheet, View, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome, AntDesign, Feather } from "@expo/vector-icons";
import { Onboarding, Catalog, ProductDetails } from "../screens";
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
    <Stack.Navigator screenOptions={baseNavigatorOptions}>
      <Stack.Screen
        name="MainPrivateNavigation"
        component={MainPrivateNavigation}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={{
          headerShown: true,
          header: (props) => <ProductDetailNavigationBar {...props} />,
        }}
      />
    </Stack.Navigator>
  );
};

const MainPrivateNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        header: (props) => <MainPrivateNavigationBar {...props} />,
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

const MainPrivateNavigationBar = () => {
  const getMenuButton = () => (
    <TouchableOpacity>
      <Feather name="menu" size={32} color={Colors.primary[40]} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.navigationBar}>
      {getMenuButton()}
      <View
        style={{
          width: 36,
          height: 36,
          borderRadius: 18,
          backgroundColor: Colors.primary[40],
        }}
      />
    </View>
  );
};

const ProductDetailNavigationBar = () => {
  const getLeftButton = () => (
    <TouchableOpacity>
      <View
        style={{
          width: 36,
          height: 36,
          borderRadius: 18,
          borderWidth: 1,
          borderColor: Colors.gray[80],
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FontAwesome name="caret-left" size={16} color={Colors.gray[10]} />
      </View>
    </TouchableOpacity>
  );

  const getRightButton = () => (
    <View
      style={{
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: Colors.primary[40],
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AntDesign name="star" size={16} color={Colors.secondary[50]} />
    </View>
  );

  return (
    <View style={styles.navigationBar}>
      {getLeftButton()}
      {getRightButton()}
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
