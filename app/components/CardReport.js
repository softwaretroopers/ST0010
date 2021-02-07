import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Avatar,
  Card,
  Title,
  Paragraph,
  Caption,
  Button,
} from "react-native-paper";

import colors from "../configs/colors";
import Icon from "./Icon";
import ProfileCardVariant from "./ProfileCardVariant";

function CardReport({
  title,
  image,
  language,
  profession,
  education,
  university,
  price,
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
            price={price}
            education={education}
            university={university}
            language={language}
            IconButton={
              <Button
                style={{
                  backgroundColor: colors.patientPrimary,
                  padding: "2%",
                }}
                icon="check-circle"
                mode="contained"
                onPress={() => {
                  setModalVisible(!modalVisible);
                  navigation.navigate("PatientInvoice");
                }}
              >
                Book Now
              </Button>
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
          <Card
            style={{
              margin: 10,
              paddingHorizontal: "18%",
              backgroundColor: colors.whitesmoke,
            }}
          >
            <Card.Content
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <Avatar.Image size={100} style={{ marging: 10 }} source={image} />
              <Title>{title}</Title>
              <Caption>{profession}</Caption>
              <View flexDirection="row" style={{ marginTop: "2%" }}>
                <Avatar.Icon
                  style={{ backgroundColor: colors.patientPrimary }}
                  size={20}
                  icon="chat"
                />
                <Paragraph style={{ marginLeft: 3 }}>{price}</Paragraph>
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

export default CardReport;
