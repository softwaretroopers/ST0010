import React from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";
import { IconButton } from "react-native-paper";

import colors from "../configs/colors";

export default class ReportCard extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <View
          style={{
            borderRadius: 10,
            backgroundColor: colors.white,
            padding: 10,
            alignItems: "center",
            justifyContent: "center",
            margin: 10,
          }}
        >
          <Image
            style={{ height: 100, width: 100 }}
            source={this.props.image}
          />
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
          <IconButton icon="open-in-new" color={colors.themeDark} size={20} />
        </View>
      </View>
    );
  }
}
