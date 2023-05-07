import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
} from "react-native";
import Colors from "../../styles/colors";
import Stepper from "./components/Stepper";
import Img from "./assets/lampara-onboarding.jpg";

const image = { uri: "./assets/lampara-onboarding.jpg" };

const Onboarding = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={Img}
        resizeMode="cover"
        style={styles.image}
      ></ImageBackground>
      <View style={{ flex: 1 }}>
        <Stepper />
      </View>
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
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    position: "absolute",
    top: -200,
    right: -260,
    bottom: 0,
    left: 0,
  },
  container: {
    flex: 1,
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
