import React, { useState } from "react";
import { View, StyleSheet, Text, Platform, Vibration } from "react-native";
import { ProgressBar } from "react-native-paper";
import { Colors } from "../../utils/colors";
import { fontSizes, spacing } from "../../utils/sizes";
import { CountDown } from "../../components/CountDown";
import { RoundedButton } from "../../components/RounderButton";
import { Timing } from "./Timing";
import { useKeepAwake } from "expo-keep-awake";

const DEFAULT_TIME = .1;

export const Timer = ({ focusSubject, onTimerEnd, clearSubject }) => {
  useKeepAwake();
  const [minutes, setMinutes] = useState(DEFAULT_TIME);
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);

  const onProgress = () => setProgress(progress);;

  const vibrate = () => {
    if (Platform.OS === "ios") {
      const intervalo = setInterval(() => Vibration.vibrate(), 1000);
      setTimeout(() => clearInterval(intervalo), 7000);
    } else {
      Vibration.vibrate(7000);
    }
  };

  const onEnd = () => {
    vibrate();
    setMinutes(DEFAULT_TIME);
    setProgress(1);
    setIsStarted(false);
    onTimerEnd();
  };
  const changeTime = minutes => {
    setMinutes(minutes);
    setProgress(1);
    setIsStarted(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.CountDown}>
        <CountDown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={onProgress}
          onEnd={onEnd}
        />
      </View>

      <View style={{ paddingTop: spacing.md }}>
        <Text style={styles.titulo}>Trabajando en:</Text>
        <Text style={styles.tarea}>{focusSubject}</Text>
      </View>
      <View style={{ paddingTop: spacing.xl }}>
        <ProgressBar
          progress={progress}
          color="#5E84E2"
          style={{ height: 20 }}
        />
      </View>
      <View style={styles.buttonWrapper}>
        <Timing onChangeTime={changeTime} />
      </View>
      <View style={styles.buttonWrapper}>
        {!isStarted ? (
          <RoundedButton
            title="start"
            onPress={() => {
              setIsStarted(true);
            }}
          />
        ) : (
          <RoundedButton
            title="pause"
            onPress={() => {
              setIsStarted(false);
            }}
          />
        )}
      </View>
      <View style={styles.clearSubject}>
        <RoundedButton size={50} title="-" onPress={() => clearSubject()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.os === "ios" ? spacing.xxl : spacing.xxl,
  },
  titulo: {
    color: Colors.white,
    fontSize: fontSizes.md,
    textAlign: "center",
  },
  tarea: {
    color: Colors.white,
    fontWeight: "bold",
    fontSize: fontSizes.md,
    textAlign: "center",
  },
  CountDown: {
    flex: 0.4,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonWrapper: {
    flex: 0.3,
    flexDirection: "row",
    padding: spacing.lg,
    justifyContent: "center",
    alignItems: "center",
  },
  clearSubject: {
    paddingBottom: spacing.lg,
    paddingLeft: spacing.lg,
  },
});
