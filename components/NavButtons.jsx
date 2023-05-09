import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Text,
  Dimensions,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");
const BUTTON_SIZE = 50;
const BUTTON_SPACING = 10;
const ARC_RADIUS = 120;
const BUTTON_PILL_W = 95;
const BUTTON_PILL_H = 35;

const NavButtons = ({ navigation, isHome }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [animation] = useState(new Animated.Value(0));

  const openMenu = () => {
    Animated.spring(animation, {
      toValue: 1,
      friction: 5,
      useNativeDriver: true,
    }).start();
    setMenuOpen(true);
  };

  const closeMenu = () => {
    Animated.spring(animation, {
      toValue: 0,
      friction: 5,
      useNativeDriver: true,
    }).start();
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    if (menuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  const menuStyle = {
    transform: [
      { scale: animation },
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [ARC_RADIUS, -BUTTON_SPACING],
        }),
      },
    ],
  };

  const menuButtonRotation = {
    transform: [
      {
        rotate: animation.interpolate({
          inputRange: [0, 1],
          outputRange: ["0deg", "360deg"],
        }),
      },
    ],
  };

  const renderMenuItems = () => {
    const numberOfButtons = 2;
    const angleIncrement = Math.PI / (numberOfButtons + 1);
    return Array.from({ length: numberOfButtons }, (_, i) => {
      const angle = angleIncrement * (i + 1);
      const x = ARC_RADIUS * Math.cos(angle);
      const y = -ARC_RADIUS * Math.sin(angle);
      const style = {
        transform: [{ translateX: x }, { translateY: y }, { scale: animation }],
      };
      const buttonStyle = [
        styles.buttonTextStyle,
        styles.menuItem,
        style,
        i === 0
          ? { backgroundColor: "#2CEAA3" }
          : i === 1
          ? { backgroundColor: "#2CEAA3" }
          : i === 2
          ? { backgroundColor: "#2CEAA3" }
          : { backgroundColor: "#2CEAA3" },
        {
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        },
      ];
      const buttonTexts = isHome
        ? ["Inscription", "Connexion"]
        : [
            <Ionicons
              name="person"
              size={24}
              color="white"
              onPress={() => {
                navigation.navigate("profil");
              }}
            />,
            <Ionicons
              name="home"
              size={24}
              color="white"
              onPress={() => {
                navigation.navigate("home");
              }}
            />,
          ];
      const text = buttonTexts[i];
      return (
        <Animated.View key={i} style={buttonStyle}>
          <TouchableOpacity
            onPress={() => {
              if (text === "Connexion") {
                navigation.navigate("login");
                closeMenu();
              } else if (text === "Inscription") {
                navigation.navigate("signUp");
                closeMenu();
              }
            }}
          >
            <Text style={styles.buttonText}>{text}</Text>
          </TouchableOpacity>
        </Animated.View>
      );
    });
  };

  return (
    <View style={styles.container}>
      <View
        onClick={() => (menuOpen ? toggleMenu() : null)}
        style={{
          backgroundColor: menuOpen ? "rgba(0, 0, 0, .5)" : "rgba(0, 0, 0, 0)",
          display: menuOpen ? "block" : "none",
          ...styles.blackScreen,
        }}
      ></View>
      <TouchableOpacity
        style={[
          styles.button,
          menuOpen ? styles.menuButtonOpen : styles.menuButton,
        ]}
        onPress={toggleMenu}
      >
        <Animated.View style={menuButtonRotation}>
          {menuOpen ? (
            <AntDesign name="close" size={24} color="white" />
          ) : (
            <Feather name="trending-up" size={24} color="white" />
          )}
        </Animated.View>
      </TouchableOpacity>
      {menuOpen && (
        <TouchableOpacity
          style={[styles.button, menuStyle]}
          onPress={closeMenu}
        >
          {renderMenuItems()}
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ECE5F0",
  },
  blackScreen: {
    width: width > 400 ? "100vw" : "100%",
    height: width > 400 ? "100vh" : 950,
    position: width > 400 ? "fixed" : "absolute",
    top: width > 400 ? 0 : -850,
  },
  button: {
    position: "absolute",
    width: BUTTON_SIZE,
    height: BUTTON_SIZE,
    borderRadius: BUTTON_SIZE / 2,
    justifyContent: "center",
    alignItems: "center",
  },
  menuButton: {
    backgroundColor: "#2CEAA3",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 6,
  },
  menuButtonOpen: {
    backgroundColor: "#D4C2FC",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 6,
  },
  menuItem: {
    backgroundColor: "#2CEAA3",
    bottom: -25,
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
  },
  buttonTextStyle: {
    position: "absolute",
    width: BUTTON_PILL_W,
    height: BUTTON_PILL_H,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default NavButtons;
