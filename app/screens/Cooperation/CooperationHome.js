import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import {
  Button,
  Avatar,
  Title,
  Caption,
  FAB,
  Appbar,
} from "react-native-paper";
import AppSearchBar from "../../components/AppSearchBar";

import ScreenVarient from "../../components/ScreenVarient";
import colors from "../../configs/colors";

const users = [
  {
    userID: "20s07001",
    userName: "Mr.Anonymous",
  },
  {
    userID: "20s07002",
    userName: "Mr.Anonymous",
  },
  {
    userID: "20s07003",
    userName: "Mr.Anonymous",
  },
  {
    userID: "20s07004",
    userName: "Mr.Anonymous",
  },
  {
    userID: "20s07005",
    userName: "Mr.Anonymous",
  },
  {
    userID: "20s07006",
    userName: "Mr.Anonymous",
  },
  {
    userID: "20s07007",
    userName: "Mr.Anonymous",
  },
  {
    userID: "20s07008",
    userName: "Mr.Anonymous",
  },
  {
    userID: "20s07009",
    userName: "Mr.Anonymous",
  },
  {
    userID: "20s07010",
    userName: "Mr.Anonymous",
  },
  {
    userID: "20s07011",
    userName: "Mr.Anonymous",
  },
];

function CooperationHome({ navigation }) {
  return (
    <ScreenVarient>
      <Appbar style={{ backgroundColor: colors.cooperationPrimary }}>
        <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />
        <Appbar.Content title="Home" />
      </Appbar>
      <AppSearchBar />
      <FlatList
        data={users}
        keyExtractor={(user) => user.userID.toString()}
        renderItem={({ item }) => (
          <View style={styles.userInfoSection}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Avatar.Image
                source={require("../../assets/logo.png")}
                size={50}
              />
              <View style={{ marginLeft: 15, flexDirection: "column" }}>
                <Title style={styles.title}>{item.userName}</Title>
                <Caption style={styles.caption}>{item.userID}</Caption>
              </View>
              <Button
                style={{ marginLeft: "10%" }}
                color={colors.cooperationPrimary}
                icon="eye"
                onPress={() => navigation.navigate("CooperationUser")}
              >
                View
              </Button>
            </View>
          </View>
        )}
      />
      <FAB
        style={styles.fab}
        icon="plus"
        onPress={() => navigation.navigate("CooperationAddNew")}
      />
    </ScreenVarient>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
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
  userInfoSection: {
    backgroundColor: colors.lightgray,
    paddingVertical: "3%",
    paddingHorizontal: "5%",
    borderRadius: 10,
    width: "80%",
    alignSelf: "center",
    margin: "1%",
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: colors.cooperationPrimary,
  },
});

export default CooperationHome;
