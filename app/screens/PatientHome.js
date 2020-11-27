import React from 'react';
import { FlatList , StyleSheet, View } from 'react-native';

import Card from '../components/Card';
import Screen from '../components/ScreenVarient';
import colors from '../configs/colors';

const listings = [
    {
        id: 1,
        title:'Doctor Channeling',
        des:'Doctor consultation is a laboratory analysis performed on a blood sample that is usually extracted from a vein in the arm using a hypodermic needle',
        image: require('../assets/doctorChanneling.png')
    },
    {
        id: 2,
        title:'Anytime Doctor',
        des:'24 hrs Doctor channeling is a laboratory analysis performed on a blood sample that is usually extracted from a vein in the arm using a hypodermic needle',
        image: require('../assets/anyTimeDoctor.png')
    },
    {
        id: 3,
        title:'Council',
        des:'Counsil is performed on a blood sample that is usually extracted from a vein in the arm using a hypodermic needle',
        image: require('../assets/Councillor.png')
    },
];
function PatientHome(props) {
    return (
        <Screen>
            <View style={styles.screen}>
            <FlatList
            data={listings}
            keyExtractor={listing => listing.id.toString()}
            renderItem={({item}) =>
            <Card
            title={item.title}
            des={item.des}
            image={item.image} />
        }
        />
        </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        paddingTop:50,
        backgroundColor:colors.lightGrey,
    }
})
export default PatientHome;