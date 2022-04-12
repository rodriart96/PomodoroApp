import React from 'react'
import { View, StyleSheet } from 'react-native'
import { RoundedButton } from '../../components/RounderButton'


export const Timing = ({onChangeTime}) =>{
    return(
        <>
        <View style={styles.timingButton}>
            <RoundedButton title="10"  size={80} onPress={() => onChangeTime(10)}/>
        </View>
        <View style={styles.timingButton}>
            <RoundedButton title="25"  size={80} onPress={() => onChangeTime(25)}/>
        </View>
        <View style={styles.timingButton}>
            <RoundedButton title="40"  size={80} onPress={() => onChangeTime(40)}/>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    timingButton:{
        flex:1,
        alignItems: 'center',
    }
})