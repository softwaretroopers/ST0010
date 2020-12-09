import React from "react";

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import * as Yup from "yup";

import Screen from "../../components/Screen";
import colors from "../../configs/colors";
import { AppForm, AppFormField, SubmitButton } from "../../components/forms";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(8).label("Password"),
});

function PatientLogin({ navigation }) {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => navigation.navigate("AppNavigator")}
        validationSchema={validationSchema}
      >
        <View
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ScrollView
            style={{ width: "100%", marginTop: "35%" }}
            contentContainerStyle={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MaterialIcons
              name="person"
              size={50}
              color={colors.patientPrimary}
              style={styles.iconContainer}
            />
            <View style={styles.inputContainer}>
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
            </View>
          </ScrollView>
          <View style={styles.buttonContainer}>
            <SubmitButton title="login" color="patientPrimary" />
            <TouchableOpacity
              onPress={() => navigation.navigate("PatientRegister")}
            >
              <Text style={styles.registerButton}>Create an account</Text>
            </TouchableOpacity>
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
  iconContainer: {},
  registerButton: {
    color: colors.patientPrimary,
    fontSize: 16,
    marginTop: "5%",
  },
  inputContainer: {
    width: "100%",
    padding: 10,
    marginVertical: "10%",
  },
});

export default PatientLogin;
