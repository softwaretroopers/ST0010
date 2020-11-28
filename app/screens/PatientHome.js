import React from 'react';
import { FlatList , StyleSheet, View ,TouchableOpacity } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import Card from '../components/Card';
import Icon from '../components/Icon';
import ListItem from '../components/ListItem';
import ScreenVarient from '../components/ScreenVarient';
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
function PatientHome({navigation}) {
    return (
        <ScreenVarient>
            <View style={styles.navigationPanel}>
                <TouchableOpacity onPress={() => navigation.navigate("PatientNavigation")}>
                 
                <ListItem  
          IconComponent={<Icon name="menu" size={60} backgroundColor={"#e8e8e8"} iconColor={"#3d4db7"} />}
                />
                </TouchableOpacity>
           </View>
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
        </ScreenVarient>
    );
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:20,
        paddingTop:10,
        backgroundColor:colors.lightGrey,
    },
    navigationPanel:{
        backgroundColor:colors.lightGrey,
        marginLeft:-20,
        marginTop:-20
    }
});
export default PatientHome;