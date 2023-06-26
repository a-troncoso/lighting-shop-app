import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons, FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import Colors from "../../../styles/colors";

const icons = {
  Home: {
    lib: FontAwesome,
    name: "home",
  },
  Catalog: {
    lib: MaterialIcons,
    name: "dashboard",
  },
  Shop: {
    lib: FontAwesome5,
    name: "shopping-basket",
  },
  Ranking: {
    lib: AntDesign,
    name: "star",
  },
};

const TabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const Icon = icons[label].lib;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.button}
          >
            <Icon
              name={icons[label].name}
              size={24}
              color={isFocused ? Colors.primary[40] : Colors.gray[70]}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: Colors.secondary[40],
    borderRadius: 24,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  button: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 20,
  },
});

export default TabBar;
