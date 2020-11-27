import React from "react";
import { StyleSheet, View, Alert } from "react-native";
import * as Yup from "yup";

import {
  AppForm,
  AppFormFieldVariant,
  AppFormPicker,
  SubmitButton,
} from "../components/forms";
import Screen from "../components/Screen";

const validationSchema = Yup.object().shape({
  fName: Yup.string().required().min(1).label("First Name"),
  lName: Yup.string().required().min(1).label("Last Name"),
  gender: Yup.object().required().label("Gender"),
  age: Yup.number().required().min(2).label("Age"),
  email: Yup.string().required().email().min(1).label("Email"),
  password: Yup.string().required().min(1).label("Password"),
  confirmPassword: Yup.string()
    .required()
    .min(1)
    .label("Confirm Password")
    .oneOf([Yup.ref("password")], "Passwords are different."),
});

const genders = [
  { label: "Male", value: 1 },
  { label: "Female", value: 2 },
  { label: "Other", value: 3 },
];

function PatientRegister() {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          fName: "",
          lName: "",
          gender: [0],
          age: "",
          email: "",
          password: "",
        }}
        onSubmit={(values) => {
          Alert.alert(
            "Co-Operation User Confirmation",
            "Are you registering under a Co-Operation?",
            [
              {
                text: "No",
                onPress: () => console.log("No pressed"),
              },
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel",
              },
              { text: "Yes", onPress: () => console.log("Yes Pressed") },
            ],
            { cancelable: false }
          );
        }}
        validationSchema={validationSchema}
      >
        <View style={styles.inputContainer}>
          <AppFormFieldVariant
            maxLength={30}
            name="fName"
            placeholder="First Name"
            icon="account-edit"
          />
          <AppFormFieldVariant
            keyboardType="default"
            maxLength={30}
            name="lName"
            placeholder="Last Name"
            icon="account-check"
          />
          <AppFormPicker
            items={genders}
            name="gender"
            placeholder="Gender"
            icon="gender-male-female"
          />
          <AppFormFieldVariant
            maxLength={3}
            name="age"
            placeholder="Age"
            keyboardType="number-pad"
            icon="calendar"
          />
          <AppFormFieldVariant
            maxLength={30}
            name="email"
            placeholder="Email"
            icon="email"
            textContentType="emailAddress"
          />
          <AppFormFieldVariant
            maxLength={30}
            name="password"
            placeholder="Password"
            secureTextEntry
            icon="lock-open"
          />
          <AppFormFieldVariant
            maxLength={30}
            name="confirmPassword"
            placeholder="Confirm Password"
            secureTextEntry
            icon="lock"
          />
        </View>
        <View style={styles.buttonContainer}>
          <SubmitButton title="Sign up" color="patientPrimary" />
        </View>
      </AppForm>
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

export default PatientRegister;
