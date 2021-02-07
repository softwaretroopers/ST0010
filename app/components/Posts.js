import React from "react";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

import colors from "../configs/colors";

function Posts({ title, image, date }) {
  return (
    <Card style={{ borderRadius: 20, margin: 10 }}>
      <Card.Title title={title} subtitle={date} />
      <Card.Cover source={image} />

      <Card.Actions>
        <Button
          style={{ backgroundColor: colors.patientPrimary }}
          icon="eye"
          mode="contained"
        >
          View
        </Button>
      </Card.Actions>
    </Card>
  );
}

export default Posts;
