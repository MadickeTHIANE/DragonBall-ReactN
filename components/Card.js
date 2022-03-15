import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

export default function Card({ item, show, display }) {
  return (
    <View style={styles.card}>
      <Text>Nom du personnage : {item.name}</Text>
      <Text>Capacités du personnage : {item.abilities}</Text>
      <Pressable onPress={() => display(item.bio)}>
        <Text style={{ color: "red" }}>
          {!show ? "Voir la bio" : "Cacher la bio"}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 4,
    borderRadius: 10,
    padding: 5,
    margin: 10,
  },
});
