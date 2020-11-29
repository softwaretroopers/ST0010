import React from 'react';
import { View ,StyleSheet , Image ,TouchableOpacity } from 'react-native';

import colors from '../configs/colors';
import AppText from './AppText';

function ListItem({
    title,
    subtitle,
    image,
    IconComponent,
    onPress
    }) {
    return (
        <TouchableOpacity onPress={onPress}>
       <View style={styles.container}>
           {IconComponent}
           {image && <Image style={styles.image} source={image}/>}
           <View style={styles.containerDetails}>
             <AppText style={styles.title}>{title}</AppText>
             {subtitle && <AppText>{subtitle}</AppText>}
           </View>
       </View>
       </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        padding:15,
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
        fontSize:16,
        fontWeight:'bold'
    }
})
export default ListItem;