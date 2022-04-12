import { StyleSheet, View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { Focus } from "./src/features/focus/Focus";
import { FocusHistory } from "./src/features/focus/FocusHistory";
import { Colors } from "./src/utils/colors";
import { Timer } from "./src/features/timer/Timer";

const STATUSES = {
  COMPLETE: 1,
  CANCELED: 2,
};
const onClear = () =>{

}
export default function App() {
  const [focusSubject, setFocusSubject] = useState(null);
  const [focusHistory, setFocusHistory] = useState([]);

  const addFocusHistoryState = (focusSubject, status) => {
    setFocusHistory([...focusHistory, { subject: focusSubject, status }]);
  };
  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Timer
          focusSubject={focusSubject}
          onTimerEnd={() => {
            addFocusHistoryState(focusSubject, STATUSES.COMPLETE);
            setFocusSubject(null);
          }}
          clearSubject={() => {
            addFocusHistoryState(focusSubject, STATUSES.CANCELED);
            setFocusSubject(null);
          }}
        />
      ) : (
        <>
          <Focus addSubject={setFocusSubject} />
          <FocusHistory focusHistory={focusHistory} onClear={onClear}/>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.darkblue,
  },
});
