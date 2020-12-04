import React from 'react';
import { View } from 'react-native';
import CardChanneling from '../../components/CardChanneling';
import colors from '../../configs/colors';

function CompletedChanneling(props) {
    return (
        <View style={{
            backgroundColor:colors.lightGrey,
              flex:1,
               paddingTop:100,
        }}>
       
             <CardChanneling 
        name="Dr.shehan"
        date="2020/12/10"
        time="05.20"
        image={require("../../assets/doctor.png")}
        />

<CardChanneling 
        name="Dr.nehanga"
        date="2020/12/10"
        time="05.20"
        image={require("../../assets/doctor.png")}
        />

        </View>
        
    );
}

export default CompletedChanneling;