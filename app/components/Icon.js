import React from 'react';
import { View } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 

function Icon({

    name,
    size = 40,
    backgroundColor ="#000",
    iconColor="#fff"
}) {
    return (
       <View style={{
        width:size,
        height:size,
        borderRadius:size/2,
        backgroundColor,
        justifyContent:"center",
        alignItems:"center"
       }}>
           <Entypo  name={name} color={iconColor} size={size * 0.5}/>
          
       </View>
    );
}

export default Icon;