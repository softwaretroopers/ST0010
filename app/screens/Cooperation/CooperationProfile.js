import React from "react";
import { View, StyleSheet } from "react-native";
import {
  FAB,
  Text,
  Avatar,
  Title,
  Subheading,
  Caption,
} from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";

import ScreenVariant from "../../components/ScreenVariant";
import colors from "../../configs/colors";

function CooperationProfile({ navigation }) {
  return (
    <ScreenVariant>
      <Animatable.View
        animation="bounceInDown"
        duration={1500}
        style={styles.accounttop}
      >
        <FAB
          style={styles.fab}
          small
          icon="pen"
          onPress={() => navigation.navigate("CooperationProfileEdit")}
        />
        <Avatar.Image size={100} source={require("../../assets/logo.png")} />
        <Title style={{ color: colors.white }}>ABC Company</Title>
        <Subheading style={{ color: colors.white }}>071 400 9020</Subheading>
        <Caption style={{ color: colors.white }}>
          support@softwaretroopers.com
        </Caption>
      </Animatable.View>
    </ScreenVariant>
  );
}

const styles = StyleSheet.create({
  accounttop: {
    backgroundColor: colors.cooperationPrimary,
    borderRadius: 20,
    margin: "2%",
    padding: "2%",
    alignItems: "center",
  },
  accountMiddle: {
    padding: 20,
  },
  accountMiddleDetail: {
    marginTop: 20,
    marginLeft: 50,
    marginRight: 50,
    borderBottomWidth: 1,
    fontWeight: "bold",
  },
  accountBottom: {
    marginTop: 30,
    marginLeft: 20,
    fontWeight: "bold",
  },
  buttonContainer: {
    width: "18%",
    height: 30,
    marginLeft: "40%",
  },
  title: {
    marginTop: 20,
    marginLeft: 10,
  },
  fab: {
    position: "absolute",
    right: 10,
    top: 10,
    backgroundColor: "white",
  },
});

export default CooperationProfile;
