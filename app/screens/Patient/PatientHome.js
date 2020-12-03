import React from 'react';
import { FlatList , StyleSheet, View ,TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

import Card from '../../components/Card';
import ScreenVarient from '../../components/ScreenVarient';
import colors from '../../configs/colors';

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
function PatientHome({navigation}) {
    return (
        <ScreenVarient >
        <TouchableOpacity onPress={() => navigation.navigate("PatientNavigation")}  >
        <AntDesign name="menufold" size={24} color="black" style={styles.navigationPanel}/>
        </TouchableOpacity>
            <View style={styles.screen} >
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
        </ScreenVarient>
    );
}
const styles = StyleSheet.create({
    screen:{
        flex:1,
        paddingTop:30,
        backgroundColor:colors.lightGrey,
    },
    navigationPanel:{
        backgroundColor:colors.lightGrey,
        paddingTop:15,
        paddingLeft:"3.5%",
        // width:30,
    }
});
export default PatientHome;