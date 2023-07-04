import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Screen from "../../components/screen";
import { SimpleLineIcons, Entypo } from "@expo/vector-icons";
import Product from "./components/Product";
import UnderBellPendantBlack from "./assets/under-bell-pendant-black.png";

import Colors from "../../styles/colors";
import { useNavigation } from "@react-navigation/native";

const ProductDetails = () => {
  return <Screen containerStyles={styles.container}></Screen>;
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingBottom: 96,
    gap: 24,
  },
});

export default ProductDetails;
