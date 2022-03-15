import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-web";
import DragonB from "./assets/dragon-ball.json";
import Card from "./components/Card";

export default function App() {
  const [show, setShow] = useState(false);

  const renderData = ({ item }) => (
    <Card item={item} show={show} display={() => setShow(!show)} />
  );

  return (
    <View style={styles.container}>
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
});
