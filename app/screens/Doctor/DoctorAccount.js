import React from "react";
import { View, StyleSheet } from "react-native";
import {
  FAB,
  Avatar,
  Title,
  Subheading,
  Caption,
  Text,
  Button,
} from "react-native-paper";
import * as Animatable from "react-native-animatable";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../configs/colors";
import ScreenVarient from "../../components/ScreenVarient";

function DoctorAccount({ navigation, ...otherProps }) {
  return (
    <ScreenVarient>
      <View style={styles.screen}>
        <Animatable.View
          animation="bounceInDown"
          duration={1500}
          style={styles.accounttop}
        >
          <FAB
            onPress={() => navigation.navigate("DoctorAccInfoEdit")}
            style={styles.fab}
            small
            icon="pen"
          />
          <Avatar.Image size={100} source={require("../../assets/doc.png")} />
          <Title style={{ color: colors.white }}>Dr. Anonymous</Title>

          <Subheading style={{ color: colors.white, marginHorizontal: "2%" }}>
            071 400 9020
          </Subheading>
          <View flexDirection="row">
            <View flexDirection="row" style={styles.details}>
              <Text style={{ fontWeight: "bold", marginLeft: 5 }}>
                Psychologist
              </Text>
            </View>
            <View flexDirection="row" style={styles.details}>
              <Text style={{ fontWeight: "bold", marginLeft: 5 }}>Sinhala</Text>
            </View>
          </View>
          <View flexDirection="row">
            <View flexDirection="row" style={styles.details}>
              <Text style={{ fontWeight: "bold", marginLeft: 5 }}>
                Bachelors
              </Text>
            </View>
            <View flexDirection="row" style={styles.details}>
              <Text style={{ fontWeight: "bold", marginLeft: 5 }}>
                Colombo University
              </Text>
            </View>
          </View>
        </Animatable.View>
        <Animatable.View
          animation="bounceInDown"
          duration={1500}
          style={styles.accounttop}
        >
          <Title style={{ color: colors.white }}>Prices</Title>
          <View flexDirection="row" style={{ margin: "2%" }}>
            <View flexDirection="row" style={styles.price}>
              <MaterialCommunityIcons
                name="microphone"
                size={16}
                color="black"
              />
              <Text style={{ fontWeight: "bold", marginLeft: 5 }}>Rs.1000</Text>
            </View>
            <View flexDirection="row" style={styles.price}>
              <MaterialCommunityIcons name="video" size={16} color="black" />
              <Text style={{ fontWeight: "bold", marginLeft: 5 }}>Rs.1200</Text>
            </View>
          </View>
          <Button color={colors.white} icon="square-edit-outline">
            Change
          </Button>
        </Animatable.View>
      </View>
      <Animatable.View animation="bounceInDown" duration={1500}>
        <Button
          style={{ width: "50%", alignSelf: "center" }}
          color={colors.black}
          mode="outlined"
          icon="logout"
          onPress={() => navigation.popToTop()}
        >
          Log Out
        </Button>
      </Animatable.View>
    </ScreenVarient>
  );
}

const styles = StyleSheet.create({
  accounttop: {
    backgroundColor: colors.doctorPrimary,
    borderRadius: 20,
    margin: "2%",
    padding: "2%",
    alignItems: "center",
  },
  accountMiddle: {
    padding: 20,
  },
  accountMiddleDetail: {
    marginTop: 20,
    marginLeft: 50,
    marginRight: 50,
    borderBottomWidth: 1,
    fontWeight: "bold",
  },
  accountBottom: {
    marginTop: 30,
    marginLeft: 20,
    fontWeight: "bold",
  },
  buttonContainer: {
    width: "18%",
    height: 30,
    marginLeft: "40%",
  },
  title: {
    marginTop: 20,
    marginLeft: 10,
  },
  fab: {
    position: "absolute",
    right: 10,
    top: 10,
    backgroundColor: "white",
  },
  price: {
    backgroundColor: colors.white,
    padding: "3%",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: "2%",
  },
  details: {
    backgroundColor: colors.white,
    padding: "3%",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    margin: "2%",
    width: "40%",
  },
});

export default DoctorAccount;
