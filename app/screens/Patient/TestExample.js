import React from "react";
import {
  View,
  FlatList,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  LogBox,
} from "react-native";

import colors from "../../configs/colors";
import AppText from "../../components/AppText";
import CardPatient from "../../components/CardPatient";
import ScreenVarient from "../../components/ScreenVarient";
import AppSearchBar from "../../components/AppSearchBar";

const FlatListData = [
  {
    categories: "Psychologist",
    doctors: [
      {
        id: 1,
        image: require("../../assets/doc.png"),
        title: "Dr.Anonymous 1",
        priceAudio: "1300",
        priceVideo: "1500",
        language: "Sinhala",
        profession: "Doctor",
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
        profession: "Doctor",
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
        profession: "Doctor",
        education: "Bsc",
        university: "Colombo",
      },
    ],
  },
  {
    categories: "Cardiologist",
    doctors: [
      {
        id: 1,
        image: require("../../assets/doc.png"),
        title: "Dr.Anonymous 4",
        priceAudio: "1300",
        priceVideo: "1500",
        language: "Sinhala",
        profession: "Doctor",
        education: "Bsc",
        university: "Colombo",
      },
      {
        id: 2,
        image: require("../../assets/categoryDoc2.png"),
        title: "Dr.Anonymous 5",
        priceAudio: "1300",
        priceVideo: "1500",
        language: "Sinhala",
        profession: "Doctor",
        education: "Bsc",
        university: "Colombo",
      },
      {
        id: 3,
        image: require("../../assets/categoryDoc3.png"),
        title: "Dr.Anonymous 6",
        priceAudio: "1300",
        priceVideo: "1500",
        language: "Sinhala",
        profession: "Doctor",
        education: "Bsc",
        university: "Colombo",
      },
    ],
  },
];

function TestExample({ navigation }) {
  return (
    <ScreenVarient>
      <AppSearchBar></AppSearchBar>
      <ScrollView style={styles.screen}>
        <View style={styles.containerTop}>
          <FlatList
            data={FlatListData}
            renderItem={({ item }) => (
              <>
                <AppText style={styles.heading}>{item.categories}</AppText>
                <View style={styles.topDetails}>
                  <FlatList
                    numColumns={3}
                    contentContainerStyle={{
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    data={item.doctors}
                    renderItem={({ item }) => (
                      <CardPatient
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
                    keyExtractor={(item) => item.id.toString()}
                  />
                </View>
                <TouchableOpacity style={styles.viewAll}>
                  <AppText style={styles.viewText}>View All</AppText>
                </TouchableOpacity>
              </>
            )}
            keyExtractor={(item, id) => id}
          />
        </View>
      </ScrollView>
    </ScreenVarient>
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
    backgroundColor: colors.patientPrimary,
    flexDirection: "row",
    padding: 10,
  },
  viewAll: {
    alignItems: "flex-end",
  },
  viewText: {
    fontWeight: "bold",
    color: colors.patientPrimary,
  },
});

export default TestExample;
