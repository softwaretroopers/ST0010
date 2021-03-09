import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import { Avatar, Chip, Text } from "react-native-paper";

import colors from "../configs/colors";
import ProfileCardListItem from "./ProfileCardListItem";

function ProfileCardVariant3({
  image,
  name,
  profession,
  slmc,
  hospital,
  language,
  price,
  IconButton,
  Iconclose,
}) {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <ImageBackground style={styles.image} source={image}>
          <View style={{ flexDirection: "row-reverse" }}>
            <View style={styles.IconClose}>{Iconclose}</View>
          </View>
          <View style={styles.containerText}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.profession}>{profession}</Text>

            <View style={styles.containerMiddle}>
              <ProfileCardListItem
                title={slmc}
                IconComponent={
                  <Avatar.Icon
                    style={styles.avatarIcon}
                    size={25}
                    icon="card-account-details"
                  />
                }
              />
              <ProfileCardListItem
                title={hospital}
                IconComponent={
                  <Avatar.Icon
                    style={styles.avatarIcon}
                    size={25}
                    icon="hospital-building"
                  />
                }
              />
              <ProfileCardListItem
                title={language}
                IconComponent={
                  <Avatar.Icon
                    style={styles.avatarIcon}
                    size={25}
                    icon="alphabetical"
                  />
                }
              />
              <View style={styles.Calltype}>
                <ProfileCardListItem
                  title={price}
                  IconComponent={
                    <Avatar.Icon
                      style={styles.avatarIcon}
                      size={25}
                      icon="cash"
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
    marginLeft: "58%",
  },
  avatarIcon: { backgroundColor: colors.patientPrimary },
  image: {
    resizeMode: "cover",
    justifyContent: "center",
    width: 380,
    height: 400,
  },
  name: {
    color: colors.themeDark,
    fontWeight: "bold",
    fontSize: 22,
    paddingTop: "40%",
  },
  profession: {
    color: colors.themeDark,
    fontWeight: "bold",
    fontSize: 12,
    marginBottom: "1%",
  },
  screen: {
    overflow: "hidden",
    borderRadius: 20,
  },
});

export default ProfileCardVariant3;
