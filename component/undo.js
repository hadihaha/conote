import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

export default function Undo({ saves, setSaves, currentSave, setCurrentSave, currentindex, setCurrentIndex }) {
    const future = currentSave.index > 0 && saves.length - 1 > 0
    const past = currentSave.index < saves.length - 1 && saves.length - 1 > 0

    //these two functions update the index of the current save and also saves automatically the current text to the 0 of saves without waiting for 2 secs

    const forward = () => {
        const newIndex = currentindex - 1
        setCurrentIndex(newIndex)

        setCurrentSave({ text: saves[newIndex], index: newIndex })
        console.log("forward", currentSave, saves, currentindex, saves[currentindex])


    }
    const backward = () => {
        const newIndex = currentindex + 1
        setCurrentIndex(newIndex)

        setCurrentSave({ text: saves[newIndex], index: newIndex })
        console.log("back", currentSave, saves, currentindex, saves[currentindex])


    }
    return (
        <View style={styles.container}>
            <Pressable disabled={!future}
                hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}
                onPress={forward}>
                <Ionicons name='return-down-back-outline'
                    color={future ? 'black' : 'gray'}
                    size={35} />
            </Pressable>

            <Pressable disabled={!past}
                hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}
                onPress={backward}>
                <Ionicons name='return-up-forward-outline'
                    color={past ? 'black' : 'gray'}
                    size={35} />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        width: 100,
        height: 40,
    }
})