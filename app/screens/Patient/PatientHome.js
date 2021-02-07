import React from "react";
import { FlatList, View, Text } from "react-native";

import Card from "../../components/Card";
import Posts from "../../components/Posts";
import RenderIf from "../../components/RenderIf";
import ScreenVariant from "../../components/ScreenVariant";

const listings = [
  {
    type: true,
    id: 1,
    title: "Doctor Channeling",
    des:
      "Doctor consultation is a laboratory analysis performed on a blood sample that is usually extracted from a vein in the arm using a hypodermic needle",
    image: require("../../assets/doctorChanneling.png"),
    nav: "HomeStackScreen",
  },
  {
    type: true,
    id: 2,
    title: "Anytime Doctor",
    des:
      "24 hrs Doctor channeling is a laboratory analysis performed on a blood sample that is usually extracted from a vein in the arm using a hypodermic needle",
    image: require("../../assets/anyTimeDoctor.png"),
    nav: "AnyTimeStackScreen",
  },
  {
    type: true,
    id: 3,
    title: "Report Reading",
    des:
      "Counsil is performed on a blood sample that is usually extracted from a vein in the arm using a hypodermic needle",
    image: require("../../assets/Councillor.png"),
    nav: "ReportStackScreen",
  },
  {
    type: false,
    id: 4,
    title: "New Vaccine for COVID-19",
    image: require("../../assets/news.jpg"),
    date: "2 days ago",
  },
];

function PatientHome({ navigation }) {
  return (
    <ScreenVariant>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <View>
            {RenderIf(
              item.type,
              <Card
                onPress={() => navigation.navigate(item.nav)}
                title={item.title}
                des={item.des}
                image={item.image}
              />
            )}
            {RenderIf(
              !item.type,
              <>
                <Posts title={item.title} date={item.date} image={item.image} />
              </>
            )}
          </View>
        )}
      />
    </ScreenVariant>
  );
}
export default PatientHome;
