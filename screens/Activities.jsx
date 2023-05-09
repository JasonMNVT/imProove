import React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Dimensions,
  Text,
  TextInput,
} from "react-native";
import Logo from "../components/Logo";
import NavButtons from "../components/NavButtons";
import * as Font from "expo-font";

const { width } = Dimensions.get("window");

const Activities = ({ navigation }) => {
  const [fontLoaded, setFontLoaded] = React.useState(false);

  React.useEffect(() => {
    const loadFont = async () => {
      await Font.loadAsync({
        Robo_Girls_Italic: require("../assets/fonts/Robo_Girls_Italic.otf"),
      });
      setFontLoaded(true);
    };
    loadFont();
  }, []);

  return (
    <View style={styles.MainContainer}>
      <ScrollView contentContainerStyle={styles.ScrollContainer}>
        <Logo />
        {fontLoaded && <Text style={styles.TitleStyle}>ACTIVITÉS</Text>}
        <View style={styles.SearchContainer}>
          <TextInput
            style={styles.SearchInput}
            placeholder="Rechercher une activité..."
            placeholderTextColor="#5D5D81"
          />
        </View>
      </ScrollView>
      <View style={styles.ButtonsContainer}>
        <NavButtons navigation={navigation} isHome={false} />
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
    gap: 40,
    paddingBottom: 120,
  },
  ButtonsContainer: {
    width: "100%",
    position: width > 400 ? "fixed" : "absolute",
    bottom: width > 400 ? 50 : 70,
    alignItems: "center",
  },
  TitleStyle: {
    color: "#5D5D81",
    fontSize: 16,
    fontFamily: "Robo_Girls_Italic",
  },
  SearchContainer: {
    width: "80%",
    backgroundColor: "#FFF",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#2CEAA3",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 20,
  },
  SearchInput: {
    color: "#5D5D81",
    fontSize: 14,
    fontFamily: "Roboto",
  },
});

export default Activities;
