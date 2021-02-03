import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Text,
} from "react-native";
import { Appbar, TextInput } from "react-native-paper";

import ScreenVariant from "../../components/ScreenVariant";
import ListItem from "../../components/ListItem";
import colors from "../../configs/colors";
import RenderIf from "../../components/RenderIf";

const userDetails = [
  {
    detail: "Dr.Anonymous",
    label: "Name",
    icon: "account",
  },
  { detail: "0714009020", label: "Mobile Number", icon: "cellphone" },
  { detail: "166666", label: "SLMC Number", icon: "card-account-details" },
  { detail: "Psychologist", label: "Category", icon: "doctor" },
  { detail: "Sinhala", label: "Languages", icon: "alphabetical" },
  { detail: "Nawaloka Hospital", label: "Hospital", icon: "hospital-building" },
];

function DoctorAccInfoEdit(props) {
  const [visibility, setVisibility] = useState(true);

  return (
    <ScreenVariant style={styles.screen}>
      <Appbar style={{ backgroundColor: colors.doctorPrimary }}>
        <Appbar.BackAction onPress={() => props.navigation.goBack()} />
        <Appbar.Content title="Edit Information" />
        {RenderIf(
          visibility,
          <Appbar.Action
            icon="square-edit-outline"
            onPress={() => {
              setVisibility(!visibility);
            }}
          />
        )}
        {RenderIf(
          !visibility,
          <Appbar.Action
            icon="content-save"
            onPress={() => {
              setVisibility(!visibility);
            }}
          />
        )}
      </Appbar>
      <View style={styles.containerTop}>
        <ListItem image={require("../../assets/logo.png")} />
      </View>
      <TouchableOpacity style={styles.ContainerButton}>
        <Text style={{ fontSize: 14, fontWeight: "bold" }}>
          Change Profile Picture
        </Text>
      </TouchableOpacity>
      <View style={styles.containers}>
        <FlatList
          data={userDetails}
          keyExtractor={(listing) => listing.label}
          renderItem={({ item }) => (
            <TextInput
              label={item.label}
              disabled={visibility}
              value={item.detail}
              left={<TextInput.Icon name={item.icon} />}
            />
          )}
        />
      </View>
    </ScreenVariant>
  );
}

const styles = StyleSheet.create({
  containers: {
    padding: 10,
  },
  ContainerButton: {
    flexDirection: "row",
    justifyContent: "center",
  },
  containerHeading: {
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: colors.white,
    padding: "5%",
    shadowColor: colors.patientPrimary,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 15,
  },
  containerTop: {
    alignItems: "center",
    marginTop: 5,
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "center",
  },
  HeadingFont: {
    fontWeight: "bold",
  },
});

export default DoctorAccInfoEdit;
