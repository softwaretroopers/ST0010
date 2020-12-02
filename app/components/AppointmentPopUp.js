import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Modal } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../configs/colors";
import AppText from "./AppText";
import Icon from "./Icon";

function AppointmentPopUp(props) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.bottomView}>
          <View style={styles.secondModalView}>
            <AppText
              style={{
                fontWeight: "bold",
                color: colors.white,
                position: "absolute",
                padding: 10,
              }}
            >
              On Going
            </AppText>
            <TouchableOpacity
              style={{
                padding: 10,
                alignSelf: "flex-end",
                position: "absolute",
              }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Icon name="cross"></Icon>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        style={{
          backgroundColor: colors.yes,
          borderRadius: 10,
          padding: 10,
          margin: 10,
        }}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text style={styles.modalText}>Button</Text>
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
});

export default AppointmentPopUp;
