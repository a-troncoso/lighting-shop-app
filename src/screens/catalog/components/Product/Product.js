import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import {
  Feather,
  MaterialCommunityIcons,
  Foundation,
} from "@expo/vector-icons";

import Colors from "../../../../styles/colors";

const Product = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.featuresImagesContainer}>
        <Features items={["bluetooth", "second", "brightness"]} />
        <View>
          <FlatList
            data={item.images}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Image source={item.image} style={styles.productImage} />
            )}
            contentContainerStyle={styles.imagesList}
            horizontal
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={{ width: 48 }} />}
          />
        </View>
      </View>
      <View>
        <Text style={styles.productName}>{item.title}</Text>
        <Text style={styles.productPrice}>$ {item.price}</Text>
      </View>
    </View>
  );
};

const Features = ({ items }) => {
  const iconByFeature = {
    bluetooth: {
      lib: Feather,
      name: "bluetooth",
    },
    second: { lib: MaterialCommunityIcons, name: "camera-iris" },
    brightness: { lib: Foundation, name: "lightbulb" },
  };

  const getFeature = ({ item }) => {
    const Icon = iconByFeature[item].lib;

    return (
      <View style={styles.featureItem}>
        <Icon
          name={iconByFeature[item].name}
          size={12}
          color={Colors.gray[10]}
        />
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={items}
        keyExtractor={(item) => item}
        renderItem={getFeature}
        ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { gap: 32 },
  featuresImagesContainer: {
    flexDirection: "row",
    gap: 16,
  },
  imagesList: { paddingLeft: 16, alignItems: "center" },
  productImage: {
    width: 120,
    height: 96,
  },
  productName: {
    color: Colors.primary[50],
    fontWeight: 500,
  },
  productPrice: {
    color: Colors.gray[10],
    fontWeight: 500,
  },
  featureItem: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 0.8,
    borderColor: Colors.gray[80],
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Product;
