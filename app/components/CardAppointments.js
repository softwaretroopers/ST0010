import React from 'react';
import { View , StyleSheet ,Image  } from 'react-native';

import colors from '../configs/colors';
import AppText from './AppText';

function CardAppointments({name , date ,time, image}) {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={image} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.name} >{name}</AppText>
                <AppText>{date}</AppText>
                <AppText>{time}</AppText>
            </View>
        </View>

    );
}
const styles = StyleSheet.create({
    card:{
        marginBottom:8,
        width:"100%",
        backgroundColor:colors.white,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-evenly"

    },
    image:{
        width:75,
        height:75,
        margin:"3%"
    },
    detailsContainer:{
        margin:"3%",
     
    },
})

export default CardAppointments;