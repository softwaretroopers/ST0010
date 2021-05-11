import React from "react";
import { View, FlatList, StyleSheet, TouchableOpacity } from "react-native";

import colors from "../../configs/colors";
import AppText from "../../components/AppText";
import ScreenVariant from "../../components/ScreenVariant";
import AppSearchBar from "../../components/AppSearchBar";
import CardPatient from "../../components/CardPatient";

const FlatListData = [
  {
    categories: "Psychologist",
    doctors: [
      {
        id: 1,
        image: require("../../assets/categoryDoc1.png"),
        title: "Dr.Anonymous 1",
        priceAudio: "1300",
        priceVideo: "1500",
        language: "Sinhala",
        profession: "Doctor",
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
        profession: "Doctor",
        slmc: "165101",
        hospital: "Lessons Hospital",
      },
      {
        id: 3,
        image: require("../../assets/categoryDoc3.png"),
        title: "Dr.Anonymous 3",
        priceAudio: "1300",
        priceVideo: "1500",
        language: "Sinhala",
        profession: "Doctor",
        slmc: "165102",
        hospital: "Melta Hospital",
      },
      {
        id: 4,
        image: require("../../assets/categoryDoc4.png"),
        title: "Dr.Anonymous 4",
        priceAudio: "1300",
        priceVideo: "1500",
        language: "Sinhala",
        profession: "Doctor",
        slmc: "165103",
        hospital: "Durdans Hospital",
      },
    ],
  },
  {
    categories: "Cardiologist",
    doctors: [
      {
        id: 1,
        image: require("../../assets/categoryDoc1.png"),
        title: "Dr.Anonymous 5",
        priceAudio: "1300",
        priceVideo: "1500",
        language: "Sinhala",
        profession: "Doctor",
        slmc: "165100",
        hospital: "Nawaloka Hospital",
      },
      {
        id: 2,
        image: require("../../assets/categoryDoc2.png"),
        title: "Dr.Anonymous 6",
        priceAudio: "1300",
        priceVideo: "1500",
        language: "Sinhala",
        profession: "Doctor",
        slmc: "165101",
        hospital: "Lessons Hospital",
      },
      {
        id: 3,
        image: require("../../assets/categoryDoc3.png"),
        title: "Dr.Anonymous 7",
        priceAudio: "1300",
        priceVideo: "1500",
        language: "Sinhala",
        profession: "Doctor",
        slmc: "165102",
        hospital: "Melta Hospital",
      },
      {
        id: 4,
        image: require("../../assets/categoryDoc4.png"),
        title: "Dr.Anonymous 8",
        priceAudio: "1300",
        priceVideo: "1500",
        language: "Sinhala",
        profession: "Doctor",
        slmc: "165103",
        hospital: "Durdans Hospital",
      },
    ],
  },
  {
    categories: "Dentist",
    doctors: [
      {
        id: 1,
        image: require("../../assets/categoryDoc1.png"),
        title: "Dr.Anonymous 9",
        priceAudio: "1300",
        priceVideo: "1500",
        language: "Sinhala",
        profession: "Doctor",
        slmc: "165100",
        hospital: "Nawaloka Hospital",
      },
      {
        id: 2,
        image: require("../../assets/categoryDoc2.png"),
        title: "Dr.Anonymous 10",
        priceAudio: "1300",
        priceVideo: "1500",
        language: "Sinhala",
        profession: "Doctor",
        slmc: "165101",
        hospital: "Lessons Hospital",
      },
      {
        id: 3,
        image: require("../../assets/categoryDoc3.png"),
        title: "Dr.Anonymous 11",
        priceAudio: "1300",
        priceVideo: "1500",
        language: "Sinhala",
        profession: "Doctor",
        slmc: "165102",
        hospital: "Melta Hospital",
      },
      {
        id: 4,
        image: require("../../assets/categoryDoc4.png"),
        title: "Dr.Anonymous 12",
        priceAudio: "1300",
        priceVideo: "1500",
        language: "Sinhala",
        profession: "Doctor",
        slmc: "165103",
        hospital: "Durdans Hospital",
      },
    ],
  },
];

function PatientCategoryDetails({ navigation }) {
  return (
    <ScreenVariant>
      <AppSearchBar />
      <View style={styles.containerTop}>
        <FlatList
          data={FlatListData}
          renderItem={({ item }) => (
            <>
              <AppText style={styles.heading}>{item.categories}</AppText>
              <View style={styles.topDetails}>
                <FlatList
                  horizontal={true}
                  contentContainerStyle={{
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  data={item.doctors}
                  renderItem={({ item }) => (
                    <CardPatient
                      title={item.title}
                      image={item.image}
                      priceAudio={"Rs." + item.priceAudio}
                      priceVideo={"Rs." + item.priceVideo}
                      language={item.language}
                      profession={item.profession}
                      slmc={item.slmc}
                      hospital={item.hospital}
                    />
                  )}
                  keyExtractor={(item, index) => String(index)}
                />
              </View>
              <TouchableOpacity
                style={styles.viewAll}
                onPress={() => {
                  navigation.navigate("PatientCategorySpecific");
                }}
              >
                <AppText style={styles.viewText}>View All</AppText>
              </TouchableOpacity>
            </>
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
  heading: {
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: "5%",
    marginBottom: "2%",
  },
  topDetails: {
    backgroundColor: colors.themeDark,
    flexDirection: "row",
    padding: 10,
  },
  viewAll: {
    alignItems: "flex-end",
  },
  viewText: {
    fontWeight: "bold",
    color: colors.themeDark,
  },
  containerTop: {
    marginTop: "1%",
    paddingBottom: "17.5%",
  },
});

export default PatientCategoryDetails;
