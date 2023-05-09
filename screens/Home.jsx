import React from "react";
import { ScrollView, StyleSheet, View, Dimensions } from "react-native";
import Logo from "../components/Logo";
import AboutUs from "../components/AboutUs";
import Features from "../components/Features";
import NavButtons from "../components/NavButtons";

const { width } = Dimensions.get("window");

const Home = ({ navigation }) => {
  return (
    <View style={styles.MainContainer}>
      <ScrollView contentContainerStyle={styles.ScrollContainer}>
        <Logo />
        <AboutUs />
        <Features />
      </ScrollView>
      <View style={styles.ButtonsContainer}>
        <NavButtons navigation={navigation} isHome={true} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: "#ECE5F0",
  },
  ScrollContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: 50,
    paddingBottom: 120,
  },
  ButtonsContainer: {
    width: "100%",
    position: width > 400 ? "fixed" : "absolute",
    bottom: width > 400 ? 50 : 70,
    alignItems: "center",
  },
});

export default Home;
