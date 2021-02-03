import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import { Fontisto } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Avatar } from "react-native-paper";

import colors from "../configs/colors";
import AppText from "./AppText";
import Icon from "./Icon";
import ProfileCardListItem from "./ProfileCardListItem";

function ProfileCardVariant({
  image,
  name,
  price,
  profession,
  education,
  university,
  language,
  IconButton,
  Iconclose,
}) {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <ImageBackground style={styles.image} source={image}>
          <View style={styles.IconClose}>{Iconclose}</View>
          <View style={styles.containerText}>
            <AppText style={styles.name}>{name}</AppText>
            <AppText style={styles.profession}>{profession}</AppText>

            <View style={styles.containerMiddle}>
              <ProfileCardListItem
                title={education}
                IconComponent={
                  <Icon
                    IconFamily={Fontisto}
                    name={"doctor"}
                    size={25}
                    color="white"
                  />
                }
              />
              <ProfileCardListItem
                title={university}
                IconComponent={
                  <Icon
                    IconFamily={FontAwesome}
                    name={"university"}
                    size={25}
                    color="white"
                  />
                }
              />
              <ProfileCardListItem
                title={language}
                IconComponent={
                  <Icon
                    IconFamily={Fontisto}
                    name={"language"}
                    size={25}
                    color="white"
                  />
                }
              />
              <View style={styles.Calltype}>
                <ProfileCardListItem
                  title={price}
                  IconComponent={
                    <Avatar.Icon
                      style={{ backgroundColor: colors.black }}
                      size={25}
                      icon="chat"
                    />
                  }
                />
              </View>
            </View>
          </View>
        </ImageBackground>
        {IconButton}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  Calltype: {
    flexDirection: "row",
  },
  container: {
    borderRadius: 20,
    backgroundColor: colors.black,
    color: colors.white,
    overflow: "hidden",

    shadowColor: colors.patientPrimary,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 10,
  },
  containerMiddle: {
    padding: 10,
  },
  containerText: {
    marginLeft: 15,
  },
  IconClose: {
    marginLeft: "87%",
    marginTop: 5,
  },
  image: {
    resizeMode: "cover",
    justifyContent: "center",
    width: 380,
    height: 400,
  },
  name: {
    color: colors.black,
    fontWeight: "bold",
    fontSize: 22,
    paddingTop: "40%",
  },
  profession: {
    color: colors.black,
    fontWeight: "bold",
    fontSize: 12,
    marginBottom: "1%",
  },
  screen: {
    backgroundColor: colors.black,
    overflow: "hidden",
    borderRadius: 20,
  },
});

export default ProfileCardVariant;
