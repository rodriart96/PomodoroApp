import React from "react";
import { View, Text, StyleSheet, FlatList, SafeAreaView } from "react-native";
import { fontSizes, spacing } from "../../utils/sizes";
import { RoundedButton } from "../../components/RounderButton";
const HistoryItem = ({ item, index }) => {
  console.log(item);
  return <Text style={styles.HistoryItem(item.status)}>{item.subject}</Text>;
};
export const FocusHistory = ({ focusHistory, onClear }) => {
  const clearHistory = () => {
    onClear();
  };

  return (
    <SafeAreaView style={{ flex: 1, alignItems: "center" }}>
      {!!focusHistory.length && (
        <>
          <Text style={styles.title}>
            Cosas en las que nos concentramos antes:
          </Text>
          <FlatList
            style={{ flex: 1 }}
            contentContainerStyle={{ flex: 1, alignItems: "center" }}
            data={focusHistory}
            renderItem={HistoryItem}
          />
          <View style={styles.clearContainer}>
            <RoundedButton
              size={75}
              title={"Limpiar"}
              onPress={() => clearHistory()}
            />
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  HistoryItem: (status) => ({
    color: status > 1 ? "red" : "green",
    fontSize: fontSizes.lg,
    marginTop: spacing.sm,
  }),
  title: {
    color: "white",
    fontSize: fontSizes.lg,
    paddingHorizontal: spacing.xl,
  },
  clearContainer: {
    alignItems: "center",
    marginBottom: spacing.xl,
  },
});
