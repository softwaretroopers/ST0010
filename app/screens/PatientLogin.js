import React, { useState } from "react";
import { StyleSheet } from "react-native";
import AppTextInput from "../components/AppTextInput";

import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
function PatientLogin(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <Screen style={styles.container}>
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="email"
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
        placeholder="Email"
        textContentType="emailAddress"
      />
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="lock"
        onChangeText={(text) => setPassword(text)}
        placeholder="Password"
        secureTextEntry
        textContentType="password"
      />
      <AppButton
        title="Login"
        color="patientPrimary"
        onPress={() => console.log(email, password)}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default PatientLogin;
