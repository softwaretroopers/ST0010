import React from "react";
import { View, FlatList } from "react-native";
import CardPrescription from "../../components/CardPrescription";

import ScreenVariant from "../../components/ScreenVariant";

const prescriptionData = [
  {
    id: 1,
    docImage: require("../../assets/doc.png"),
    reportImage: require("../../assets/prescription.jpg"),
    docName: "Dr. Anonymous - 1",
    date: "02/12/2020",
  },
  {
    id: 2,
    docImage: require("../../assets/doc1.jpg"),
    reportImage: require("../../assets/prescription.jpg"),
    docName: "Dr. Anonymous - 2",
    date: "10/12/2020",
  },
  {
    id: 3,
    docImage: require("../../assets/categoryDoc2.png"),
    reportImage: require("../../assets/prescription.jpg"),
    docName: "Dr. Anonymous - 3",
    date: "31/01/2021",
  },
];

function PatientPrescriptions() {
  return (
    <ScreenVariant>
      <View>
        <FlatList
          data={prescriptionData}
          renderItem={({ item }) => (
            <CardPrescription
              docImage={item.docImage}
              reportImage={item.reportImage}
              docName={item.docName}
              date={item.date}
            />
          )}
          keyExtractor={(items) => items.id.toString()}
        />
      </View>
    </ScreenVariant>
  );
}

export default PatientPrescriptions;
