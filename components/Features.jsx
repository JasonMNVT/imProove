import React from "react";
import { Image, StyleSheet, Text, View, Dimensions } from "react-native";
import * as Font from "expo-font";

const { width } = Dimensions.get("window");

const Features = () => {
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
      {fontLoaded && <Text style={styles.TitleStyle}>FONCTIONNALITÉS</Text>}
      <Text style={styles.FirstText}>
        Notre application est le coach sportif personnel qu'il vous faut !
      </Text>
      <Text style={styles.SecondText}>
        Choisissez votre activité favorite parmi une sélection de sports
        populaires, enregistrez vos performances et suivez votre progression au
        fil du temps grâce à une courbe de performance facile à lire !
      </Text>
      <Image
        source={require("../assets/images/graphique.jpg")}
        style={styles.image1}
      />
      <Text style={styles.SecondText}>
        Si vous avez des objectifs spécifiques en termes de forme physique,
        l'application est également personnalisable selon vos besoins. Des
        programmes d'entraînement spécifiques et des objectifs de temps ou de
        distance à atteindre sont à portée de main.
      </Text>
      <Image
        source={require("../assets/images/programme.jpg")}
        style={styles.image2}
      />
      <Text style={styles.SecondText}>
        Inscrivez-vous dès maintenant et atteignez vos objectifs de forme
        physique en toute simplicité !
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    width: "80%",
    height: "auto",
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#2CEAA3",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 6,
    alignItems: "center",
    padding: 15,
  },
  TitleStyle: {
    color: "#5D5D81",
    fontSize: 20,
    marginBottom: 20,
    fontFamily: "Robo_Girls_Italic",
  },
  FirstText: {
    color: "#5D5D81",
    marginBottom: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  SecondText: {
    color: "#5D5D81",
    marginBottom: 20,
    textAlign: "center",
  },
  image1: {
    width: width > 400 ? 600 : 250,
    height: width > 400 ? 300 : 150,
    marginBottom: 20,
  },
  image2: {
    width: width > 400 ? 600 : 290,
    height: width > 400 ? 350 : 180,
    marginBottom: 20,
  },
});

export default Features;
