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

const DATA = [
  {
    id: "1",
    title: "Under the Bell Pendant Lamp",
    price: "1,200",
    images: [
      { id: 1, image: UnderBellPendantBlack },
      { id: 2, image: UnderBellPendantBlack },
      { id: 3, image: UnderBellPendantBlack },
    ],
  },
  {
    id: "2",
    title: "Ambit Pendant Lamp",
    price: "1,200",
    images: [
      { id: 1, image: UnderBellPendantBlack },
      { id: 2, image: UnderBellPendantBlack },
      { id: 3, image: UnderBellPendantBlack },
    ],
  },
  {
    id: "3",
    title: "Ambit Pendant Lamp",
    price: "1,200",
    images: [
      { id: 1, image: UnderBellPendantBlack },
      { id: 2, image: UnderBellPendantBlack },
      { id: 3, image: UnderBellPendantBlack },
    ],
  },
];

const Catalog = () => {
  return (
    <Screen containerStyles={styles.container}>
      <View style={styles.catalogHeader}>
        <Text style={styles.title}>Your Light</Text>
        <SearchBar />
      </View>

      <SubCatalogNav />

      <FlatList
        data={DATA}
        renderItem={({ item }) => <Product item={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.productList}
        ItemSeparatorComponent={() => (
          <View style={styles.productListSeparator} />
        )}
      />
    </Screen>
  );
};

const SearchBar = () => {
  return (
    <View style={styles.searchBar}>
      <TextInput
        placeholder="Search..."
        placeholderTextColor={Colors.gray[70]}
        style={styles.input}
        autoCapitalize="none"
      />
      <TouchableOpacity style={styles.buttonFilter}>
        <SimpleLineIcons name="equalizer" size={12} color={Colors.white} />
      </TouchableOpacity>
    </View>
  );
};

const SubCatalogNav = () => {
  const [selected, setSelected] = useState("2");
  const DATA = [
    {
      id: "1",
      title: "Table Lamps",
    },
    {
      id: "2",
      title: "Pendant Lamps",
    },
    {
      id: "3",
      title: "Floor Lamps",
    },
  ];

  const Item = ({ title, onPress, isActive }) => (
    <TouchableOpacity onPress={onPress}>
      <Text
        style={StyleSheet.flatten([
          styles.subCatalogItem,
          isActive
            ? styles.activeSubCatalogItem
            : styles.inactiveSubCatalogItem,
        ])}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );

  const handlePressItem = (item) => {
    setSelected(item.id);
  };

  return (
    <View>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Item
            title={item.title}
            onPress={() => handlePressItem(item)}
            isActive={selected === item.id}
          />
        )}
        keyExtractor={(item) => item.id}
        horizontal
        ItemSeparatorComponent={() => (
          <Entypo
            name="dot-single"
            size={16}
            color={Colors.gray[70]}
            style={styles.subCatalogNavSeparator}
          />
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingBottom: 96,
    gap: 24,
  },
  catalogHeader: {
    gap: 8,
  },
  productList: {
    paddingBottom: 16,
  },
  productListSeparator: {
    marginVertical: 32,
    height: 1,
    backgroundColor: Colors.gray[90],
  },
  subCatalogNavSeparator: {
    alignSelf: "center",
    marginHorizontal: 12,
  },
  title: {
    color: Colors.gray[10],
    fontSize: 16,
    fontWeight: 500,
  },
  input: {
    borderRadius: 24,
    backgroundColor: Colors.secondary[40],
    paddingHorizontal: 16,
    paddingVertical: 8,
    flex: 1,
    color: Colors.gray[10],
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  buttonFilter: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 0.8,
    borderColor: Colors.gray[80],
    alignItems: "center",
    justifyContent: "center",
    transform: [{ rotate: "90deg" }],
  },
  subCatalogItem: {
    color: Colors.gray[70],
    fontSize: 12,
    fontWeight: 500,
  },
  activeSubCatalogItem: {
    color: Colors.primary[40],
  },
  inactiveSubCatalogItem: {
    color: Colors.gray[70],
  },
});

export default Catalog;
