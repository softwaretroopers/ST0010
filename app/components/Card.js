import React from "react";
import { Divider } from "react-native-paper";
import { View, StyleSheet, Image, TouchableNativeFeedback } from "react-native";
import colors from "../configs/colors";
import AppText from "./AppText";

function Card({ title, des, image, onPress }) {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View flexDirection="row" style={styles.card}>
        <Image style={styles.image} source={image} />
        <Divider
          style={{
            backgroundColor: colors.themeDark,
            width: 2,
            height: "100%",
            marginHorizontal: "2%",
          }}
        />
        <View style={styles.container}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.des}>{des}</AppText>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    backgroundColor: colors.white,
    marginVertical: "3%",
    marginHorizontal: "5%",
    padding: "5%",
    overflow: "hidden",

    shadowColor: colors.themeDark,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 5,
  },
  des: {
    color: colors.themeDark,
    fontSize: 15,
    marginRight: "28%",
    alignSelf: "center",
  },
  image: {
    height: 110,
    width: "25%",
  },
  title: {
    fontWeight: "bold",
    marginBottom: "2%",
    color: colors.themeDark,
  },
});

export default Card;
