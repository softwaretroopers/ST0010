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
      <View style={styles.screenTop}>
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
        <View style={styles.button}>
          <Button
            icon="exit-to-app"
            mode="contained"
            onPress={() => navigation.navigate("PatientInvoiceBill")}
          >
            Pay
          </Button>
        </View>
      </View>
    </ScreenVariant>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 5,
    width: "30%",
    height: "8%",
    alignSelf: "center",
  },
  BottomText: {
    fontWeight: "bold",
    marginBottom: 12,
  },
  BottomItem: {
    marginBottom: 12,
  },
  containerBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    borderBottomWidth: 2,
    borderColor: colors.lightGrey,
  },
  containerMiddle: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: colors.patientPrimary,
    flexDirection: "row",
    marginHorizontal: 10,
    padding: 15,
    backgroundColor: colors.whitesmoke,
    justifyContent: "space-around",
  },
  containerMiddleText: {
    justifyContent: "center",
  },
  heading: {
    backgroundColor: colors.patientPrimary,
    alignItems: "center",
  },
  headText: {
    fontSize: 25,
    fontWeight: "bold",
    color: colors.white,
  },
  text: {
    margin: "2%",
    backgroundColor: colors.patientPrimary,
    color: colors.white,
  },
  image: {
    height: 180,
    width: 150,
  },
});
export default PatientInvoice;
