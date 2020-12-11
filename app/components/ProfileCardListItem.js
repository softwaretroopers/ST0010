import React from 'react';
import { View ,StyleSheet , Image } from 'react-native';

import colors from '../configs/colors';
import AppText from './AppText';

function ProfileCardListItem({
    title,
    subtitle,
    image,
    IconComponent,
    style
    }) {
    return (
       <View style={[styles.container,style]}>
           {IconComponent}
           {image && <Image style={[styles.image ,style]} source={image}/>}
           <View style={styles.containerDetails}>
             <AppText style={styles.title}>{title}</AppText>
             {subtitle && <AppText>{subtitle}</AppText>}
           </View>
       </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        padding:5,
    },
    containerDetails:{
        marginLeft:10,
        justifyContent:"center",
    },
    image:{
        width:70,
        height:70,
        borderRadius:35,
    },
    title:{
        color:colors.black,
        fontSize:14,
        fontWeight:'bold'
    }
})
export default ProfileCardListItem;