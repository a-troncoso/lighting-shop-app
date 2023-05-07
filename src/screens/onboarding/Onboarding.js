import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  Animated,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";
import Stepper from "./components/Stepper";
import Colors from "../../styles/colors";
import Img from "./assets/lampara-onboarding.jpg";

const Onboarding = () => {
  const handleSwipeableOpen = (direction) => {
    console.log("I was swiped", direction);
  };

  const LeftSwipeActions = (progress, dragX) => {
    console.log("progress, dragX", progress, dragX);
    const trans = dragX.interpolate({
      inputRange: [0, 50, 100, 101],
      outputRange: [-20, 0, 0, 1],
    });

    return (
      <View style={{ alignSelf: "flex-end" }}>
        <View style={styles.headline}>
          <Text style={styles.title}>
            <Text style={styles.titleHighlighted}>The best</Text> platform
          </Text>
          {/* <Text style={styles.subtitle}>
            Buy and sell authentic sneakers from thousands of brands.
          </Text> */}
          <Animated.Text
            style={[
              styles.actionText,
              {
                transform: [{ translateX: trans }],
              },
            ]}
          >
            Buy and sell authentic sneakers from thousands of brands.
          </Animated.Text>
        </View>
        <TouchableOpacity
          style={{
            paddingHorizontal: 56,
            paddingVertical: 16,
            backgroundColor: Colors.primary[50],
            borderRadius: 24,
            alignSelf: "flex-start",
          }}
        >
          <Text>Go to Catalog ></Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <ImageBackground source={Img} resizeMode="cover" style={styles.image} />
        <Stepper />
        <Swipeable
          containerStyle={styles.swipeableContainer}
          childrenContainerStyle={styles.swipeableChildrenContainer}
          onSwipeableOpen={handleSwipeableOpen}
          renderRightActions={(di, dr) => {
            console.log("di, dr", di, dr);
            return LeftSwipeActions(di, dr);
          }}
        >
          <View>
            <View style={styles.headline}>
              <Text style={styles.title}>
                <Text style={styles.titleHighlighted}>Welcome</Text> you in the
                Light
              </Text>
              <Text style={styles.subtitle}>
                Explore our newest products featuring a playfully portable lamp.
              </Text>
            </View>
            <TouchableOpacity
              style={{
                paddingHorizontal: 56,
                paddingVertical: 16,
                backgroundColor: Colors.primary[50],
                borderRadius: 24,
                alignSelf: "flex-start",
              }}
            >
              <Text>Go to Catalog ></Text>
            </TouchableOpacity>
          </View>
        </Swipeable>
      </View>
    </GestureHandlerRootView>
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
    top: -200,
    right: -260,
    bottom: 0,
    left: 0,
  },
  container: {
    flex: 1,
    // justifyContent: "space-between",
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
});

export default Onboarding;
