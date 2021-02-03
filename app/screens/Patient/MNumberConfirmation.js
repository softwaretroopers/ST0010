import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import * as Yup from "yup";

import {
  AppForm,
  AppFormFieldVariant,
  SubmitButton,
} from "../../components/forms";
import Screen from "../../components/Screen";
import ScreenVariant from "../../components/ScreenVariant";

const validationSchema = Yup.object().shape({
  mNumber: Yup.string().required().min(10).max(10).label("Mobile Number"),
});

function MNumberConfirmation({ navigation, icon, ...otherProps }) {
  return (
    <ScreenVariant>
      <AppForm
        initialValues={{
          mNumber: "",
        }}
        onSubmit={(values) => navigation.navigate("OTPConfirmation")}
        validationSchema={validationSchema}
      >
        <View style={styles.container}>
          <Text style={styles.text}>What's Your Mobile Number?</Text>
          <AppFormFieldVariant
            name="mNumber"
            placeholder="Enter your Mobile Number"
            icon="phone"
            keyboardType="number-pad"
            maxLength={10}
          />
        </View>
        <View style={styles.buttonContainer}>
          <SubmitButton title="Send otp" color="patientPrimary" />
        </View>
      </AppForm>
    </ScreenVariant>
  );
}

const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: "10%",
    alignSelf: "center",
  },
  container: {
    marginTop: "10%",
    marginHorizontal: "5%",
  },
  buttonContainer: {
    width: "80%",
    padding: 20,
    alignSelf: "center",
  },
});

export default MNumberConfirmation;
