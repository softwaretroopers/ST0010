import React from 'react';
import { View , StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

import Icon from "../components/Icon";
import DoctorListItem from '../components/DoctorListItem';
import ScreenVarient from '../components/ScreenVarient';
import colors from '../configs/colors';
import AppText from '../components/AppText';

const completeList=[
    {
        id:1,
        title:'Miss.Nithya',
        date:'21/09/2020',
        time:'3.15 PM - 3.30 PM',
        calltype:'Voice Call',
        icon:{
            name:"keyboard-voice",
        },
    },
    {
        id:2,
        title:'Miss.Nithya',
        date:'21/09/2020',
        time:'3.15 PM - 3.30 PM',
        calltype:'video-call',
        icon:{
            name:"video-call",
        },
    }
]

function DoctorOngoing(props) {
    return (
        <ScreenVarient>
            <View style={styles.screen}>
                <View style={styles.Header} >
                    <AppText style={styles.HeaderText}>On going</AppText>
                </View>

            <View style={styles.container}>
             <FlatList
                data={completeList}
                keyExtractor={listing => listing.id.toString()}
                renderItem={({item}) =>
                <DoctorListItem
                    title={item.title}
                    calltype={item.calltype}
                    iconType={
                        <Icon IconFamily={MaterialIcons} name={item.icon.name} size={25} backgroundColor={colors.doctorPrimary} /> }
                        date={item.date}
                        button={
                                 <Icon IconFamily={MaterialIcons} name="chat" size={25} backgroundColor={colors.doctorPrimary} />
                        }
                        btnName="chat"
                />
                }
             />
            </View>
            </View>
        </ScreenVarient>
    );
}

const styles = StyleSheet.create({
    screen:{
        backgroundColor:colors.lightGrey,
        flex:1,
        paddingTop:10
    },
    Header:{
        padding:10,
        marginBottom:20
    },
    HeaderText:{
        fontWeight:'bold',
        fontSize:24,
        marginLeft:20,
        color:colors.doctorPrimary
    }
})
export default DoctorOngoing;