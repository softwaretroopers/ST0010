import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Divider } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import colors from "../configs/colors";
import AppText from "./AppText";

function CardAppointments({
  name,
  date,
  time,
  image,
  category,
  type = "keyboard-voice",
}) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <Divider
        style={{
          backgroundColor: colors.themeDark,
          width: 2,
          height: "80%",
          marginHorizontal: "2%",
        }}
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.Detailstextname}>{name}</AppText>
        <View flexDirection="row" style={{ alignItems: "center" }}>
          <AppText style={styles.category}>{category}</AppText>
          <View
            style={{
              width: 16,
              height: 16,
              borderRadius: 8,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: colors.medium,
              marginLeft: "2%",
            }}
          >
            <MaterialIcons
              size={8}
              color={colors.themeDark}
              name={type}
            ></MaterialIcons>
          </View>
        </View>
        <View style={styles.timeContainer}>
          <View
            style={{ marginRight: "10%", padding: "2%" }}
            backgroundColor={colors.themeDark}
            borderRadius={5}
          >
            <AppText style={styles.date}>{date}</AppText>
          </View>
          <View
            style={{ marginLeft: "10%", padding: "2%" }}
            backgroundColor={colors.themeDark}
            borderRadius={5}
          >
            <AppText style={styles.time}>{time}</AppText>
          </View>
        </View>
      </View>
      <AntDesign name="rightcircle" size={24} color={colors.themeDark} />
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    marginHorizontal: "2%",
    marginVertical: "2%",
    backgroundColor: colors.white,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 15,
    padding: "2%",
    elevation: 5,
  },
  Detailstextname: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.themeDark,
  },
  date: {
    fontSize: 12,
    fontWeight: "bold",
    color: colors.white,
  },
  time: {
    fontSize: 12,
    fontWeight: "bold",
    color: colors.white,
  },

  category: {
    fontSize: 16,
    color: colors.medium,
    fontWeight: "bold",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    alignSelf: "flex-start",
  },
  detailsContainer: {
    margin: "3%",
    width: "52%",
  },
  timeContainer: {
    flexDirection: "row",
    marginTop: "8%",
  },
});

export default CardAppointments;
