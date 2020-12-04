import React from 'react';
import { View , StyleSheet ,Image  } from 'react-native';
import { color } from 'react-native-reanimated';
import colors from '../configs/colors';
import AppText from './AppText';

function CardChanneling({name , date ,time, image}) {
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
        borderRadius:15,
        marginBottom:3,
        width:"100%",
        height:100,
        backgroundColor:colors.white,
        margin:10,
        flexDirection:"row",

    },
    image:{
        width:75,
        height:75,
        marginLeft:20,
        marginTop:10,
       
        
    },
    detailsContainer:{
        margin:20,
        marginLeft:"20%",
        marginTop:10,
        color:colors.doctorPrimary,
    

    },
   
  
   

})

export default CardChanneling;