import React from "react";
import { StyleSheet } from "react-native";
import AppTextInput from "../components/AppTextInput";
import { Formik } from "formik";

import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
function CooperationLogin(props) {
  return (
    <Screen style={styles.container}>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleSubmit }) => (
          <>
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              onChangeText={handleChange("email")}
              keyboardType="email-address"
              placeholder="Email"
              textContentType="emailAddress"
            />
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              onChangeText={handleChange("password")}
              placeholder="Password"
              secureTextEntry
              textContentType="password"
            />
            <AppButton
              title="Login"
              color="cooperationPrimary"
              onPress={handleSubmit}
            />
          </>
        )}
      </Formik>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default CooperationLogin;
