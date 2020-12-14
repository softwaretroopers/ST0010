import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, TouchableOpacity, Text, Modal } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../configs/colors";
import AppText from "./AppText";
import Icon from "./Icon";

function TimeSlot({
  color,
  primaryTimeSlot,
  secondaryTimeSlotFirst,
  secondaryTimeSlotSecond,
  secondaryTimeSlotThird,
  secondaryTimeSlotFourth,
  colorFirst,
  colorSecond,
  colorThird,
  colorFourth,
}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [secondModalVisible, setSecondModalVisible] = useState(false);
  const navigation = useNavigation();
  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity
              style={{
                backgroundColor: colors[colorFirst],
                borderRadius: 10,
                padding: 10,
                margin: 10,
              }}
              onPress={() => {
                setSecondModalVisible(true);
              }}
            >
              <Text style={styles.modalText}>{secondaryTimeSlotFirst}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: colors[colorSecond],
                borderRadius: 10,
                padding: 10,
                margin: 10,
              }}
              onPress={() => {
                setSecondModalVisible(true);
              }}
            >
              <Text style={styles.modalText}>{secondaryTimeSlotSecond}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: colors[colorThird],
                borderRadius: 10,
                padding: 10,
                margin: 10,
              }}
              onPress={() => {
                setSecondModalVisible(true);
              }}
            >
              <Text style={styles.modalText}>{secondaryTimeSlotThird}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: colors[colorFourth],
                borderRadius: 10,
                padding: 10,
                margin: 10,
              }}
              onPress={() => {
                setSecondModalVisible(true);
              }}
            >
              <Text style={styles.modalText}>{secondaryTimeSlotFourth}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                marginTop: 10,
              }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Icon name="cross" backgroundColor={colors.black}></Icon>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={secondModalVisible}
      >
        <View style={styles.bottomView}>
          <View style={styles.secondModalView}>
            <View
              style={{
                flexDirection: "row",
                padding: 20,
              }}
            >
              <TouchableOpacity
                style={styles.callButton}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  setSecondModalVisible(!secondModalVisible);
                  navigation.navigate("PatientInvoice");
                }}
              >
                <MaterialCommunityIcons
                  name="microphone"
                  size={26}
                  style={{
                    color: colors.black,
                    marginRight: 5,
                  }}
                />
                <AppText
                  style={{
                    fontWeight: "bold",
                    color: colors.black,
                  }}
                >
                  Audio Call
                </AppText>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.callButton}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  setSecondModalVisible(!secondModalVisible);
                  navigation.navigate("PatientInvoice");
                }}
              >
                <MaterialCommunityIcons
                  name="video"
                  size={26}
                  style={{
                    color: colors.black,
                    marginRight: 5,
                  }}
                />
                <AppText
                  style={{
                    color: colors.black,
                    fontWeight: "bold",
                  }}
                >
                  Video Call
                </AppText>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={{
                padding: 10,
                alignSelf: "flex-end",
                position: "absolute",
              }}
              onPress={() => {
                setSecondModalVisible(!secondModalVisible);
              }}
            >
              <Icon name="cross"></Icon>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        style={{
          backgroundColor: colors[color],
          borderRadius: 15,
          padding: 10,
          elevation: 2,
        }}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text style={styles.textStyle}>{primaryTimeSlot}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    width: "100%",
    marginVertical: 10,
  },
  text: {
    paddingHorizontal: "10%",
    color: colors.white,
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 20,
    alignSelf: "center",
    marginVertical: 8,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderColor: colors.medium,
    borderWidth: 1,
    borderRadius: 15,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
  },
  modalText: {
    textAlign: "center",
    color: colors.white,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
  },
  openButton: {
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },
  bottomView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "stretch",
  },
  secondModalView: {
    marginTop: 10,
    backgroundColor: colors.patientPrimary,
    borderColor: colors.medium,
    borderWidth: 1,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  callButton: {
    backgroundColor: colors.white,
    padding: "8%",
    margin: "10%",
    borderRadius: 15,
    alignItems: "center",
  },
});

export default TimeSlot;
