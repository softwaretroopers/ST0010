import React from "react";
import { View, FlatList } from "react-native";

import CardReport from "../../components/CardReport";
import Screen from "../../components/Screen";

const FlatListData = [
  {
    id: 1,
    image: require("../../assets/categoryDoc1.png"),
    title: "Dr.Anonymous 1",
    language: "Sinhala",
    profession: "Psychologist",
    slmc: "165103",
    hospital: "Durdans Hospital",
    price: "Rs.250",
  },
  {
    id: 2,
    image: require("../../assets/categoryDoc2.png"),
    title: "Dr.Anonymous 2",
    language: "Sinhala",
    profession: "Psychologist",
    slmc: "165103",
    hospital: "Durdans Hospital",
    price: "Rs.350",
  },
  {
    id: 3,
    image: require("../../assets/categoryDoc3.png"),
    title: "Dr.Anonymous 3",
    language: "Sinhala",
    profession: "Psychologist",
    slmc: "165103",
    hospital: "Durdans Hospital",
    price: "Rs.450",
  },
  {
    id: 4,
    image: require("../../assets/categoryDoc4.png"),
    title: "Dr.Anonymous 4",
    language: "Sinhala",
    profession: "Psychologist",
    slmc: "165103",
    hospital: "Durdans Hospital",
    price: "Rs.150",
  },
];

function ReportReading(props) {
  return (
    <Screen>
      <View>
        <FlatList
          data={FlatListData}
          renderItem={({ item }) => (
            <CardReport
              title={item.title}
              image={item.image}
              language={item.language}
              profession={item.profession}
              slmc={item.slmc}
              hospital={item.hospital}
              price={item.price}
            />
          )}
          keyExtractor={(item, index) => String(index)}
        />
      </View>
    </Screen>
  );
}
export default ReportReading;
