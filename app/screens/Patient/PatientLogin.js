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
import { Menu, Provider, Appbar } from "react-native-paper";

import colors from "../../configs/colors";
import { AppForm, AppFormField, SubmitButton } from "../../components/forms";
import ScreenVariant from "../../components/ScreenVariant";

const validationSchema = Yup.object().shape({
  mNumber: Yup.string().required().min(10).max(10).label("Mobile Number"),
  password: Yup.string().required().min(8).label("Password"),
});

function PatientLogin({ navigation }) {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);
  return (
    <ScreenVariant style={styles.container}>
      <Provider>
        <Appbar style={{ backgroundColor: colors.themeDark }}>
          <Appbar.BackAction onPress={() => navigation.goBack()} />
          <Appbar.Content title="Login" subtitle="Patient" />
          <Appbar.Action icon="dots-vertical" onPress={openMenu} />
        </Appbar>

        <View>
          <Menu
            visible={visible}
            onDismiss={closeMenu}
            anchor={{ x: 600, y: 60 }}
          >
            <Menu.Item
              onPress={() => navigation.navigate("DocAuthNavigation")}
              title="Doctor"
              titleStyle={{ color: colors.themeDark }}
            />
            <Menu.Item
              onPress={() => navigation.navigate("CooperationNavigation")}
              title="Cooperation"
            />
          </Menu>
        </View>

        <AppForm
          initialValues={{ mNumber: "", password: "" }}
          onSubmit={(values) => navigation.navigate("DrawerNavigation")}
          validationSchema={validationSchema}
        >
          <ScrollView
            style={{ width: "100%" }}
            contentContainerStyle={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MaterialIcons
              name="person"
              size={50}
              color={colors.themeDark}
              style={{ marginTop: "30%" }}
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
            <View style={styles.buttonContainer}>
              <SubmitButton title="login" color="themeDark" />
              <TouchableOpacity
                onPress={() => navigation.navigate("PatientRegister")}
              >
                <Text style={styles.registerButton}>Create an account</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </AppForm>
      </Provider>
    </ScreenVariant>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: "90%",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  registerButton: {
    color: colors.themeDark,
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
