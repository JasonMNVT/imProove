import React from "react";
import { StyleSheet, Text, View } from "react-native";

const AboutUs = () => {
  return (
    <View style={styles.MainContainer}>
      <Text style={styles.TitleStyle}>À propos de nous</Text>
      <Text style={styles.TextStyle}>
        Guillaume, Jason et Stéphane, trois développeurs passionnés en
        reconversion chez AP Formation, sont prêts à relever leur premier défi
        en entreprise.
      </Text>
      <Text style={styles.TextStyle}>
        Leur mission : développer une application mobile en utilisant React
        Native, Express.JS et MongoDB.
      </Text>
      <Text style={styles.TextStyle}>
        Ces experts complémentaires travailleront sans relâche pour concevoir,
        développer et tester leur application en deux mois et demi.
      </Text>
      <Text style={styles.TextStyle}>
        Leur motivation, leur passion et leur détermination sont des atouts
        précieux pour l'entreprise qui leur a fait confiance.
      </Text>
      <Text style={styles.TextStyle}>
        Avec leur expertise technique et leur créativité, ils sont bien partis
        pour réaliser un projet de qualité qui répondra aux besoins et aux
        attentes de leur client.
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
  },
  TextStyle: {
    color: "#5D5D81",
    marginBottom: 10,
    textAlign: "center",
  },
});

export default AboutUs;
