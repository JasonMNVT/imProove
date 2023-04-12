import { ScrollView, StyleSheet, View, Dimensions } from "react-native"
import NavButtons from "./components/NavButtons"
import Logo from "./components/Logo";
import AboutUs from "./components/AboutUs";
import Features from "./components/Features";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const { width } = Dimensions.get('window');

export default function App() {
  return (
    <View style={styles.MainContainer}>
      <ScrollView contentContainerStyle={styles.ScrollContainer}>
        <Logo />
        <AboutUs />
        <Features />
      </ScrollView>
      <View style={styles.ButtonsContainer}>
        <NavButtons />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#ECE5F0',
  },
  ScrollContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 50,
  },
  ButtonsContainer: {
    width: '100%',
    position: width > 400 ? 'fixed' : 'absolute',
    bottom: width > 400 ? 50 : 70,
    alignItems: 'center',
  }
})
