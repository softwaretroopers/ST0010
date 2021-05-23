import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Button, Text, Chip } from "react-native-paper";

import ProfileCardListItem from "../../components/ProfileCardListItem";
import ScreenVariant from "../../components/ScreenVariant";
import colors from "../../configs/colors";

const DocProfile = [
  {
    id: 1,
    image: require("../../assets/doc.png"),
    name: "Dr. Anonymous",
    date: "02/12/2020",
    time: "13:00 - 13:15",
    doctorFee: "Rs.1200",
    mobileFee: "Rs.300",
    Total: "Rs.1500",
  },
];

function PatientInvoice({ navigation }) {
  return (
    <ScreenVariant>
      <View>
        <FlatList
          data={DocProfile}
          keyExtractor={(listing) => listing.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.containerMiddle}>
              <ProfileCardListItem style={styles.image} image={item.image} />
              <View style={styles.containerMiddleText}>
                <Chip
                  selectedColor={colors.white}
                  style={styles.text}
                  icon="doctor"
                >
                  {item.name}
                </Chip>

                <Chip
                  selectedColor={colors.white}
                  style={styles.text}
                  icon="calendar"
                >
                  {item.date}
                </Chip>

                <Chip
                  selectedColor={colors.white}
                  style={styles.text}
                  icon="clock"
                >
                  {item.time}
                </Chip>
              </View>
            </View>
          )}
        />

        <FlatList
          data={DocProfile}
          keyExtractor={(listing) => listing.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.containerBottom}>
              <View style={styles.containerBottomHeading}>
                <Text style={styles.BottomText}>Doctor Fee </Text>
                <Text style={styles.BottomText}>Mobile Fee</Text>
                <Text style={styles.BottomText}>Total</Text>
              </View>

              <View style={styles.containerBottomDetails}>
                <Text style={styles.BottomItem}>{item.doctorFee} </Text>
                <Text style={styles.BottomItem}>{item.mobileFee}</Text>
                <Text style={styles.BottomItem}>{item.Total}</Text>
              </View>
            </View>
          )}
        />
        <Button
          style={{
            width: "30%",
            alignSelf: "center",
            padding: "1%",
            backgroundColor: colors.themeDark,
          }}
          icon="exit-to-app"
          mode="contained"
          onPress={() => navigation.navigate("PatientInvoiceBill")}
        >
          Pay
        </Button>
      </View>
    </ScreenVariant>
  );
}

const styles = StyleSheet.create({
  BottomText: {
    fontWeight: "bold",
    marginBottom: 12,
    color: colors.themeDark,
  },
  BottomItem: {
    marginBottom: 12,
    color: colors.themeDark,
  },
  containerBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  containerMiddle: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: colors.themeDark,
    flexDirection: "row",
    marginHorizontal: 10,
    padding: 15,
    backgroundColor: colors.white,
    justifyContent: "space-around",
  },
  containerMiddleText: {
    justifyContent: "center",
  },
  heading: {
    backgroundColor: colors.themeDark,
    alignItems: "center",
  },
  headText: {
    fontSize: 25,
    fontWeight: "bold",
    color: colors.white,
  },
  text: {
    margin: "2%",
    backgroundColor: colors.themeDark,
    color: colors.white,
  },
  image: {
    height: 180,
    width: 150,
  },
});
export default PatientInvoice;
