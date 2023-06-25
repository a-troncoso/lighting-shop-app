import { useCallback, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  ImageBackground,
  useWindowDimensions,
} from "react-native";
import Stepper from "./components/Stepper";
import Colors from "../../styles/colors";
import Img from "./assets/lampara.jpg";
import { Ionicons } from "@expo/vector-icons";

const getStepWelcome = () => {
  return (
    <View style={styles.headline}>
      <Text style={styles.title}>
        <Text style={styles.titleHighlighted}>Welcome</Text> you in the Light
      </Text>
      <Text style={styles.subtitle}>
        Explore our newest products featuring a playfully portable lamp.
      </Text>
    </View>
  );
};

const getStepBuy = () => {
  return (
    <View style={styles.headline}>
      <Text style={styles.title}>
        <Text style={styles.titleHighlighted}>Buy</Text> immediately
      </Text>
      <Text style={styles.subtitle}>Pasarela de pago</Text>
    </View>
  );
};

const getStepShare = () => {
  return (
    <View style={styles.headline}>
      <Text style={styles.title}>
        <Text style={styles.titleHighlighted}>Share</Text> your buy
      </Text>
      <Text style={styles.subtitle}>Comparte tu compra</Text>
    </View>
  );
};

const Onboarding = () => {
  const steps = [getStepWelcome, getStepBuy, getStepShare];
  const [activeStep, setActiveStep] = useState(0);
  const { width } = useWindowDimensions();

  const onTouchStart = useCallback(({ nativeEvent }) => {
    const { pageX } = nativeEvent;
    const halfWidth = width / 2;
    const pressedOnRightSide = pageX > halfWidth;

    setActiveStep((prev) => {
      if (prev === 0 && !pressedOnRightSide) return prev;
      if (prev === steps.length - 1 && pressedOnRightSide) return prev;
      return prev + (pressedOnRightSide ? 1 : -1);
    });
  }, []);

  const getActiveStep = (stepNumber) => {
    return steps[stepNumber]();
  };

  return (
    <View style={styles.container} onTouchStart={onTouchStart}>
      <ImageBackground source={Img} style={styles.image} />
      <Stepper current={activeStep} />
      <View>
        {getActiveStep(activeStep)}
        <TouchableHighlight
          underlayColor={Colors.primary[40]}
          style={styles.button}
          onPress={() => {}}
        >
          <>
            <Text>Go to Catalog</Text>
            <Ionicons
              name="md-caret-forward"
              size={12}
              width={9}
              color={Colors.black}
            />
          </>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  swipeableContainer: {
    flex: 1,
    // borderWidth: 1,
    // borderColor: "red",
  },
  swipeableChildrenContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  image: {
    position: "absolute",
    top: -60,
    right: -280,
    bottom: 0,
    left: 0,
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 48,
  },
  titleHighlighted: {
    color: Colors.primary[50],
  },
  headline: {
    marginBottom: 32,
    gap: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.white,
  },
  subtitle: {
    color: Colors.gray[60],
    fontSize: 16,
    lineHeight: 24,
  },
  button: {
    paddingHorizontal: 48,
    paddingVertical: 16,
    backgroundColor: Colors.primary[50],
    borderRadius: 24,
    alignSelf: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    gap: 12,
  },
});

export default Onboarding;
