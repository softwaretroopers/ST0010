import React from 'react';
import {View,StyleSheet,Image, ImageBackground} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import colors from '../configs/colors';
import AppText from './AppText';


function CardPatient({title,priceaudio,pricevideo,image}) {
    return (
       <TouchableOpacity>
        <View style={styles.card}>
            <ImageBackground style={styles.image} source={image} >
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{title}</AppText>
                
                <AppText style={styles.price}>{priceaudio}</AppText>
                <AppText style={styles.price}>{pricevideo}</AppText>
            </View>
            </ImageBackground>
        </View>
       </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    card:{
        borderRadius:15,
        height:160,
        margin:7.5,
        flex:1,
        backgroundColor:colors.white,
        overflow:"hidden",
    },
    image:{
        width:"100%",
        height:"100%",
    },
    title:{
        color:colors.black,
        paddingTop:110
    },
   
})

export default CardPatient;