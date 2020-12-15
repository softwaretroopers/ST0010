import React from "react";
import { FlatList, View, StyleSheet ,TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
// import {useNavigation} from '@react-navigation/native';

import Icon from "../../components/Icon";
import ListItem from "../../components/ListItem";
import colors from "../../configs/colors";
import ScreenVarient from "../../components/ScreenVarient";
import AppText from "../../components/AppText";

const menuItems = [
  {
    title: "Balance",
    icon: {
      name: "wallet",
      backgroundColor: colors.black,
    },
  },
  {
    title: "About Us",
    icon: {
      name: "info",
      backgroundColor: colors.black,
    },
  },
  {
    title: "Help",
    icon: {
      name: "help",
      backgroundColor: colors.black,
    },
    targetScreen: "PatientLogin",
  },
];

function DoctorAccount({navigation}) {
  // const navigation = useNavigation();
  return (
    <ScreenVarient>
      <View style={styles.screen}>
        {/* <View style={styles.containerHeading}>
               <AppText style={styles.HeadingFont}>My Information</AppText>
        </View> */}
        <View style={styles.containerTop}>
            <ListItem
                image = {require("../../assets/logo.png")}
            />
        <TouchableOpacity  onPress={() => navigation.navigate("DoctorAccInfo")} >
            <AppText style={{fontSize:14,fontWeight:'bold'}}>Edit Profile Photo</AppText>
        </TouchableOpacity>
        </View>
        </View>

        <View style={styles.containerDetails}>
          <FlatList
            data={menuItems}
            keyExtractor={(menuItems) => menuItems.title}
            renderItem={({ item }) => (
              <ListItem
                title={item.title}
                IconComponent={
                  <Icon
                    name={item.icon.name}
                    backgroundColor={item.icon.backgroundColor}
                  />
                }
              />
            )}
          />
        </View>
    </ScreenVarient>
  );
}

const styles = StyleSheet.create({
    containerDetails: {
        marginTop:"10%",
  },
  containerHeading:{
    borderBottomRightRadius:20,
    borderBottomLeftRadius:20,
    backgroundColor:colors.white,
    padding:'5%',
    marginBottom:"2%",
    shadowColor:colors.patientPrimary,
    shadowOffset:{width:0,height:10},
    shadowOpacity:1,
    shadowRadius:10,
    elevation:15,
},
  containerTop: {
    // marginBottom:"8%",
    alignItems:"center",
//    backgroundColor: colors.lightGrey,
 },
 HeadingFont:{
    fontWeight:'bold'
},

});

export default DoctorAccount;
