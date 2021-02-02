import React from 'react';
import { View , StyleSheet , FlatList} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 

import Icon from "../../components/Icon";
import DoctorListItem from '../../components/DoctorListItem';
import colors from '../../configs/colors';
import AppText from '../../components/AppText';
import ScreenVariant from '../../components/ScreenVariant';

const completeList=[
    {
        id:1,
        title:'Miss.Nithya',
        date:'21/09/2020',
        time:'3.15 PM - 3.30 PM',
        calltype:'Voice Call',
        icon:'video-call'
    },
    {
        id:2,
        title:'Miss.Nithya',
        date:'21/09/2020',
        time:'3.15 PM - 3.30 PM',
        calltype:'Voice Call',
        icon:'keyboard-voice'
    }
]

function DoctorAppointment(props) {
    return (
        <ScreenVariant>
            <View style={styles.screen}>
                <View style={styles.Header} >
                    <AppText style={styles.HeaderText}>Appointments</AppText>
                </View>

            <View style={styles.container}>
             <FlatList
                data={completeList}
                keyExtractor={listing => listing.id.toString()}
                renderItem={({item}) =>
                <DoctorListItem
                    title={item.title}
                    date={item.date}
                    time={item.time}
                    calltype={item.calltype}
                    iconType={
                    <Icon IconFamily={MaterialIcons} name={item.icon} size={25} backgroundColor={colors.doctorPrimary} /> }
                />
                }
             />
            </View>
            </View>
        </ScreenVariant>
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
export default DoctorAppointment;