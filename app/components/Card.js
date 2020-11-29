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
        borderRadius:35,
        backgroundColor:colors.white,
        height:170,
        marginBottom:"8%",
        marginLeft:20,
        marginRight:20,
        padding:'5%',
        shadowColor:colors.danger,
        shadowOffset:{width:0,height:10},
        shadowOpacity:1,
        shadowRadius:10,
        elevation:10,
       
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
        marginLeft:10,
        fontWeight:'bold'
    }

})

export default Card;