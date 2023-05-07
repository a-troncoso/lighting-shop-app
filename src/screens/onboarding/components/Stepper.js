import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Colors from "../../../styles/colors";
import { Touchable } from "react-native";

const Step = ({ active }) => {
  return <View style={[styles.step, active && styles.stepActive]} />;
};

const Stepper = () => {
  return (
    <View style={styles.container}>
      <Step active />
      <Step />
      <Step />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 8,
  },
  stepContainer: {},
  step: {
    width: 32,
    height: 4,
    borderRadius: 4,
    backgroundColor: Colors.gray[80],
  },
  stepActive: {
    backgroundColor: Colors.primary[50],
  },
});

export default Stepper;
