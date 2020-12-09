import React from "react";
import { StyleSheet, View, Text } from "react-native";
import * as Yup from "yup";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import {
  AppForm,
  AppFormFieldVariant,
  SubmitButton,
} from "../../components/forms";
import Screen from "../../components/Screen";
import colors from "../../configs/colors";

const validationSchema = Yup.object().shape({
  oTP: Yup.string().required().min(6).max(6).label("OTP"),
});

function OTPConfirmation({ navigation , icon, ...otherProps }) {
  return (
    <Screen>
      <AppForm
        initialValues={{
          oTP: "",
        }}
        onSubmit={(values) => navigation.navigate("PatientLogin")}
        validationSchema={validationSchema}
      >
        <View style={styles.container}>
          <Text style={styles.text}>Enter the code you recieved via SMS</Text>
          <MaterialCommunityIcons
            size={50}
            color={colors.patientPrimary}
            style={styles.iconContainer}
            name="cellphone-message"
          ></MaterialCommunityIcons>
          <AppFormFieldVariant
            name="oTP"
            placeholder="XXXXXX"
            keyboardType="number-pad"
            maxLength={6}
          />
        </View>
        <View style={styles.buttonContainer}>
          <SubmitButton title="Submit" color="patientPrimary" />
        </View>
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: "10%",
  },
  container: {
    marginTop: "20%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    width: "60%",
    padding: 20,
  },
});

export default OTPConfirmation;
