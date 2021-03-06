import React from "react";
import { View, StyleSheet, FlatList, StatusBar } from "react-native";
import { Headline, Button } from "react-native-paper";

import AppText from "../../components/AppText";
import colors from "../../configs/colors";

const DocProfile = [
  {
    id: 1,
    name: "Nithya Hansana",
    address: "607/1/c Ihala Biyanwila , Kadawatha ",
    date: "02/12/2020",
    InvoiceNumber: "000001",
    doctorFee: "Rs.1200",
    mobileFee: "Rs.300",
    Total: "Rs.1500",
  },
];

function PatientInvoiceBill({ navigation }) {
  return (
    <View>
      <StatusBar backgroundColor={colors.themeDark} barStyle="light-content" />
      <View style={{ backgroundColor: colors.themeDark, padding: "2%" }}>
        <Headline
          style={{
            color: colors.white,
            fontWeight: "bold",
            alignSelf: "center",
          }}
        >
          Invoice
        </Headline>
      </View>
      <View style={styles.screenTop}>
        <FlatList
          data={DocProfile}
          keyExtractor={(listing) => listing.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.containerMiddle}>
              <View style={styles.containerTop}>
                <AppText style={styles.textHeading}>Invoice Number:</AppText>
                <AppText style={styles.text}>{item.InvoiceNumber}</AppText>
              </View>
              <AppText style={styles.textHeading}>Bill To:</AppText>
              <AppText style={styles.text}>{item.name}</AppText>
              <AppText style={styles.text}>{item.address}</AppText>
              <AppText style={styles.text}>{item.date}</AppText>
            </View>
          )}
        />

        <FlatList
          data={DocProfile}
          keyExtractor={(listing) => listing.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.containerBottom}>
              <View style={styles.containerBottomHeading}>
                <AppText style={styles.textBottom}>Doctor Fee </AppText>
                <AppText style={styles.textBottom}>Mobile Fee</AppText>
                <AppText style={styles.textHeading}>Total</AppText>
              </View>

              <View style={styles.containerBottomDetails}>
                <AppText style={styles.textBottom}>{item.doctorFee} </AppText>
                <AppText style={styles.textBottom}>{item.mobileFee}</AppText>
                <AppText style={styles.textHeading}>{item.Total}</AppText>
              </View>
            </View>
          )}
        />
        <View style={styles.button}>
          <Button
            style={{ backgroundColor: colors.themeDark, padding: "5%" }}
            icon="check-circle"
            mode="contained"
            onPress={() => navigation.navigate("Appointments")}
          >
            Done
          </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 5,
    width: "30%",
    height: "8%",
    alignSelf: "center",
  },
  containerBottom: {
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 3,
    borderColor: colors.medium,
  },
  containerMiddle: {
    padding: 15,
    borderBottomWidth: 3,
    borderColor: colors.medium,
  },
  containerTop: {
    marginBottom: 10,
  },
  headText: {
    fontSize: 25,
    fontWeight: "bold",
    color: colors.white,
  },
  textHeading: {
    color: colors.themeDark,
    fontWeight: "bold",
    fontSize: 20,
  },
  textBottom: {
    fontWeight: "bold",
    color: colors.themeDark,
  },
  screenTop: {
    padding: 15,
  },
});
export default PatientInvoiceBill;
