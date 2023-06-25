import { StyleSheet, View, Animated } from "react-native";
import Colors from "../../../styles/colors";

const Step = ({ active }) => {
  return <Animated.View style={[styles.step, active && styles.stepActive]} />;
};

const Stepper = ({ current }) => {
  return (
    <View style={styles.container}>
      <Step active={current === 0} />
      <Step active={current === 1} />
      <Step active={current === 2} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 8,
  },
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
