import React from "react";

import { StyleSheet, View, Text, TouchableOpacity , ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import * as Yup from "yup";

import Screen from "../../components/Screen";
import colors from "../../configs/colors";
import { AppForm, AppFormField, SubmitButton } from "../../components/forms";
import AppButton from "../../components/AppButton";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(8).label("Password"),
});

function PatientLogin({navigation}) {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => navigation.navigate("AppNavigator")}
        validationSchema={validationSchema}
      >
        <MaterialIcons
          name="person"
          size={50}
          color={colors.patientPrimary}
          style={styles.iconContainer}
        />
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
            <TouchableOpacity onPress={() =>navigation.navigate("PatientRegister")} >
            <Text style={styles.registerButton}>Create an account</Text>
          </TouchableOpacity>
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
    margin: "50%",
    alignItems: "center",
  },
  iconContainer: {
    position: "absolute",
    marginTop: "35%",
  },
  registerButton: {
    color: colors.patientPrimary,
    fontSize: 16,
    marginTop: "5%",
  },
});

export default PatientLogin;
