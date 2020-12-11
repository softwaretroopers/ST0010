import React from 'react';
import { View , StyleSheet ,FlatList } from 'react-native';

import AppButton from '../../components/AppButton';
import AppText from '../../components/AppText';
import ProfileCardListItem from '../../components/ProfileCardListItem';
import ScreenVarient from '../../components/ScreenVarient';
import colors from '../../configs/colors';

const DocProfile = [
    {
        id:1,
        image:require("../../assets/doc.png"),
        name:'Mr.Anonymous',
        date:'02/12/2020',
        time:'01:12 pm',
        doctorFee:'Rs.1200',
        mobileFee:'Rs.300',
        Total:'Rs.1500'
    }
]

function PatientInvoice({navigation}) {
    return (
        <ScreenVarient>
            <View style={styles.heading}>
                <AppText style={styles.headText}>Invoice</AppText>
            </View>
            <View style={styles.screenTop}>
                    <FlatList
                     data={DocProfile}
                     keyExtractor={listing => listing.id.toString()}
                     renderItem={({item}) =>
                        <View style={styles.containerMiddle}>
                            <ProfileCardListItem style={styles.image} image={item.image}/>
                            <View style={styles.containerMiddleText}>
                                <AppText style={styles.text}>{item.name}</AppText>
                                <AppText style={styles.text}>{item.time}</AppText>   
                            </View>
                        </View>
                     }
                    />

                    <FlatList
                     data={DocProfile}
                     keyExtractor={listing => listing.id.toString()}
                     renderItem={({item}) =>
                        <View style={styles.containerBottom}>
                           
                            <View style={styles.containerBottomHeading}>
                                <AppText style={styles.Bottomtext}>Doctor Fee </AppText>   
                                <AppText style={styles.Bottomtext}>Mobile Fee</AppText>  
                                <AppText style={styles.Bottomtext}>Total</AppText>      
                            </View>

                            <View style={styles.containerBottomDetails}>
                                <AppText style={styles.Bottomtext}>{item.doctorFee} </AppText>     
                                <AppText style={styles.Bottomtext}>{item.mobileFee}</AppText>    
                                <AppText style={styles.Bottomtext}>{item.Total}</AppText> 
                            </View>
                        </View>
                     }
                    />
                    <View style={styles.button} >
                      <AppButton title="Go" color="black" onPress={ () => navigation.navigate("PatientInvoiceBill")} />   
                    </View>
            </View>
        </ScreenVarient>
    );
}

const styles = StyleSheet.create({
    button:{
        padding:5,
        width:"30%",
        height:"8%",
        alignSelf:"center",
    },
    Bottomtext:{
        fontWeight:'bold',
        marginBottom:12
    },
    containerBottom:{
        flexDirection:"row",
        justifyContent:'space-between',
        padding:20,
        borderBottomWidth:2,
        borderColor:colors.lightGrey,
    },
    containerMiddle:{
        borderBottomWidth:2,
        borderColor:colors.lightGrey,
        flexDirection:"row",
        marginLeft:10,
        padding:15,
    },
    containerMiddleText:{
        marginTop:"15%",
        marginLeft:"5%",
        fontWeight:'bold',
    },
    heading:{
        backgroundColor:colors.patientPrimary,
        alignItems: "center",
    },
    headText:{
        fontSize:25,
        fontWeight:'bold',
        color:colors.white,
    },
    text:{
        fontWeight:'bold',
    },
    image:{
        height:180,
        width:150
    },
    
})
export default PatientInvoice;