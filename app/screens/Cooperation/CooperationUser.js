import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import {
  FAB,
  Text,
  Avatar,
  Title,
  Subheading,
  Caption,
} from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";

import ReportCard from "../../components/ReportCard";
import ScreenVariant from "../../components/ScreenVariant";
import colors from "../../configs/colors";

const reports = [
  {
    id: 1,
    title: "Blood Report",
    subtitle: "Dr.Anonymous 1",
    image: require("../../assets/report.png"),
  },
  {
    id: 2,
    title: "Laboratory Report",
    subtitle: "Dr.Anonymous 2",
    image: require("../../assets/report.png"),
  },
  {
    id: 3,
    title: "Consultation",
    subtitle: "Dr.Anonymous 3",
    image: require("../../assets/report.png"),
  },
];

function CooperationUser({ navigation }) {
  return (
    <ScreenVariant>
      <View style={styles.accounttop}>
        <FAB
          color={colors.themeDark}
          style={styles.fab}
          small
          icon="pen"
          onPress={() => navigation.navigate("CooperationUserEdit")}
        />
        <Avatar.Image size={100} source={require("../../assets/profile.png")} />
        <Title style={{ color: colors.white, fontWeight: "bold" }}>
          Software Troopers
        </Title>
        <Subheading style={{ color: colors.white }}>20s07001</Subheading>
        <Subheading style={{ color: colors.white }}>071 400 9020</Subheading>
        <Caption style={{ color: colors.white }}>
          support@softwaretroopers.com
        </Caption>
        <View flexDirection="row" style={{ margin: "2%" }}>
          <View
            flexDirection="row"
            style={{
              width: "20%",
              backgroundColor: colors.white,
              padding: "1%",
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              marginHorizontal: "2%",
            }}
          >
            <MaterialCommunityIcons
              name="calendar"
              size={16}
              color={colors.themeDark}
            />
            <Text
              style={{
                fontWeight: "bold",
                marginLeft: 5,
                color: colors.themeDark,
              }}
            >
              18
            </Text>
          </View>
          <View
            flexDirection="row"
            style={{
              width: "20%",
              backgroundColor: colors.white,
              padding: "1%",
              borderRadius: 10,
              justifyContent: "center",
              marginHorizontal: "2%",
            }}
          >
            <MaterialCommunityIcons
              name="gender-male-female"
              size={16}
              color={colors.themeDark}
            />
            <Text
              style={{
                fontWeight: "bold",
                marginLeft: 5,
                color: colors.themeDark,
              }}
            >
              Male
            </Text>
          </View>
        </View>
        <Title style={{ color: colors.white }}>Reports</Title>
        <FlatList
          horizontal={true}
          data={reports}
          keyExtractor={(report) => report.id.toString()}
          renderItem={({ item }) => (
            <ReportCard
              title={item.title}
              subtitle={item.subtitle}
              image={item.image}
            />
          )}
        />
      </View>
    </ScreenVariant>
  );
}

const styles = StyleSheet.create({
  accounttop: {
    backgroundColor: colors.themeDark,
    borderRadius: 20,
    margin: "2%",
    padding: "2%",
    alignItems: "center",
  },
  accountMiddle: {
    padding: 20,
  },
  accountMiddleDetail: {
    marginTop: 20,
    marginLeft: 50,
    marginRight: 50,
    borderBottomWidth: 1,
    fontWeight: "bold",
  },
  accountBottom: {
    marginTop: 30,
    marginLeft: 20,
    fontWeight: "bold",
  },
  buttonContainer: {
    width: "18%",
    height: 30,
    marginLeft: "40%",
  },
  title: {
    marginTop: 20,
    marginLeft: 10,
  },
  fab: {
    position: "absolute",
    right: 10,
    top: 10,
    backgroundColor: "white",
  },
  ReportCards: {
    flex: 1,
    display: "flex",
    marginTop: "2%",
    marginHorizontal: "2%",
  },
});

export default CooperationUser;
