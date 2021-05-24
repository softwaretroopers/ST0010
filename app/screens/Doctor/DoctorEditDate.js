import React from "react";
import { View, FlatList } from "react-native";
import DateCard from "../../components/DateCard";
import Screen from "../../components/Screen";
import DatePicker from "../../components/DatePicker";
import ScreenVariant from "../../components/ScreenVariant";

const dateCards = [
  {
    date: "10/12/2020",
    day: "Today",
    firstTimeSlot: "03:00 PM - 04:00 PM",
    secondTimeSlot: "03:00 PM - 04:00 PM",
    thirdTimeSlot: "03:00 PM - 04:00 PM",
    fourthTimeSlot: "03:00 PM - 04:00 PM",
  },
  {
    date: "10/13/2020",
    day: "Tommorrow",
    firstTimeSlot: "03:00 PM - 04:00 PM",
    secondTimeSlot: "03:00 PM - 04:00 PM",
    thirdTimeSlot: "03:00 PM - 04:00 PM",
    fourthTimeSlot: "03:00 PM - 04:00 PM",
  },
  {
    date: "10/14/2020",
    day: "Day after Tommorrow",
    firstTimeSlot: "03:00 PM - 04:00 PM",
    secondTimeSlot: "03:00 PM - 04:00 PM",
    thirdTimeSlot: "03:00 PM - 04:00 PM",
    fourthTimeSlot: "03:00 PM - 04:00 PM",
  },
];

function DoctorEditDate(props) {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        ListHeaderComponent={() => (
          <View style={{ width: "80%", alignSelf: "center" }}>
            <DatePicker />
          </View>
        )}
        data={dateCards}
        keyExtractor={(dateCard) => dateCard.date.toString()}
        renderItem={({ item }) => (
          <DateCard
            date={item.date}
            day={item.day}
            firstTimeSlot={item.firstTimeSlot}
            secondTimeSlot={item.secondTimeSlot}
            thirdTimeSlot={item.thirdTimeSlot}
            fourthTimeSlot={item.fourthTimeSlot}
          />
        )}
      />
    </View>
  );
}

export default DoctorEditDate;
