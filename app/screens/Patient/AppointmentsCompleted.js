import React from "react";
import { View, FlatList, StyleSheet } from "react-native";

import CardAppointments from "../../components/CardAppointments";
import colors from "../../configs/colors";

const listing = [
  {
    id: 1,
    name: "Dr.Anonymous",
    date: "2021/01/10",
    time: "09:15 - 09:30",
    image: require("../../assets/doc1.jpg"),
    category: "Neurologist",
  },
  {
    id: 2,
    name: "Dr.Anonymous",
    date: "2021/01/10",
    time: "10:15 - 10:30",
    image: require("../../assets/doc1.jpg"),
    category: "Neurologist",
  },
  {
    id: 3,
    name: "Dr.Anonymous",
    date: "2021/01/10",
    time: "10:45 - 11:00",
    image: require("../../assets/doc1.jpg"),
    category: "Neurologist",
    type: "videocam",
  },
];

function AppointmentsCompleted(props) {
  return (
    <View style={styles.screen}>
      <FlatList
        data={listing}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <CardAppointments
            name={item.name}
            date={item.date}
            time={item.time}
            image={item.image}
            category={item.category}
            type={item.type}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.lightGrey,
    flex: 1,
  },
});

export default AppointmentsCompleted;
