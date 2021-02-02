import React from "react";
import { View, FlatList, StyleSheet } from "react-native";

import CardPatientVariant from "../../components/CardPatientVariant";
import Screen from "../../components/Screen";

const FlatListData = [
  {
    id: 1,
    image: require("../../assets/categoryDoc1.png"),
    title: "Dr.Anonymous 1",
    priceAudio: "1300",
    priceVideo: "1500",
    language: "Sinhala",
    profession: "Psychologist",
    education: "Bsc",
    university: "Colombo",
  },
  {
    id: 2,
    image: require("../../assets/categoryDoc2.png"),
    title: "Dr.Anonymous 2",
    priceAudio: "1300",
    priceVideo: "1500",
    language: "Sinhala",
    profession: "Psychologist",
    education: "Bsc",
    university: "Colombo",
  },
  {
    id: 3,
    image: require("../../assets/categoryDoc3.png"),
    title: "Dr.Anonymous 3",
    priceAudio: "1300",
    priceVideo: "1500",
    language: "Sinhala",
    profession: "Psychologist",
    education: "Bsc",
    university: "Colombo",
  },
  {
    id: 4,
    image: require("../../assets/categoryDoc4.png"),
    title: "Dr.Anonymous 4",
    priceAudio: "1300",
    priceVideo: "1500",
    language: "Sinhala",
    profession: "Psychologist",
    education: "Bsc",
    university: "Colombo",
  },
];

function PatientCategorySpecific(props) {
  return (
    <Screen>
      <View style={styles.topDetails}>
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
              education={item.education}
              university={item.university}
            />
          )}
          keyExtractor={(item, index) => String(index)}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default PatientCategorySpecific;
