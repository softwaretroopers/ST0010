import React from "react";
import { View, StyleSheet } from "react-native";
import { DrawerItem, DrawerContentScrollView } from "@react-navigation/drawer";
import { Avatar, Title, Caption, Drawer } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function CoAppDrawerContent(props) {
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
                <Title style={styles.title}>ABC Company</Title>
                <Caption style={styles.caption}>0717827878</Caption>
              </View>
            </View>
          </View>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              label="Home"
              onPress={() => {
                props.navigation.navigate("CooperationHome");
              }}
              icon={({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
              )}
            />
            <DrawerItem
              label="Profile"
              onPress={() => {
                props.navigation.navigate("CooperationProfile");
              }}
              icon={({ color, size }) => (
                <MaterialCommunityIcons
                  name="account"
                  color={color}
                  size={size}
                />
              )}
            />

            <DrawerItem
              label="About Us"
              onPress={() => {
                props.navigation.navigate("CooperationHome");
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
                props.navigation.navigate("CooperationHome");
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
          onPress={() => {
            props.navigation.navigate("CooperationHome");
          }}
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

export default CoAppDrawerContent;
