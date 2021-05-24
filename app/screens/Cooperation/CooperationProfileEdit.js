import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Text,
} from "react-native";
import { Appbar, TextInput, Button, Avatar } from "react-native-paper";

import ScreenVariant from "../../components/ScreenVariant";
import ListItem from "../../components/ListItem";
import colors from "../../configs/colors";
import RenderIf from "../../components/RenderIf";

const userDetails = [
  {
    detail: "ABC Company",
    label: "Company Name",
    icon: "office-building",
  },
  { detail: "0714009020", label: "Mobile Number", icon: "cellphone" },
  { detail: "support@softwaretroopers.com", label: "Email", icon: "email" },
];

function CooperationProfileEdit(props) {
  const [visibility, setVisibility] = useState(true);

  return (
    <ScreenVariant style={styles.screen}>
      <Appbar style={{ backgroundColor: colors.themeDark }}>
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
      <Avatar.Image
        style={{ alignSelf: "center", margin: "3%" }}
        size={100}
        source={require("../../assets/profile.png")}
      />
      <Button
        style={{
          alignSelf: "center",
          padding: "1%",
          backgroundColor: colors.themeDark,
          marginBottom: 5,
        }}
        icon="square-edit-outline"
        mode="contained"
      >
        Change Profile Picture
      </Button>
      <View style={styles.containers}>
        <FlatList
          data={userDetails}
          keyExtractor={(listing) => listing.label}
          renderItem={({ item }) => (
            <TextInput
              label={item.label}
              disabled={visibility}
              value={item.detail}
              left={
                <TextInput.Icon name={item.icon} color={colors.themeDark} />
              }
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

export default CooperationProfileEdit;
