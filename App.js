import { StyleSheet, View,Text } from 'react-native';
import React, {useState} from 'react';
import {Focus} from "./src/features/focus/Focus"
import { Colors } from './src/utils/colors';
import { Timer } from './src/features/timer/Timer';
export default function App() {

  const [focusSubject, setFocusSubject] = useState('gardening');

  return (
    <View style={styles.container}>
      {focusSubject ? 
      <Timer focusSubject={focusSubject}/> : 
      <Focus addSubject={setFocusSubject}/> 
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.darkblue
  },
});
