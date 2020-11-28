import React from 'react';
import { View , StyleSheet ,Image  } from 'react-native';

import colors from '../configs/colors';
import AppText from './AppText';

function Card({title , des , image}) {
    return (
        <View style={styles.card}>
            <View style={styles.container}>
            <Image style={styles.image} source={image} />
            <AppText style={styles.des}>{des}</AppText>
            </View>
            <AppText style={styles.title}>{title}</AppText>
        </View>
    );
}

const styles = StyleSheet.create({
    card:{
        borderRadius:25,
        backgroundColor:colors.white,
        marginBottom:"15%",
        padding:'5%',
        shadowColor:colors.patientPrimary,
        shadowOffset:{width:0,height:10},
        shadowOpacity:1,
        shadowRadius:10,
        elevation:10,
        marginLeft:10,
        marginRight:10
    },  
    container:{
        flexDirection:"row", 
    },
    des:{
        color:colors.patientPrimary
    },
    image:{
        height:110,
        width:"30%"
    },
    title:{
        marginLeft:30,
        fontWeight:'bold'
    }

})

export default Card;