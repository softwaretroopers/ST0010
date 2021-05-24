import React from "react";
import { StyleSheet, View } from "react-native";
import * as Yup from "yup";
import { Button } from "react-native-paper";

import { AppForm, AppFormField, SubmitButton } from "../../components/forms";
import colors from "../../configs/colors";
import ScreenVariant from "../../components/ScreenVariant";

const validationSchema = Yup.object().shape({
  empName: Yup.string().required().min(2).label("Name"),
  empID: Yup.string().required().min(8).label("Employee ID"),
  empNIC: Yup.string().required().min(10).label("NIC"),
});

function CooperationAddNew(props) {
  return (
    <ScreenVariant style={styles.container}>
      <AppForm
        initialValues={{ empName: "", empID: "", empNIC: "" }}
        onSubmit={(values) => props.navigation.navigate("CoHomeScreen")}
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
            icon="card-account-details"
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
            <Button color={colors.themeDark} icon="file-plus" mode="outlined">
              Add Reports
            </Button>
          </View>
          <SubmitButton title="Done" color="themeDark" icon="check-circle" />
        </View>
      </AppForm>
    </ScreenVariant>
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
  uploadContainer: {
    flexDirection: "row",
    padding: "3%",
    justifyContent: "center",
    marginBottom: "10%",
    alignItems: "center",
  },
});

export default CooperationAddNew;
