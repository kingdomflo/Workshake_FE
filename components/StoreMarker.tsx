import React, { FunctionComponent } from "react";
import { View, Text, StyleSheet } from "react-native";
import Store from "../models/Store";
import { success, error } from "../constants/Colors";

interface IProps {
  store: Store;
}

const StoreMarker: FunctionComponent<IProps> = ({ store }) => (
  <View style={[styles.view, store.workShake ? styles.backgroundOK : styles.backgroundNOK]}>
    <Text style={{ color: "#fff" }}>{`${store.chainStore.label} - ${store.label}`}</Text>
  </View>
);

export default StoreMarker;

const styles = StyleSheet.create({
  view: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderColor: "#eee",
    borderRadius: 5,
    elevation: 10
  },
  backgroundOK: {
    backgroundColor: success
  },
  backgroundNOK: {
    backgroundColor: error
  },
});