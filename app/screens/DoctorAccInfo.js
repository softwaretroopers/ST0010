import React from 'react';
import { View ,StyleSheet, Button, FlatList } from 'react-native';

import AppText from '../components/AppText';
import Card from '../components/Card';
import Icon from '../components/Icon';
import ListItem from '../components/ListItem';
import Screen from '../components/ScreenVarient';
import colors from '../configs/colors';

const listing=[
    {
        id:1,
        details:'Name'
    },
    {
        id:2,
        details:'Stream'
    },
    {
        id:3,
        details:'university'
    },
    {
        id:4,
        details:'Mobile'
    },
    {
        id:5,
        details:'Gmail'
    },
    {
        id:6,
        details:'Language'
    },
    {
        id:7,
        details:'Gender'
    },
    {
        id:8,
        details:'Password'
    },
]
function DoctorAccInfo(props) {
    return (
       <Screen style={styles.screen}>
           <View style={styles.containerHeading}>
               <AppText style={styles.HeadingFont}>My Information</AppText>
            </View>
           <View >
           <View style={styles.containerTop}>
           <ListItem
                image = {require("../assets/logo.png")}
                />
           </View>
           <View style={styles.ContainerButton} >
             <Button 
                 title="Edit Profile Photo"
             />
           </View>
        <View style={styles.containers}>
        <FlatList
        data={listing}
        keyExtractor={listing => listing.id.toString()}
       
        renderItem={ ( { item}) =>
        <ListItem
        title={item.details}
        />
        }
        />
        </View>

        <View style={styles.fixToText}>
        <Button
          color="black"
          title="Update"
          
        />
  
      </View>
      </View>
       </Screen>
    );
}

const styles = StyleSheet.create({
    containers:{
        padding:10
    },
    ContainerButton:{
        flexDirection: 'row',
        justifyContent:"center",
    },
    containerHeading:{
        borderBottomRightRadius:20,
        borderBottomLeftRadius:20,
        backgroundColor:colors.white,
        padding:'5%',
        shadowColor:colors.patientPrimary,
        shadowOffset:{width:0,height:10},
        shadowOpacity:1,
        shadowRadius:10,
        elevation:15,
    },
    containerTop:{
        alignItems:"center",
        marginTop:5
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent:"center",

    },
    HeadingFont:{
        fontWeight:'bold'
    },
    screen:{
        padding:3
    }

})

export default DoctorAccInfo;