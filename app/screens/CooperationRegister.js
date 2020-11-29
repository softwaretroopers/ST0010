import React from "react";
import { StyleSheet, View } from "react-native";
import * as Yup from "yup";
import { FontAwesome5 } from "@expo/vector-icons";

import colors from "../configs/colors";
import Screen from "../components/Screen";
import {
  AppForm,
  AppFormField,
  AppFormPickerVariant,
  SubmitButton,
} from "../components/forms";
import PickerItemVariant from "../components/PickerItemVariant";

const validationSchema = Yup.object().shape({
  companyName: Yup.object().required().label("Company Name"),
  empID: Yup.string().required().min(8).label("Password"),
});

const companies = [
  {
    label: "ABC (PVT) LTD",
    value: 1,
    backgroundColor: colors.patientPrimary,
    name: "building",
  },
  {
    label: "GFP (PVT) LTD",
    value: 2,
    backgroundColor: colors.patientPrimary,
    name: "building",
  },
  {
    label: "ST (PVT) LTD",
    value: 3,
    backgroundColor: colors.patientPrimary,
    name: "building",
  },
];

function CooperationRegister(props) {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{ companyName: [0], empID: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <View style={styles.buttonContainer}>
          <AppFormPickerVariant
            desc="Select your Cooperation"
            items={companies}
            name="companyName"
            placeholderIcon="office-building"
            numberOfColumns={3}
            PickerItemComponent={PickerItemVariant}
            IconFamily={FontAwesome5}
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="account-card-details"
            placeholder="Enter Employee ID"
            keyboardType="numeric"
            name="empID"
          />
          <SubmitButton title="submit" color="patientPrimary" />
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
    marginTop: "50%",
  },
});

export default CooperationRegister;
