import React from "react";
import { StyleSheet, View, Text } from "react-native";
import AppTextInput from "../components/AppTextInput";
import { Formik } from "formik";
import { MaterialIcons } from "@expo/vector-icons";
import * as Yup from "yup";

import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import colors from "../configs/colors";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(8).label("Password"),
});

function PatientLogin(props) {
  return (
    <Screen style={styles.container}>
      <MaterialIcons
        name="person"
        size={50}
        color={colors.patientPrimary}
        style={styles.iconContainer}
      />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors }) => (
          <>
            <View style={styles.buttonContainer}>
              <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                icon="email"
                onChangeText={handleChange("email")}
                keyboardType="email-address"
                placeholder="Email"
                textContentType="emailAddress"
              />

              <Text style={{ color: "red" }}>{errors.email}</Text>

              <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                icon="lock"
                onChangeText={handleChange("password")}
                placeholder="Password"
                secureTextEntry
                textContentType="password"
              />

              <Text style={{ color: "red" }}>{errors.password}</Text>

              <AppButton
                title="Login"
                color="patientPrimary"
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
  buttonContainer: {
    width: "100%",
    padding: 20,
    marginTop: "60%",
  },
  iconContainer: {
    position: "absolute",
    marginTop: "35%",
  },
});

export default PatientLogin;
