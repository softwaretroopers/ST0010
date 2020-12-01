import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Modal } from "react-native";

import colors from "../configs/colors";

function TimeSlot({
  color,
  primaryTimeSlot,
  secondaryTimeSlotFirst,
  secondaryTimeSlotSecond,
  secondaryTimeSlotThird,
  secondaryTimeSlotFourth,
}) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity
              style={{
                backgroundColor: colors.medium,
                borderRadius: 10,
                padding: 10,
                margin: 10,
              }}
            >
              <Text style={styles.modalText}>{secondaryTimeSlotFirst}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: colors.no,
                borderRadius: 10,
                padding: 10,
                margin: 10,
              }}
            >
              <Text style={styles.modalText}>{secondaryTimeSlotSecond}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: colors.yes,
                borderRadius: 10,
                padding: 10,
                margin: 10,
              }}
            >
              <Text style={styles.modalText}>{secondaryTimeSlotThird}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: colors.yes,
                borderRadius: 10,
                padding: 10,
                margin: 10,
              }}
            >
              <Text style={styles.modalText}>{secondaryTimeSlotFourth}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ ...styles.openButton, backgroundColor: colors.black }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Close</Text>
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
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
  },
  timeView: {
    backgroundColor: "red",
    padding: "3%",
    borderRadius: 15,
  },
  openButton: {
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },
});

export default TimeSlot;
