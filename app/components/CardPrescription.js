import React from "react";
import { View } from "react-native";
import { Avatar, Button, Card, Divider } from "react-native-paper";

import colors from "../configs/colors";

function CardPrescription({ docImage, reportImage, date, docName }) {
  const LeftContent = (props) => (
    <Avatar.Image {...props} size={50} source={docImage} />
  );
  const RightContent = (props) => (
    <Card.Actions>
      <Button mode="contained" icon="open-in-new" color={colors.themeDark}>
        Open
      </Button>
    </Card.Actions>
  );
  return (
    <View style={{ margin: "2%" }}>
      <Card style={{ elevation: 5 }}>
        <Card.Title
          titleStyle={{ color: colors.themeDark }}
          subtitleStyle={{ color: colors.themeDark }}
          title={docName}
          subtitle={date}
          left={LeftContent}
          right={RightContent}
        />
        <Divider />
        <Card.Cover source={reportImage} />
      </Card>
    </View>
  );
}

export default CardPrescription;
