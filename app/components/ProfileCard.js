import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import { Fontisto } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import colors from "../configs/colors";
import AppText from "./AppText";
import Icon from "./Icon";
import ProfileCardListItem from "./ProfileCardListItem";

function profileCard({
  image,
  name,
  profession,
  education,
  university,
  language,
  Callprice,
  Videoprice,
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
                    size={35}
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
                  title={Callprice}
                  IconComponent={
                    <Icon
                      IconFamily={MaterialIcons}
                      name={"keyboard-voice"}
                      size={25}
                      color="white"
                    />
                  }
                />
                <ProfileCardListItem
                  title={Videoprice}
                  IconComponent={
                    <Icon name={"video-camera"} size={25} color="white" />
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

export default profileCard;
