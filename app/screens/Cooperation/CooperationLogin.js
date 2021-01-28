import React from "react";

import { StyleSheet, View, ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import * as Yup from "yup";

import Screen from "../../components/Screen";
import colors from "../../configs/colors";
import { AppForm, AppFormField, SubmitButton } from "../../components/forms";

const validationSchema = Yup.object().shape({
  mNumber: Yup.string().required().min(10).max(10).label("Mobile Number"),
  password: Yup.string().required().min(8).label("Password"),
});

function CooperationLogin({ navigation }) {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{ mNumber: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => navigation.navigate("CoDrawerNavigation")}
      >
        <View
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ScrollView
            style={{ width: "100%", marginTop: "10%" }}
            contentContainerStyle={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MaterialIcons
              name="person"
              size={50}
              color={colors.cooperationPrimary}
              style={styles.iconContainer}
            />
            <View style={styles.inputContainer}>
              <AppFormField
                autoCapitalize="none"
                autoCorrect={false}
                icon="cellphone"
                keyboardType="numeric"
                name="mNumber"
                placeholder="Mobile Number"
                textContentType="telephoneNumber"
                maxLength={10}
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
            </View>
          </ScrollView>
          <View style={styles.buttonContainer}>
            <SubmitButton title="login" color="cooperationPrimary" />
          </View>
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
    width: "90%",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  registerButton: {
    color: colors.doctorPrimary,
    fontSize: 16,
    marginTop: "5%",
  },
  inputContainer: {
    width: "100%",
    padding: 10,
    marginVertical: "10%",
  },
});

export default CooperationLogin;
