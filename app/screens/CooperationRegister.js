import React from "react";
import { StyleSheet, View } from "react-native";
import { Formik } from "formik";

import AppTextInputVariant from "../components/AppTextInputVariant";
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";

function CooperationRegister(props) {
  return (
    <Screen style={styles.container}>
      <Formik
        initialValues={{
          fName: "",
          lName: "",
          gender: "",
          age: "",
          email: "",
          password: "",
        }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleSubmit }) => (
          <>
            <View style={styles.inputContainer}>
              <AppTextInputVariant
                autoCapitalize="words"
                autoCorrect={true}
                icon="account-edit"
                onChangeText={handleChange("fName")}
                keyboardType="default"
                placeholder="First Name"
                textContentType="name"
              />
              <AppTextInputVariant
                autoCapitalize="words"
                autoCorrect={true}
                icon="account-check"
                onChangeText={handleChange("Lname")}
                keyboardType="default"
                placeholder="Last Name"
                textContentType="name"
              />
              <AppTextInputVariant
                autoCapitalize="none"
                autoCorrect={false}
                icon="gender-male-female"
                onChangeText={handleChange("gender")}
                keyboardType="default"
                placeholder="Gender"
              />
              <AppTextInputVariant
                autoCapitalize="none"
                autoCorrect={false}
                icon="calendar"
                onChangeText={handleChange("age")}
                keyboardType="number-pad"
                placeholder="Age"
              />
              <AppTextInputVariant
                autoCapitalize="none"
                autoCorrect={false}
                icon="email"
                onChangeText={handleChange("email")}
                keyboardType="email-address"
                placeholder="Email"
                textContentType="emailAddress"
              />
              <AppTextInputVariant
                autoCapitalize="none"
                autoCorrect={false}
                icon="lock-open"
                onChangeText={handleChange("password")}
                placeholder="Password"
                secureTextEntry
                textContentType="password"
              />
              <AppTextInputVariant
                autoCapitalize="none"
                autoCorrect={false}
                icon="lock"
                onChangeText={handleChange("password")}
                placeholder="Confirm Password"
                secureTextEntry
                textContentType="password"
              />
            </View>
            <View style={styles.buttonContainer}>
              <AppButton
                title="Sign Up"
                color="cooperationPrimary"
                onPress={handleSubmit}
              />
            </View>
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
  inputContainer: {
    width: "100%",
    padding: 20,
  },
  buttonContainer: {
    width: "100%",
    padding: 20,
  },
});

export default CooperationRegister;
