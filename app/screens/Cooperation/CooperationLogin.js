import React from "react";
import { StyleSheet, View } from "react-native";
import AppTextInput from "../../components/AppTextInput";
import { Formik } from "formik";
import { MaterialIcons } from "@expo/vector-icons";

import Screen from "../../components/Screen";
import AppButton from "../../components/AppButton";
import colors from "../../configs/colors";

function CooperationLogin(props) {
  return (
    <Screen style={styles.container}>
      <MaterialIcons
        name="person"
        size={50}
        color={colors.cooperationPrimary}
        style={styles.iconContainer}
      />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleSubmit }) => (
          <>
            <View style={styles.buttonContainer}>
              <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                icon="email"
                onChangeText={handleChange("email")}
                keyboardType="email-address"
                placeholder="Email"
                textContentType="emailAddress"
              />
              <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                icon="lock"
                onChangeText={handleChange("password")}
                placeholder="Password"
                secureTextEntry
                textContentType="password"
              />

              <AppButton
                title="Login"
                color="cooperationPrimary"
                onPress={handleSubmit}
              />
            </View>
          </>
        )}
      </Formik>
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
    marginTop: "60%",
  },
  iconContainer: {
    position: "absolute",
    marginTop: "35%",
  },
});

export default CooperationLogin;
