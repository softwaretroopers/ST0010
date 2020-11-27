import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Icon from "../components/Icon";
import ListItem from "../components/ListItem";
import colors from "../configs/colors";
import ScreenVarient from "../components/ScreenVarient";

const menuItems = [
  {
    title: "Wallet",
    icon: {
      name: "wallet",
      backgroundColor: colors.black,
    },
  },
  {
    title: "About Us",
    icon: {
      name: "info",
      backgroundColor: colors.black,
    },
  },
  {
    title: "Help",
    icon: {
      name: "help",
      backgroundColor: colors.black,
    },
  },
];

function PatientNavigation(props) {
  return (
    <ScreenVarient>
      <View style={styles.screen}>
        <View style={styles.container}>
          <ListItem
            title="Mr.Anonymous"
            image={require("../assets/logo.png")}
          />
        </View>
        <View style={styles.container}>
          <FlatList
            data={menuItems}
            keyExtractor={(menuItems) => menuItems.title}
            renderItem={({ item }) => (
              <ListItem
                title={item.title}
                IconComponent={
                  <Icon
                    name={item.icon.name}
                    backgroundColor={item.icon.backgroundColor}
                  />
                }
              />
            )}
          />
        </View>
        <View style={styles.container}>
          <ListItem
            title="Log Out"
            IconComponent={
              <MaterialCommunityIcons name="logout" size={40} color="black" />
            }
          />
        </View>
      </View>
    </ScreenVarient>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    backgroundColor: colors.white,
  },
  screen: {
    backgroundColor: colors.lightGrey,
    flex: 1,
  },
});

export default PatientNavigation;
