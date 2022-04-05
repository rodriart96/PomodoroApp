import React from "react";
import { Text, View, StyleSheet } from "react-native";

export const CountDown = ({
    minutes = 20,
    isPaused,
}) => {
  return (
    <View>
      <Text> Aqui va el contador </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
