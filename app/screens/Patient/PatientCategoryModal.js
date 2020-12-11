import React from 'react';
import { View ,StyleSheet , FlatList,
    Modal} from 'react-native';

import AppButton from '../../components/AppButton';
import ProfileCard from '../../components/ProfileCard';
import ScreenVarient from '../../components/ScreenVarient';

const list = [
    {
        id:"1",
        image:require("../../assets/test.jpg"),
        name:"Dr.Anonymous",
        profession:"App Development",
        education:"Computing",
        university:"Coventry",
        language:"sinhala / English",
        Callprice:"LKR 1300 upward",
        Videoprice:"LKR 2000 upward"
    }
]
function PatientCategoryModal(props) {
    const [modalVisible, setModalVisible] = useState(false);
    return (
       <ScreenVarient>
           <View style={styles.screen} >
           <Modal animationType="slide" transparent={true} visible={modalVisible}>
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
               </Modal>
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
export default PatientCategoryModal;