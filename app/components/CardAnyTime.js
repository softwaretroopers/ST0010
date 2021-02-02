import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Avatar, Card, Title, Paragraph, Caption } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "./AppText";
import colors from "../configs/colors";
import Icon from "./Icon";
import AppButton from "../components/AppButton";
import ProfileCard from "../components/ProfileCard";

function CardAnyTime({
  title,
  priceAudio,
  priceVideo,
  image,
  language,
  profession,
  education,
  university,
}) {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const [secondModalVisible, setSecondModalVisible] = useState(false);
  return (
    <>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.screen}>
          <ProfileCard
            image={image}
            Iconclose={
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <Icon name="cross" backgroundColor={colors.black}></Icon>
              </TouchableOpacity>
            }
            name={title}
            profession={profession}
            education={education}
            university={university}
            language={language}
            Callprice={priceAudio}
            Videoprice={priceVideo}
            IconButton={
              <View style={styles.buttonContainer}>
                <AppButton
                  title="Book Now"
                  color="black"
                  onPress={() => {
                    setSecondModalVisible(true);
                  }}
                />
              </View>
            }
          />
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
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <View>
          <Card style={{ margin: 10 }}>
            <Card.Content
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <Avatar.Image style={{ marging: 10 }} source={image} />
              <Title>{title}</Title>
              <Caption>{profession}</Caption>
              <View flexDirection="row" style={{ marginTop: "2%" }}>
                <View flexDirection="row" style={{ marginRight: "3%" }}>
                  <Avatar.Icon size={20} icon="microphone" />
                  <Paragraph style={{ marginLeft: 3 }}>{priceAudio}</Paragraph>
                </View>
                <View flexDirection="row" style={{ marginLeft: "3%" }}>
                  <Avatar.Icon size={20} icon="video" />
                  <Paragraph style={{ marginLeft: 3 }}>{priceVideo}</Paragraph>
                </View>
              </View>
            </Card.Content>
          </Card>
        </View>
      </TouchableOpacity>
    </>
  );
}
const styles = StyleSheet.create({
  buttonContainer: {
    width: "100%",
    height: 50,
    marginTop: -20,
  },
  card: {
    borderRadius: 18,
    height: 160,
    width: 118,
    margin: 7.5,
    flex: 1,
    backgroundColor: colors.white,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  title: {
    color: colors.black,
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 5,
    marginBottom: 3,
  },
  priceContainer: {
    flexDirection: "column",
    backgroundColor: colors.lightgray,
    marginTop: "88%",
    opacity: 0.7,
  },
  pricesText: {
    marginTop: -8,
    paddingLeft: 10,
  },
  textPrice: {
    color: colors.black,
    fontSize: 12,
    fontWeight: "200",
  },
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 18,
    alignContent: "center",
    flexDirection: "row",
    marginTop: 22,
  },
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

export default CardAnyTime;
