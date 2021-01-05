import React from 'react';
import { View ,FlatList , StyleSheet} from 'react-native';

import CardAppointments from '../../components/CardAppointments';
import colors from '../../configs/colors';

const listing = [
    {
        id:1,
        name : "Dr.Anonymous",
        date : "2021/01/10",
        time : "04.20 P.M.",
        image :require("../../assets/doc.png"),
    },
    {
        id:2,
        name : "Dr.Anonymous",
        date : "2021/01/10",
        time : "10.20 P.M.",
        image :require("../../assets/doc.png"),
    },
    {
        id:3,
        name : "Dr.Anonymous",
        date : "2021/01/10",
        time : "12.20 P.M.",
        image :require("../../assets/doc.png"),
    }
]

function AppointmentsCompleted(props) {
    return (
        <View style={styles.screen}>
            <FlatList
            data={listing}
            keyExtractor={(listing) => listing.id.toString()}
            renderItem = {({item}) =>(
                <CardAppointments
                name={item.name}
                date={item.date}
                time={item.time}
                image={item.image}
                />
            )}
            />
        </View>
        
    );
}

const styles = StyleSheet.create({
    screen:{
        backgroundColor:colors.lightGrey,
        flex:1,
    },
})

export default AppointmentsCompleted;