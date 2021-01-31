import React from "react";
import { View, StyleSheet, Share } from "react-native";
import { DrawerItem, DrawerContentScrollView } from "@react-navigation/drawer";
import { Avatar, Title, Caption, Drawer } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

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
                source={require("../../assets/logo.png")}
              ></Avatar.Image>
              <View style={{ marginLeft: 15, flexDirection: "column" }}>
                <Title style={styles.title}>Mr.Anonymous</Title>
                <Caption style={styles.caption}>0717827878</Caption>
              </View>
            </View>
          </View>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              label="Home"
              onPress={() => {
                props.navigation.navigate("Home");
              }}
              icon={({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
              )}
            />
            <DrawerItem
              label="Wallet"
              onPress={() => {
                props.navigation.navigate("Home");
              }}
              icon={({ color, size }) => (
                <MaterialCommunityIcons
                  name="wallet"
                  color={color}
                  size={size}
                />
              )}
            />
            <DrawerItem
              label="About Us"
              onPress={() => {
                props.navigation.navigate("Home");
              }}
              icon={({ color, size }) => (
                <MaterialCommunityIcons
                  name="information"
                  color={color}
                  size={size}
                />
              )}
            />
            <DrawerItem
              label="Help"
              onPress={() => {
                props.navigation.navigate("Home");
              }}
              icon={({ color, size }) => (
                <MaterialCommunityIcons
                  name="help-circle"
                  color={color}
                  size={size}
                />
              )}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          label="Invite Friends"
          onPress={shareMessage}
          icon={({ color, size }) => (
            <MaterialCommunityIcons
              name="share-variant"
              color={color}
              size={size}
            />
          )}
        />
        <DrawerItem
          label="Logout"
          onPress={() => props.navigation.popToTop()}
          icon={({ color, size }) => (
            <MaterialCommunityIcons name="logout" color={color} size={size} />
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
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
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
