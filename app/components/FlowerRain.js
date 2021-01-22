import React from "react";
import { View,Text } from 'react-native';
import MakeItRain from "react-native-make-it-rain";

function FlowerRain(props) {
  return (
    <MakeItRain
      numItems={80}
      flipSpeed={0}
      itemDimensions={{ width: 40, height: 40 }}
      itemComponent={
        <View>
          <Text style={{ fontSize: 30 }}>🌸</Text>
        </View>
      }
      itemTintStrength={0}
      flavor="arrive"
    />
  );
}

export default FlowerRain;
