import React from "react";
import { View, FlatList } from "react-native";

import CardAnyTime from "../../components/CardAnyTime";
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
    slmc: "165055",
    hospital: "Nawaloka Hospital",
    status: true,
  },
  {
    id: 2,
    image: require("../../assets/doc1.jpg"),
    title: "Dr.Anonymous 2",
    priceAudio: "1300",
    priceVideo: "1500",
    language: "Sinhala",
    profession: "Psychologist",
    slmc: "165056",
    hospital: "Browns Hospital",
    status: false,
  },
  {
    id: 3,
    image: require("../../assets/categoryDoc3.png"),
    title: "Dr.Anonymous 3",
    priceAudio: "1300",
    priceVideo: "1500",
    language: "Sinhala",
    profession: "Psychologist",
    slmc: "165057",
    hospital: "Hemas Hospital",
    status: true,
  },
  {
    id: 4,
    image: require("../../assets/categoryDoc4.png"),
    title: "Dr.Anonymous 4",
    priceAudio: "1300",
    priceVideo: "1500",
    language: "Sinhala",
    profession: "Psychologist",
    slmc: "165058",
    hospital: "Colombo General Hospital",
    status: true,
  },
];

function AnyTimeDoctor(props) {
  return (
    <Screen>
      <View>
        <FlatList
          numColumns={2}
          data={FlatListData}
          renderItem={({ item }) => (
            <CardAnyTime
              title={item.title}
              image={item.image}
              priceAudio={"Rs." + item.priceAudio}
              priceVideo={"Rs." + item.priceVideo}
              language={item.language}
              profession={item.profession}
              slmc={item.slmc}
              hospital={item.hospital}
              status={item.status}
            />
          )}
          keyExtractor={(item, index) => String(index)}
        />
      </View>
    </Screen>
  );
}

export default AnyTimeDoctor;
