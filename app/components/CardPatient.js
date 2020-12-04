import React from 'react';
import {View,StyleSheet,Image, ImageBackground} from 'react-native';
import colors from '../configs/colors';
import AppText from './AppText';
import ScreenVarient from './ScreenVarient';


function CardPatient({title,subTitle,image}) {
    return (
      

        <View style={styles.card}>
            <ImageBackground style={styles.image} source={image} >
            <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subTitle}>{subTitle}</AppText>
            </View>
            </ImageBackground>
        </View>
      
    );
}
const styles = StyleSheet.create({
    card:{
        borderRadius:15,
        marginBottom:20,
        width:"100%",
        height:"100%",
        margin:10,
        flex:1,
        backgroundColor:colors.white,

    },
    image:{
        width:"100%",
        height:"100%",
    },
    title:{
        color:colors.white,
    },
    subTitle:{
        color:colors.white,
    }
   
})

export default CardPatient;