import React from "react";
import { StyleSheet, View, ScrollView, Alert } from "react-native";
import * as Yup from "yup";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import {
  AppForm,
  AppFormFieldVariant,
  AppFormPicker,
  AppFormPickerVariant,
  SubmitButton,
} from "../../components/forms";
import Screen from "../../components/Screen";
import PickerItemVariant from "../../components/PickerItemVariant";
import PickerItem from "../../components/PickerItem";
import colors from "../../configs/colors";

const validationSchema = Yup.object().shape({
  fName: Yup.string().required().min(1).label("First Name"),
  lName: Yup.string().required().min(1).label("Last Name"),
  gender: Yup.object().required().label("Gender"),
  age: Yup.number().required().min(2).label("Age"),
  email: Yup.string().email().min(1).label("Email"),
  password: Yup.string().required().min(1).label("Password"),
  confirmPassword: Yup.string()
    .required()
    .min(1)
    .label("Confirm Password")
    .oneOf([Yup.ref("password")], "Passwords are different."),
});

const genders = [
  {
    label: "Male",
    value: 1,
    backgroundColor: colors.patientPrimary,
    name: "gender-male",
  },
  {
    label: "Female",
    value: 2,
    backgroundColor: colors.patientPrimary,
    name: "gender-female",
  },
  {
    label: "Other",
    value: 3,
    backgroundColor: colors.patientPrimary,
    name: "gender-transgender",
  },
];

function PatientRegister({ navigation }) {
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
        onSubmit={(values) => navigation.navigate("MNumberConfirmation")}
        validationSchema={validationSchema}
      >
        <ScrollView style={styles.inputContainer}>
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
          <AppFormPickerVariant
            items={genders}
            name="gender"
            desc="Gender"
            placeholderIcon="gender-male-female"
            PickerItemComponent={PickerItem}
            IconFamily={MaterialCommunityIcons}
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
            placeholder="Email (Optional)"
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
        </ScrollView>
        <View style={styles.buttonContainer}>
          <SubmitButton title="Sign up" color="themeDark" />
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
    paddingTop: 0,
  },
  buttonContainer: {
    width: "100%",
    padding: 20,
  },
});

export default PatientRegister;
