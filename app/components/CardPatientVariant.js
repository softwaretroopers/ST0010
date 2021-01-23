import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Avatar,
  Divider,
  Card,
  Title,
  Paragraph,
  Caption,
} from "react-native-paper";

import colors from "../configs/colors";
import Icon from "./Icon";
import AppButton from "../components/AppButton";
import ProfileCard from "../components/ProfileCard";

function CardPatientVariant({
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
                    setModalVisible(!modalVisible);
                    navigation.navigate("PatientDateTimePicker");
                  }}
                />
              </View>
            }
          />
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
});

export default CardPatientVariant;
