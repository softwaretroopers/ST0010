import React from 'react';
import { View ,StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import AppButton from '../components/AppButton';

import ProfileCard from '../components/ProfileCard';
import ScreenVarient from '../components/ScreenVarient';
const list = [
    {
        id:"1",
        image:require("../assets/test.jpg"),
        name:"Nithya Hansana",
        profession:"App Development",
        education:"Computing",
        university:"Coventry",
        language:"sinhala / English",
        Callprice:"LKR 1300 upward",
        Videoprice:"LKR 2000 upward"
    }
]
function PatientCategory(props) {
   
    return (
       <ScreenVarient>
           <View style={styles.screen}>
               <FlatList
                data={list}
                keyExtractor={list => list.id.toString()}
                renderItem={({item}) =>
               <ProfileCard
                    image={item.image}
                    name={item.name}
                    profession = {item.profession}
                    education= {item.education}
                    university={item.university}
                    language={item.language}
                    Callprice={item.Callprice}
                    Videoprice={item.Videoprice}
               
                    IconButton={
                        <View style={styles.buttonContainer}>
                            <AppButton title="Book Now" color="black" />
                        </View>
                    }
               />
            }
               />
           </View>
       </ScreenVarient>
    );
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        padding:18,
        alignContent:"center",
        flexDirection:"row"
    },
    buttonContainer:{
        width: "100%",
        height: 50,
        marginTop:-20
    },
       
})
export default PatientCategory;