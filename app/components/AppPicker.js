import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "./AppText";
import AppButtonVariant from "../components/AppButtonVariant";
import Screen from "./Screen";
import PickerItem from "./PickerItem";
import colors from "../configs/colors";

function AppPicker({ icon, items, onSelectItem, placeholder, selectedItem }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={colors.darkGrey}
              style={styles.icon}
            />
          )}
          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.label}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}

          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={colors.darkGrey}
          />
        </View>
      </TouchableWithoutFeedback>

      <Modal
        style={styles.listContainer}
        visible={modalVisible}
        animationType="slide"
      >
        <Screen>
          <AppButtonVariant
            title="Close"
            color="black"
            onPress={() => setModalVisible(false)}
          />
          <FlatList
            style={styles.list}
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItem
                style={styles.item}
                label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
    borderStyle: "solid",
    borderBottomWidth: 1,
    borderBottomColor: colors.black,
  },
  icon: {
    marginRight: 10,
  },
  placeholder: {
    color: colors.darkGrey,
    flex: 1,
  },
  text: {
    flex: 1,
  },
  list: {
    width: "100%",
  },
});

export default AppPicker;
