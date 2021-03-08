import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import { Headline, FAB } from "react-native-paper";

import Card from "../../components/Card";
import Posts from "../../components/Posts";
import RenderIf from "../../components/RenderIf";
import ScreenVariant from "../../components/ScreenVariant";
import colors from "../../configs/colors";

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
              <>
                <View
                  style={{ backgroundColor: colors.white, marginBottom: "2%" }}
                >
                  <Headline
                    style={{
                      alignSelf: "center",
                      fontWeight: "bold",
                      color: colors.patientPrimary,
                    }}
                  >
                    NewsFeed
                  </Headline>
                </View>

                <FlatList
                  data={posts}
                  keyExtractor={(post) => post.id.toString()}
                  renderItem={({ item }) => (
                    <Posts
                      title={item.title}
                      date={item.date}
                      image={item.image}
                    />
                  )}
                />
              </>
            )}
          </>
        )}
      />
      <FAB style={styles.fab} icon="chat" />
    </ScreenVariant>
  );
}

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: colors.patientPrimary,
  },
});

export default PatientHome;
