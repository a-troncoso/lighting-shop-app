import { StyleSheet, View } from "react-native";

import Colors from "../../styles/colors";

const Screen = ({ children, containerStyles = {} }) => {
  return (
    <View style={StyleSheet.flatten([styles.container, containerStyles])}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondary[50],
  },
});

export default Screen;
