import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import Card from "../../components/Card";
import ScreenVarient from "../../components/ScreenVarient";

const listings = [
  {
    id: 1,
    title: "Doctor Channeling",
    des:
      "Doctor consultation is a laboratory analysis performed on a blood sample that is usually extracted from a vein in the arm using a hypodermic needle",
    image: require("../../assets/doctorChanneling.png"),
    nav: "HomeStackScreen",
  },
  {
    id: 2,
    title: "Anytime Doctor",
    des:
      "24 hrs Doctor channeling is a laboratory analysis performed on a blood sample that is usually extracted from a vein in the arm using a hypodermic needle",
    image: require("../../assets/anyTimeDoctor.png"),
    nav: "AnyTimeStackScreen",
  },
  {
    id: 3,
    title: "Report Reading",
    des:
      "Counsil is performed on a blood sample that is usually extracted from a vein in the arm using a hypodermic needle",
    image: require("../../assets/Councillor.png"),
    nav: "ReportStackScreen",
  },
];
function PatientHome({ navigation }) {
  return (
    <ScreenVarient>
      <View style={styles.screen}>
        <FlatList
          data={listings}
          keyExtractor={(listing) => listing.id.toString()}
          renderItem={({ item }) => (
            <Card
              onPress={() => navigation.navigate(item.nav)}
              title={item.title}
              des={item.des}
              image={item.image}
            />
          )}
        />
      </View>
    </ScreenVarient>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 20,
  },
});
export default PatientHome;
