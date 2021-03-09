import React from "react";
import { View, FlatList, StyleSheet, ScrollView } from "react-native";
import AppSearchBar from "../../components/AppSearchBar";

import CardPatientVariant from "../../components/CardPatientVariant";
import ScreenVariant from "../../components/ScreenVariant";
import colors from "../../configs/colors";

const FlatListData = [
  {
    id: 1,
    image: require("../../assets/categoryDoc1.png"),
    title: "Dr.Anonymous 1",
    priceAudio: "1300",
    priceVideo: "1500",
    language: "Sinhala",
    profession: "Psychologist",
    slmc: "165100",
    hospital: "Nawaloka Hospital",
  },
  {
    id: 2,
    image: require("../../assets/categoryDoc2.png"),
    title: "Dr.Anonymous 2",
    priceAudio: "1300",
    priceVideo: "1500",
    language: "Sinhala",
    profession: "Psychologist",
    slmc: "165100",
    hospital: "Nawaloka Hospital",
  },
  {
    id: 3,
    image: require("../../assets/categoryDoc3.png"),
    title: "Dr.Anonymous 3",
    priceAudio: "1300",
    priceVideo: "1500",
    language: "Sinhala",
    profession: "Psychologist",
    slmc: "165100",
    hospital: "Nawaloka Hospital",
  },
  {
    id: 4,
    image: require("../../assets/categoryDoc4.png"),
    title: "Dr.Anonymous 4",
    priceAudio: "1300",
    priceVideo: "1500",
    language: "Sinhala",
    profession: "Psychologist",
    slmc: "165100",
    hospital: "Nawaloka Hospital",
  },
];

function PatientCategorySpecific(props) {
  return (
    <ScreenVariant>
      <View>
        <AppSearchBar></AppSearchBar>
      </View>
      <View style={{ paddingBottom: "17.5%" }}>
        <FlatList
          data={FlatListData}
          renderItem={({ item }) => (
            <CardPatientVariant
              title={item.title}
              image={item.image}
              priceAudio={"LKR" + item.priceAudio}
              priceVideo={"LKR" + item.priceVideo}
              language={item.language}
              profession={item.profession}
              slmc={item.slmc}
              hospital={item.hospital}
            />
          )}
          keyExtractor={(item, index) => String(index)}
        />
      </View>
    </ScreenVariant>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default PatientCategorySpecific;
