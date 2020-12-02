import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Modal,
  Switch,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../configs/colors";
import AppText from "./AppText";
import Icon from "./Icon";
import AppButton from "./AppButton";
import AppButtonVariant from "./AppButtonVariant";

function TimeSlot({
  color,
  primaryTimeSlot,
  secondaryTimeSlotFirst,
  secondaryTimeSlotSecond,
  secondaryTimeSlotThird,
  secondaryTimeSlotFourth,
}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [secondModalVisible, setSecondModalVisible] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
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
              onPress={() => {
                setSecondModalVisible(true);
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
              onPress={() => {
                setSecondModalVisible(true);
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
              onPress={() => {
                setSecondModalVisible(true);
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
              <MaterialCommunityIcons
                name="microphone"
                size={26}
                style={{
                  color: colors.white,
                  marginRight: 5,
                }}
              />
              <AppText
                style={{
                  fontWeight: "bold",
                  color: colors.white,
                }}
              >
                Audio Call
              </AppText>
              <Switch
                style={{
                  marginHorizontal: 10,
                }}
                trackColor={{ false: colors.medium, true: colors.lightGrey }}
                thumbColor={isEnabled ? colors.yes : colors.no}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
              <MaterialCommunityIcons
                name="video"
                size={26}
                style={{
                  color: colors.white,
                  marginRight: 5,
                }}
              />
              <AppText
                style={{
                  color: colors.white,
                  fontWeight: "bold",
                }}
              >
                Video Call
              </AppText>
            </View>
            <AppButtonVariant title="submit" color="black"></AppButtonVariant>
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

export default TimeSlot;
