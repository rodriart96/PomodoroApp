import react from 'react'
import { View, StyleSheet, Text, Platform } from 'react-native'
import { Colors } from '../../utils/colors'
import { fontSizes, spacing } from '../../utils/sizes'
import { CountDown } from '../../components/CountDown'

export const Timer = ({focusSubject}) => {
    return (
        <View style={styles.container}>
            <CountDown/>
            <View>
                <Text style={styles.titulo}>
                    Focusing on: 
                </Text>
            </View>
            <Text style={styles.tarea}>Timer goes here: {focusSubject}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop: Platform.os === 'ios' ? spacing.xl : spacing.xxl,
        paddingLeft: spacing.sm
    },
    titulo: {
        color: Colors.white,
        fontSize: fontSizes.md,
        textAlign: 'center'
      },
      tarea: {
        color: Colors.white,
        fontWeight: "bold",
        fontSize: fontSizes.md,
        textAlign: 'center'

      },
})