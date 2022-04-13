import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Colors } from "../utils/colors";
import { fontSizes, spacing } from "../utils/sizes";

const mins2Millis = minutes => minutes * 1000 * 60;
const formatTime = time => time < 10 ? `0${time}` : time;
export const CountDown = ({ minutes, isPaused, onProgress, onEnd }) => {

  const [ milliseconds, setMilliseconds ] = useState(null);
  
  const intervalo = React.useRef(null);
  const countDown = () => {
    setMillis((time) => {
      if (time === 0) {
        clearInterval(intervalo.current);
        onEnd();
        return time;
      }
      const timeLeft = time - 1000;
      onProgress(timeLeft / mins2Millis(minutes));
      setMilliseconds(timeLeft)
      return timeLeft;
    });
  };

  useEffect(() => {
    setMillis(mins2Millis(minutes));
  }, [minutes]);

  useEffect(() => {
    if (isPaused) {
      if (intervalo.current) clearInterval(intervalo.current);
      return;
    }
    intervalo.current = setInterval(countDown, 1000);
    return () => clearInterval(intervalo.current);
  }, [isPaused, minutes]);

  const [millis, setMillis] = useState(milliseconds);
  const minute = Math.floor(millis / 1000 / 60) % 60;
  const seconds = Math.floor(millis / 1000) % 60;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {formatTime(minute)}:{formatTime(seconds)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: fontSizes.xxxl,
    fontWeight: "bold",
    color: Colors.white,
    paddingHorizontal: spacing.xxxl,
    paddingVertical: spacing.lg,
    backgroundColor: "rgba(94, 132, 226, 0.4)",
  },
});
