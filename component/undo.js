import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

export default function Undo({ saves, setSaves, currentSave, setCurrentSave, currentindex, setCurrentIndex }) {
    const future = currentSave.index > 0 && saves.length - 1 > 0
    const past = currentSave.index < 5 && saves.length - 1 > 0

    //these two functions update the index of the current save and also saves automatically the current text to the 0 of saves without waiting for 2 secs
    const forward = () => {
        const newIndex = currentindex - 1
        setCurrentIndex(newIndex)
        setSaves(prev => {
            const newSaves = [newIndex, ...prev]
            return newSaves.slice(0, 5)
        })
        setCurrentSave({ text: saves[newIndex], index: currentindex })


    }
    const backward = () => {
        const newIndex = currentindex + 1
        setCurrentIndex(newIndex)
        setSaves(prev => {
            const newSaves = [newIndex, ...prev]
            return newSaves.slice(0, 5)
        })
        setCurrentSave({ text: saves[newIndex], index: currentindex })



    }
    return (
        <View style={styles.container}>
            {future ? <Pressable hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }} onPress={forward}><Ionicons name='return-down-back-outline' color='black' size={35} /></Pressable> : <Ionicons name='return-down-back-outline' color='grey' size={35} />}

            {past ? <Pressable hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }} onPress={backward}><Ionicons name='return-up-forward-outline' color='black' size={35} /></Pressable> : <Ionicons name='return-up-forward-outline' color='grey' size={35} />}
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