import React from "react";
import { View, FlatList, StyleSheet } from "react-native";

import CardAppointments from "../../components/CardAppointments";
import colors from "../../configs/colors";

const listing = [
  {
    id: 1,
    name: "Dr.Anonymous",
    date: "2020/12/10",
    time: "13:15 - 13:30",
    image: require("../../assets/doc1.jpg"),
    category: "Neurologist",
    type: "videocam",
  },
  {
    id: 2,
    name: "Dr.Anonymous",
    date: "2020/12/10",
    time: "23:15 - 23:30",
    image: require("../../assets/doc1.jpg"),
    category: "Neurologist",
  },
];

function AppointmentsUpcoming(props) {
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

export default AppointmentsUpcoming;
