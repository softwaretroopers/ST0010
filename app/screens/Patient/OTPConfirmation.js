import React from "react";
import { StyleSheet, View, Text } from "react-native";
import * as Yup from "yup";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import {
  AppForm,
  AppFormFieldVariant,
  SubmitButton,
} from "../../components/forms";
import colors from "../../configs/colors";
import ScreenVariant from "../../components/ScreenVariant";

const validationSchema = Yup.object().shape({
  oTP: Yup.string().required().min(6).max(6).label("OTP"),
});

function OTPConfirmation({ navigation, icon, ...otherProps }) {
  return (
    <ScreenVariant>
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
            color={colors.themeDark}
            style={styles.iconContainer}
            name="cellphone-message"
          ></MaterialCommunityIcons>
          <View style={{ marginHorizontal: "33.3%" }}>
            <AppFormFieldVariant
              name="oTP"
              placeholder="XXXXXX"
              keyboardType="number-pad"
              maxLength={6}
            />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <SubmitButton title="Submit" color="themeDark" />
        </View>
      </AppForm>
    </ScreenVariant>
  );
}

const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
    fontSize: 20,
    alignSelf: "center",
    marginBottom: "5%",
    color: colors.themeDark,
  },
  container: {
    marginTop: "10%",
  },
  buttonContainer: {
    width: "60%",
    padding: 20,
    alignSelf: "center",
  },
  iconContainer: { alignSelf: "center", marginVertical: "2%" },
});

export default OTPConfirmation;
