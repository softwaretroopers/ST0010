import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Icon from "../../components/Icon";
import ListItem from "../../components/ListItem";
import colors from "../../configs/colors";
import ScreenVarient from "../../components/ScreenVarient";
import Patient from "./PatientLogin";


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
    targetScreen: "PatientLogin",
  },
];

function PatientNavigation({navigation}) {
  return (
    <ScreenVarient>
      <View style={styles.screen}>
        <View style={styles.containerTop}>
          <ListItem
            title="Mr.Anonymous"
            image={require("../../assets/logo.png")}
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
            onPress = { () => navigation.push("PatientLogin")}
          />
        </View>
      </View>
    </ScreenVarient>
  );
}

const styles = StyleSheet.create({
  container: {
     marginBottom:"8%",
    backgroundColor: colors.lightGrey,
  },
  containerTop: {
    marginBottom:"8%",
   backgroundColor: colors.lightGrey,
 },
  screen: {
    backgroundColor: colors.white,
    flex: 1,
  },
});

export default PatientNavigation;
