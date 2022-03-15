import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Modal } from "react-native";
import { FlatList } from "react-native-web";
import DragonB from "./assets/dragon-ball.json";
import Card from "./components/Card";

export default function App() {
  const [show, setShow] = useState(false);
  const [bio, setBio] = useState([]);

  const display = (targettedBio) => {
    setShow(!show);
    setBio(targettedBio);
  };

  const renderData = ({ item }) => (
    <Card item={item} show={show} display={display} />
  );

  return (
    <View style={styles.container}>
      <Modal visible={show}>
        <View style={styles.modalView}>
          <Text>{bio}</Text>
        </View>
      </Modal>

      <Text>Données Dragon Ball</Text>

      <FlatList
        data={DragonB.characters}
        renderItem={renderData}
        keyExtractor={(datas) => datas.id}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
