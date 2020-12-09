import React from 'react';
import { View, Text, StyleSheet,ImageBackground, ScrollView,TouchableOpacity } from 'react-native';
import colors from '../../configs/colors'
import AppText from '../../components/AppText'
import CardPatient from "../../components/CardPatient";
import ScreenVarient from '../../components/ScreenVarient';
import { FlatList } from 'react-native-gesture-handler';

const cardList =[
   {
       id:1,
       image:require('../../assets/love.jpg'),
       title:'Dr.Anonymous',
       subTitle:'1300',
   },
   {
    id:2,
    image:require('../../assets/love.jpg'),
    title:'Dr.Anonymous',
    subTitle:'1500',
    },
    {
    id:3,
    image:require('../../assets/love.jpg'),
    title:'Dr.Anonymous',
    subTitle:'1800',
    },
]

function PatientCategoryDetails(props) {
    return (
        <ScreenVarient>
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
                                subTitle={item.subTitle}
                                image={item.image}
                                />
                            }
                            />
                    </View>
                            <TouchableOpacity style={styles.viewAll}>
                                <AppText style={styles.viewText}>View All</AppText>
                            </TouchableOpacity>
                </View>

                <View style={styles.containerTop}>
                    <AppText style={styles.heading}>Psychologist</AppText>
                    <View style={styles.topDetails}>
                            <FlatList numColumns={3}
                            data={cardList}
                            keyExtractor={listing => listing.id.toString()}
                            renderItem={({item})=>
                                <CardPatient
                                title={item.title}
                                subTitle={item.subTitle}
                                image={item.image}
                                />
                            }
                            />
                    </View>
                            <TouchableOpacity style={styles.viewAll}>
                                <AppText style={styles.viewText}>View All</AppText>
                            </TouchableOpacity>
                </View>

                <View style={styles.containerTop}>
                    <AppText style={styles.heading}>Psychologist</AppText>
                    <View style={styles.topDetails}>
                            <FlatList numColumns={3}
                            data={cardList}
                            keyExtractor={listing => listing.id.toString()}
                            renderItem={({item})=>
                                <CardPatient
                                title={item.title}
                                subTitle={item.subTitle}
                                image={item.image}
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
        paddingTop:50,
    },
    heading:{
        fontWeight:'bold',
        fontSize:25,
        marginLeft:"10%",
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