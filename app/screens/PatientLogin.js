import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import * as Yup from "yup";

import Screen from "../components/Screen";
import colors from "../configs/colors";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";

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
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <View style={styles.buttonContainer}>
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            keyboardType="email-address"
            name="email"
            placeholder="Email"
            textContentType="emailAddress"
          />

          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            placeholder="Password"
            name="password"
            secureTextEntry
            textContentType="password"
          />
          <SubmitButton title="login" color="patientPrimary" />
        </View>
      </AppForm>
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
