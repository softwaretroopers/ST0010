import React, { useState } from "react";
import { View, StyleSheet, TouchableNativeFeedback, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Avatar,
  Card,
  Title,
  Paragraph,
  Caption,
  Button,
  IconButton,
} from "react-native-paper";

import colors from "../configs/colors";
import ProfileCardVariant from "./ProfileCardVariant";

function CardPatientVariant({
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

  return (
    <>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.screen}>
          <ProfileCardVariant
            image={image}
            Iconclose={
              <IconButton
                icon="close-circle"
                color={colors.themeDark}
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
                style={{
                  backgroundColor: colors.themeDark,
                  padding: "3%",
                }}
                icon="check-circle"
                mode="contained"
                onPress={() => {
                  setModalVisible(!modalVisible);
                  navigation.navigate("PatientDateTimePicker");
                }}
              >
                Book Now
              </Button>
            }
          />
        </View>
      </Modal>

      <TouchableNativeFeedback
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <View style={{ backgroundColor: colors.white, padding: "2%" }}>
          <Card
            style={{
              backgroundColor: colors.white,
              elevation: 5,
            }}
          >
            <Card.Content
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <Avatar.Image size={100} style={{ margin: 10 }} source={image} />
              <Title>{title}</Title>
              <Caption>{profession}</Caption>
              <View flexDirection="row" style={{ marginTop: "2%" }}>
                <View flexDirection="row" style={{ marginRight: "3%" }}>
                  <Avatar.Icon
                    size={20}
                    icon="microphone"
                    style={{ backgroundColor: colors.themeDark }}
                  />
                  <Paragraph style={{ marginLeft: 3 }}>{priceAudio}</Paragraph>
                </View>
                <View flexDirection="row" style={{ marginLeft: "3%" }}>
                  <Avatar.Icon
                    size={20}
                    icon="video"
                    style={{ backgroundColor: colors.themeDark }}
                  />
                  <Paragraph style={{ marginLeft: 3 }}>{priceVideo}</Paragraph>
                </View>
              </View>
            </Card.Content>
          </Card>
        </View>
      </TouchableNativeFeedback>
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
    color: colors.themeDark,
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
    color: colors.themeDark,
    fontSize: 12,
    fontWeight: "200",
  },
  screen: {
    backgroundColor: "rgba(100,100,100, 0.6)",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 18,
    alignContent: "center",
    flexDirection: "row",
  },
});

export default CardPatientVariant;
