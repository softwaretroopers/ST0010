import React from 'react';
import { View,FlatList , Text, StyleSheet,ImageBackground, ScrollView,TouchableOpacity } from 'react-native';

import colors from '../../configs/colors'
import AppText from '../../components/AppText'
import CardPatient from "../../components/CardPatient";
import ScreenVarient from '../../components/ScreenVarient';
import AppSearchBar from '../../components/AppSearchBar';

const cardList =[
   {
       id:1,
       image:require('../../assets/doc.png'),
       title:'Dr.Anonymous',
       priceaudio:'1300',
       pricevideo:'1500',
   },
   {
    id:2,
    image:require('../../assets/categoryDoc2.png'),
    title:'Dr.Anonymous',
    priceaudio:'1300',
    pricevideo:'1500',
    },
    {
    id:3,
    image:require('../../assets/categoryDoc3.png'),
    title:'Dr.Anonymous',
    priceaudio:'1300',
    pricevideo:'1500',
    },
]

function PatientCategoryDetails({navigation}) {
    return (
        <ScreenVarient>
                <AppSearchBar></AppSearchBar>
            <ScrollView style={styles.screen}>
                <View style={styles.containerTop}>
                    <AppText style={styles.heading}>Psychologist</AppText>
                    <View style={styles.topDetails}>
                            <FlatList numColumns={3}
                            data={cardList}
                            keyExtractor={listing => listing.id.toString()}
                            renderItem={({item})=>
                                <CardPatient
                                title={item.title}
                                image={item.image}
                                priceaudio={"LKR" + item.priceaudio}
                                pricevideo={"LKR" + item.pricevideo}
                                />
                            }
                            />
                    </View>
                            <TouchableOpacity style={styles.viewAll}>
                                <AppText style={styles.viewText}>View All</AppText>
                            </TouchableOpacity>
                </View>

                <View style={styles.containerTop}>
                    <AppText style={styles.heading}>Cardiologist </AppText>
                    <View style={styles.topDetails}>
                            <FlatList numColumns={3}
                            data={cardList}
                            keyExtractor={listing => listing.id.toString()}
                            renderItem={({item})=>
                                <CardPatient
                                title={item.title}
                                image={item.image}
                                priceaudio={"LKR" + item.priceaudio}
                                pricevideo={"LKR" + item.pricevideo}
                                />
                            }
                            />
                    </View>
                            <TouchableOpacity style={styles.viewAll}>
                                <AppText style={styles.viewText}>View All</AppText>
                            </TouchableOpacity>
                </View>

                <View style={styles.containerTop}>
                    <AppText style={styles.heading}>Dental</AppText>
                    <View style={styles.topDetails}>
                            <FlatList numColumns={3}
                            data={cardList}
                            keyExtractor={listing => listing.id.toString()}
                            renderItem={({item})=>
                                <CardPatient
                                title={item.title}
                                image={item.image}
                                priceaudio={"LKR" + item.priceaudio}
                                pricevideo={"LKR" + item.pricevideo}
                                />
                            }
                            />
                    </View>
                            <TouchableOpacity style={styles.viewAll}>
                                <AppText style={styles.viewText}>View All</AppText>
                            </TouchableOpacity>
                </View>
            </ScrollView>
        </ScreenVarient>
    );
}
const styles = StyleSheet.create({
    screen:{
        flex:1,
    },
    heading:{
        fontWeight:'bold',
        fontSize:20,
        marginLeft:"5%",
        marginBottom:"2%",
    },
    topDetails:{
        backgroundColor:colors.patientPrimary,
        flexDirection:"row",
        padding:10,
    },
    viewAll:{
        alignItems:'flex-end'
    },
    viewText:{
        fontWeight:'bold',
        color:colors.patientPrimary,
    },
  });

export default PatientCategoryDetails;