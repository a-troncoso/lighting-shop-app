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

      <SubCatalog />

      <FlatList
        data={DATA}
        renderItem={({ item }) => <Product item={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
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

const SubCatalog = () => {
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

  const Item = ({ title }) => (
    <TouchableOpacity>
      <Text style={styles.subCatalogItem}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <View>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={(item) => item.id}
        horizontal
        ItemSeparatorComponent={() => (
          <Entypo
            name="dot-single"
            size={16}
            color={Colors.gray[70]}
            style={{ alignSelf: "center", marginHorizontal: 12 }}
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
  productListSeparator: {
    marginVertical: 32,
    height: 1,
    backgroundColor: Colors.gray[90],
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
  },
});

export default Catalog;
