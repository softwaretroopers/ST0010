import React from "react";
import { View, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import Icon from "../../components/Icon";
import DoctorListItem from "../../components/DoctorListItem";
import ScreenVarient from "../../components/ScreenVarient";
import colors from "../../configs/colors";
import AppText from "../../components/AppText";

const completeList = [
  {
    id: 1,
    title: "Miss.Nithya",
    date: "21/09/2020",
    time: "3.15 PM - 3.30 PM",
    calltype: "Voice Call",
    icon: {
      name: "keyboard-voice",
    },
  },
  {
    id: 2,
    title: "Miss.Nithya",
    date: "21/09/2020",
    time: "3.15 PM - 3.30 PM",
    calltype: "video-call",
    icon: {
      name: "video-call",
    },
  },
];

function DoctorOngoing(props) {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <FlatList
          data={completeList}
          keyExtractor={(listing) => listing.id.toString()}
          renderItem={({ item }) => (
            <DoctorListItem
              title={item.title}
              calltype={item.calltype}
              iconType={
                <Icon
                  IconFamily={MaterialIcons}
                  name={item.icon.name}
                  size={25}
                  backgroundColor={colors.themeDark}
                />
              }
              date={item.date}
              button={
                <Icon
                  IconFamily={MaterialIcons}
                  name="chat"
                  size={25}
                  backgroundColor={colors.themeDark}
                />
              }
              btnName="chat"
            />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.white,
    flex: 1,
  },
  HeaderText: {
    fontWeight: "bold",
    fontSize: 24,
    marginLeft: 20,
    color: colors.themeDark,
  },
});
export default DoctorOngoing;
