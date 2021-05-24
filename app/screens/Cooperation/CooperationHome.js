import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { Button, Avatar, Title, Caption, FAB } from "react-native-paper";
import AppSearchBar from "../../components/AppSearchBar";

import ScreenVariant from "../../components/ScreenVariant";
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
    <ScreenVariant>
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
                source={require("../../assets/profile.png")}
                size={50}
              />
              <View style={{ marginLeft: 15, flexDirection: "column" }}>
                <Title style={styles.title}>{item.userName}</Title>
                <Caption style={styles.caption}>{item.userID}</Caption>
              </View>
              <Button
                style={{ marginLeft: "10%" }}
                color={colors.themeDark}
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
    </ScreenVariant>
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
  userInfoSection: {
    backgroundColor: colors.white,
    paddingVertical: "3%",
    paddingHorizontal: "5%",
    borderRadius: 10,
    width: "80%",
    alignSelf: "center",
    margin: "1%",
    elevation: 5,
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: colors.themeDark,
  },
});

export default CooperationHome;
