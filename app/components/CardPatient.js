import React, { useState } from 'react';
import {View,StyleSheet, ImageBackground , TouchableOpacity,Modal, FlatList} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import {useNavigation} from '@react-navigation/native';

import colors from '../configs/colors';
import AppText from './AppText';
import Icon from './Icon';
import ProfileCardListItem from './ProfileCardListItem';
import AppButton from '../components/AppButton';
import ProfileCard from '../components/ProfileCard';

const list = [
    {
        id:"1",
        image:require("../assets/doc.png"),
        name:"Dr.Anonymous",
        profession:"App Development",
        education:"Computing",
        university:"Coventry",
        language:"sinhala / English",
        Callprice:"LKR 1300 upward",
        Videoprice:"LKR 2000 upward"
    }
]
function CardPatient({title,priceaudio,pricevideo,image}) {
    const [modalVisible, setModalVisible] = useState(false);
    const navigation = useNavigation();
    return (
        <>
           <Modal animationType="slide" transparent={true} visible={modalVisible}>
           <View style={styles.screen} >
               <FlatList
                data={list}
                keyExtractor={list => list.id.toString()}
                renderItem={({item}) =>
               <ProfileCard
                    image={item.image}
                    Iconclose={<TouchableOpacity onPress={() => 
                                    { setModalVisible(!modalVisible);}} 
                                >
                                    <Icon name="cross" backgroundColor={colors.black}></Icon>
                                </TouchableOpacity>
                              }
                    name={item.name}
                    profession = {item.profession}
                    education= {item.education}
                    university={item.university}
                    language={item.language}
                    Callprice={item.Callprice}
                    Videoprice={item.Videoprice}
                    IconButton={
                        <View style={styles.buttonContainer}>
                            <AppButton title="Book Now" color="black" onPress={() =>{setModalVisible(!modalVisible); navigation.navigate("PatientDateTimePicker"); }}  />  
                        </View>
                    }
               />
            }
               /></View>
               </Modal>
               
       <TouchableOpacity onPress={() => {
        setModalVisible(true);
      }}>
        <View style={styles.card}>
            <ImageBackground style={styles.image} source={image} >
            <View style={styles.detailsContainer}>
                <View style={styles.priceContainer}>
                <AppText style={styles.title}>{title}</AppText>
                    <ProfileCardListItem style={styles.pricesText}
                    title={<AppText style={styles.textPrice}>{priceaudio}</AppText>}
                    IconComponent={<Icon IconFamily={MaterialIcons} name={"keyboard-voice"} size={15} color="white" />}
                    />
                    <ProfileCardListItem style={styles.pricesText}
                     title={<AppText style={styles.textPrice}>{pricevideo}</AppText>}
                    IconComponent={<Icon IconFamily={MaterialIcons} name={"videocam"} size={15} color="white" />}
                    />
                </View>
            </View>
            </ImageBackground>
        </View>
       </TouchableOpacity>
       </>
    );
}
const styles = StyleSheet.create({
    buttonContainer:{
        width: "100%",
        height: 50,
        marginTop:-20
    },
    card:{
        borderRadius:18,
        height:160,
        width:118,
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
        fontSize:14,
        fontWeight:'bold',
        marginLeft:5,
        marginBottom:3
    },
    priceContainer:{
        flexDirection:"column",
        backgroundColor:colors.lightgray,
        marginTop:"88%",
        opacity:0.7
    },
    pricesText:{
        marginTop:-8,
        paddingLeft:10,
        
    },
    textPrice:{
        color:colors.black,
        fontSize:12,
        fontWeight:"200",
    },
    screen:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        padding:18,
        alignContent:"center",
        flexDirection:"row",
    marginTop: 22,
    },
   
})

export default CardPatient;