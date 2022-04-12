import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { TextInput } from "react-native-paper";
import { RoundedButton } from "../../components/RounderButton";
import { Colors } from "../../utils/colors";
import { fontSizes, spacing } from "../../utils/sizes";
export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.tituloContainer}>
        <Text style={styles.titulo}> En que te gustaria concentrarte? </Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={{ flex: 1, marginRight: spacing.md }}
            onChange={({ nativeEvent }) => {
              setSubject(nativeEvent.text);
            }}
          />
          <RoundedButton
            size={50}
            title="+"
            onPress={() => {
              addSubject(subject);
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.md,
  },
  tituloContainer: {
    flex: 1,
    padding: spacing.md,
    justifyContent: "center",
  },
  titulo: {
    color: Colors.white,
    fontWeight: "bold",
    fontSize: fontSizes.lg,
  },
  inputContainer: {
    paddingTop: fontSizes.md,
    flexDirection: "row",
    alignItems: "center",
  },
});
