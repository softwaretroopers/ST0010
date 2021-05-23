import React from "react";
import { View, StyleSheet, Share } from "react-native";
import { DrawerItem, DrawerContentScrollView } from "@react-navigation/drawer";
import { Avatar, Title, Caption, Drawer, Divider } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../configs/colors";

const messageDetails =
  "Hey, \nAyushaadhi is a Mobile Application helps you to channel doctors online in Sri Lanka at your convenience.\nGet it for free at https://play.google.com/store/apps/details?id=com.softwaretroopers.ayushaadhi&hl=en&gl=US";

const shareMessage = () => {
  Share.share({
    message: messageDetails.toString(),
  });
};

function AppDrawerContent(props) {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: "row", marginTop: 15 }}>
              <Avatar.Image
                source={require("../../assets/profile.png")}
              ></Avatar.Image>
              <View style={{ marginLeft: 15, flexDirection: "column" }}>
                <Title style={styles.title}>Software Troopers</Title>
                <Caption style={styles.caption}>071 400 9020</Caption>
              </View>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <Divider />
            <DrawerItem
              labelStyle={{ color: colors.themeDark }}
              style={{ color: colors.themeDark }}
              label="Home"
              onPress={() => {
                props.navigation.navigate("Home", { screen: "Home" });
              }}
              icon={({ color, size }) => (
                <MaterialCommunityIcons
                  name="home"
                  color={colors.themeDark}
                  size={size}
                />
              )}
            />
            <DrawerItem
              labelStyle={{ color: colors.themeDark }}
              label="Wallet"
              onPress={() => {
                props.navigation.navigate("Home");
              }}
              icon={({ color, size }) => (
                <MaterialCommunityIcons
                  name="wallet"
                  color={colors.themeDark}
                  size={size}
                />
              )}
            />
            <DrawerItem
              labelStyle={{ color: colors.themeDark }}
              label="About Us"
              onPress={() => {
                props.navigation.navigate("Home");
              }}
              icon={({ color, size }) => (
                <MaterialCommunityIcons
                  name="information"
                  color={colors.themeDark}
                  size={size}
                />
              )}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          labelStyle={{ color: colors.themeDark }}
          label="Invite Friends"
          onPress={shareMessage}
          icon={({ color, size }) => (
            <MaterialCommunityIcons
              name="share-variant"
              color={colors.themeDark}
              size={size}
            />
          )}
        />
        <DrawerItem
          labelStyle={{ color: colors.themeDark }}
          label="Logout"
          onPress={() => props.navigation.popToTop()}
          icon={({ color, size }) => (
            <MaterialCommunityIcons
              name="logout"
              color={colors.themeDark}
              size={size}
            />
          )}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
    color: colors.themeDark,
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    color: colors.themeDark,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});

export default AppDrawerContent;
