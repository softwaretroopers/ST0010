import React from "react";
import { StyleSheet, View } from "react-native";
import * as Yup from "yup";

import Screen from "../../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../../components/forms";
import AppText from "../../components/AppText";
import AppButtonVariant from "../../components/AppButtonVariant";

const validationSchema = Yup.object().shape({
  empName: Yup.string().required().min(2).label("Name"),
  empID: Yup.string().required().min(8).label("Employee ID"),
  empNIC: Yup.string().required().min(10).label("NIC"),
});

function CooperationAddNew(props) {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{ empName: "", empID: "", empNIC: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <View style={styles.buttonContainer}>
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="account"
            placeholder="Employee Name"
            keyboardType="default"
            name="empName"
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="account-card-details"
            placeholder="Employee ID"
            keyboardType="default"
            name="empID"
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="cards"
            placeholder="NIC Number"
            keyboardType="default"
            name="empNIC"
          />
          <View style={styles.uploadContainer}>
            <AppText style={styles.uploadLabel}>Report</AppText>
            <AppButtonVariant
              textStyle={styles.uploadButtonText}
              title="Select"
              style={styles.uploadButton}
              color="cooperationPrimary"
            ></AppButtonVariant>
          </View>
          <SubmitButton title="submit" color="cooperationPrimary" />
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
    marginTop: "35%",
  },
  uploadButton: {
    width: 80,
    height: 35,
    marginLeft: "3%",
    marginRight: 10,
  },
  uploadButtonText: {
    fontSize: 12,
  },
  uploadLabel: {
    marginTop: "4%",
  },
  uploadContainer: {
    flexDirection: "row",
    padding: "3%",
    width: "100%",
    justifyContent: "center",
    marginBottom: "10%",
  },
});

export default CooperationAddNew;
