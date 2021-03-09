import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Modal,
} from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Button, IconButton } from "react-native-paper";
import { Avatar, Card, Title, Paragraph, Caption } from "react-native-paper";
import colors from "../configs/colors";
import AppText from "./AppText";
import Icon from "./Icon";
import ProfileCardListItem from "./ProfileCardListItem";
import AppButton from "../components/AppButton";
import ProfileCard from "../components/ProfileCard";
import ProfileCardVariant from "./ProfileCardVariant";

function CardPatient({
  title,
  priceAudio,
  priceVideo,
  image,
  language,
  profession,
  slmc,
  hospital,
}) {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const [secondModalVisible, setSecondModalVisible] = useState(false);
  return (
    <>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.screen}>
          <ProfileCardVariant
            image={image}
            Iconclose={
              <IconButton
                icon="close-circle"
                color={colors.patientPrimary}
                size={30}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              />
            }
            name={title}
            profession={profession}
            slmc={slmc}
            hospital={hospital}
            language={language}
            Callprice={priceAudio}
            Videoprice={priceVideo}
            IconButton={
              <Button
                icon="check-circle"
                mode="contained"
                onPress={() => {
                  setSecondModalVisible(true);
                }}
              >
                Book Now
              </Button>
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
                padding: "10%",
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
                <Title>Audio Call</Title>
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
                <Title>Video Call</Title>
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
        <View style={styles.card}>
          <ImageBackground style={styles.image} source={image}>
            <View style={styles.detailsContainer}>
              <View style={styles.priceContainer}>
                <AppText style={styles.title}>{title}</AppText>
                <ProfileCardListItem
                  style={styles.pricesText}
                  title={
                    <AppText style={styles.textPrice}>{priceAudio}</AppText>
                  }
                  IconComponent={
                    <Icon
                      IconFamily={MaterialIcons}
                      name={"keyboard-voice"}
                      size={15}
                      color="white"
                    />
                  }
                />
                <ProfileCardListItem
                  style={styles.pricesText}
                  title={
                    <AppText style={styles.textPrice}>{priceVideo}</AppText>
                  }
                  IconComponent={
                    <Icon
                      IconFamily={MaterialIcons}
                      name={"videocam"}
                      size={15}
                      color="white"
                    />
                  }
                />
              </View>
            </View>
          </ImageBackground>
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
  secondModalView: {
    marginTop: 10,
    backgroundColor: colors.patientPrimary,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
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
  modalText: {
    textAlign: "center",
    color: colors.white,
    fontWeight: "bold",
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
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
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

export default CardPatient;
