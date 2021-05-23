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
import PickerItem from "./PickerItem";
import colors from "../configs/colors";

function AppPicker({
  PickerItemComponent = PickerItem,
  icon,
  items,
  numberOfColumns = 1,
  onSelectItem,
  placeholder,
  selectedItem,
  IconFamily,
}) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={colors.themeDark}
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
            color={colors.themeDark}
          />
        </View>
      </TouchableWithoutFeedback>

      <Modal
        style={styles.listContainer}
        visible={modalVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
        onTouchCancel={() => setModalVisible(false)}
      >
        <View style={styles.listContainer}>
          <FlatList
            style={styles.list}
            contentContainerStyle={{}}
            data={items}
            numColumns={numberOfColumns}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItemComponent
                IconFamily={IconFamily}
                item={item}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "50%",
    padding: 15,
    marginVertical: 10,
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.lightGrey,
  },
  icon: {
    marginRight: 10,
  },
  placeholder: {
    color: colors.themeDark,
    flex: 1,
  },
  text: {
    flex: 1,
    color: colors.themeDark,
    textAlign: "center",
  },
  list: {
    width: "60%",
  },
  listContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 260,
    marginLeft: 100,
  },
});

export default AppPicker;
