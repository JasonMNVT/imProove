import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const SignUp = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>SignUp Screen</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Text>Retour</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUp;
