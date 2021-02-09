import React from "react";
import { FlatList, View, Text } from "react-native";
import Carousel from "react-native-snap-carousel";

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
  },
];

const posts = [
  {
    id: 1,
    title: "UK coronavirus variant spreading 'rapidly' through US, study finds",
    image: require("../../assets/news1.jpg"),
    date: "Yesterday",
  },
  {
    id: 2,
    title: "South Africa halts AstraZeneca vaccine rollout over new variant",
    image: require("../../assets/news2.jpg"),
    date: "2 days ago",
  },
  {
    id: 3,
    title: "Two tests for all UK arrivals during quarantine",
    image: require("../../assets/news3.jpg"),
    date: "1 week ago",
  },
];

function PatientHome({ navigation }) {
  return (
    <ScreenVariant>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <>
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
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Carousel
                  layout={"default"}
                  data={posts}
                  sliderWidth={500}
                  itemWidth={325}
                  renderItem={({ item }) => (
                    <Posts
                      title={item.title}
                      date={item.date}
                      image={item.image}
                    />
                  )}
                />
              </View>
            )}
          </>
        )}
      />
    </ScreenVariant>
  );
}
export default PatientHome;
