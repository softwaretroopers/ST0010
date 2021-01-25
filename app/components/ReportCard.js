import React from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";

import colors from "../configs/colors";

export default class ReportCard extends React.Component {
  render() {
    return (
      <Animatable.View
        animation="bounceInLeft"
        duration={1500}
        style={styles.cardone}
      >
        <View
          style={{
            borderRadius: 21,
            backgroundColor: colors.white,
            height: "100%",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            style={{ height: "100%", width: "100%" }}
            source={this.props.image}
          />
        </View>
        <View style={styles.box2}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 16,
              color: colors.black,
              letterSpacing: -0.9,
            }}
          >
            {this.props.title}
          </Text>
          <Text
            style={{
              fontSize: 12,
              color: colors.medium,
              letterSpacing: -0.5,
              paddingVertical: 5,
            }}
          >
            {this.props.subtitle}
          </Text>
        </View>

        <View style={styles.box3}>
          <TouchableOpacity>
            <View
              style={{
                height: "100%",
                width: "90%",
                borderWidth: 1,
                borderColor: colors.themeLight,
                borderRadius: 100,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: colors.themeLight,
                }}
              >
                View
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    );
  }
}
const styles = StyleSheet.create({
  cardone: {
    flex: 1,
    marginBottom: 15,
    display: "flex",
    flexDirection: "row",
  },
  cardtwo: {
    flex: 1,
  },
  box1: {
    flex: 1,
    paddingHorizontal: 10,
  },
  box2: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  box3: {
    flex: 1,
  },
});
