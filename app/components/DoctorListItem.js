import React from 'react';
import { View , StyleSheet, TouchableOpacity } from 'react-native';

import colors from '../configs/colors';
import AppText from './AppText';

function DoctorListItem({title,date,time,calltype,iconType,button,btnName}) {
    return (
        <View style={styles.DoctorListItem}>
            <View style={styles.containerRight}>
                <AppText style={styles.text} >{title}</AppText>
                <View style={styles.calltype}>
                    {iconType}
                    <AppText style={styles.icontext} >
                    {calltype}
                    </AppText>
                </View>
            </View>

            <View style={styles.containerRight}>
                <AppText style={styles.text} >{date}</AppText>
                <AppText style={styles.text} >{time}</AppText>
                {button && <TouchableOpacity style={styles.chatbtn}>
                    {button}
                    <AppText style={styles.btntext} >
                    {btnName}
                    </AppText>
                </TouchableOpacity>}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    btntext:{
        fontWeight:'bold',
        color:colors.white,
        marginLeft:5,
    },
    chatbtn:{
        flexDirection:"row",
        alignItems:"center",
        backgroundColor:colors.black,
        borderRadius:15,
        marginTop:"-25%"
    },
    DoctorListItem:{
        backgroundColor:colors.white,
        flexDirection:"row",
        justifyContent:"space-between",
        width:"100%",
        padding:25,
        marginBottom:2,
        
        shadowColor:colors.doctorPrimary,
        shadowOffset:{width:0,height:10},
        shadowOpacity:1,
        shadowRadius:10,  
        elevation:10,
    },
    text:{
        fontSize:15,
        color:colors.doctorPrimary,
        fontWeight:'bold'
    },
    icontext:{
        fontSize:15,
        color:colors.doctorPrimary,
        marginLeft:5,
        fontWeight:'bold'
    },
    calltype:{
        flexDirection:"row",
        alignItems:"center"
    }
})

export default DoctorListItem;