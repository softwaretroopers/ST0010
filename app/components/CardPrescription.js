import React from "react";
import { View } from "react-native";
import { Avatar, Button, Card } from "react-native-paper";

import colors from "../configs/colors";

function CardPrescription({ docImage, reportImage, date, docName }) {
  const LeftContent = (props) => (
    <Avatar.Image {...props} size={50} source={docImage} />
  );
  return (
    <View style={{ margin: "2%" }}>
      <Card>
        <Card.Title title={docName} subtitle={date} left={LeftContent} />
        <Card.Cover source={reportImage} />
        <Card.Actions>
          <Button
            style={{
              backgroundColor: colors.patientPrimary,
              marginHorizontal: "2%",
            }}
            icon="chat"
            mode="contained"
          >
            Chat
          </Button>
          <Button
            style={{
              backgroundColor: colors.patientPrimary,
              marginHorizontal: "2%",
            }}
            icon="open-in-new"
            mode="contained"
          >
            Open
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
}

export default CardPrescription;
