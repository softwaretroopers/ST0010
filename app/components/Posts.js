import React from "react";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

import colors from "../configs/colors";

function Posts({ title, image, date }) {
  return (
    <Card style={{ borderRadius: 20, margin: 10, elevation: 10 }}>
      <Card.Title
        titleStyle={{ color: colors.themeDark }}
        subtitleStyle={{ color: colors.themeDark }}
        title={title}
        subtitle={date}
      />
      <Card.Cover source={image} />
    </Card>
  );
}

export default Posts;
