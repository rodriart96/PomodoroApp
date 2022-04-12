import React from "react"; 
import { View, Text, StyleSheet, FlatList, SafeAreaView } from "react-native";
import { fontSizes, spacing } from "../../utils/sizes";
import { RoundedButton } from "../../components/RounderButton";
const HistoryItem = ({item, index}) =>{
    console.log(item)
    return(
        <Text style={styles.HistoryItem(item.status)}>
            {item.subject}
        </Text>
    )
}
export const FocusHistory = ({ focusHistory, onClear }) => {
  const clearHistory = () => {
    onClear();
  };

  return (
      <><SafeAreaView style={{ flex: 1, alignItems:'center' }}>
      <Text style={styles.title}>Things en las que nos concentramos antes:</Text>
      {!!focusHistory.length && 
      <FlatList 
        style={{ flex: 1 }}
        contentContainerStyle={{flex:1, alignItems:'center'}}
        data={focusHistory}
        renderItem={HistoryItem}
      />
          
    }
    </SafeAreaView>
      </>
    
  );
};

const styles = StyleSheet.create({

    HistoryItem:(status)=>({
        color: status>1? 'red' : 'green',
        fontSize: fontSizes.lg,
        marginTop: spacing.sm
    }),
    title:{
        color:'white',
        fontSize:fontSizes.lg
    },

})