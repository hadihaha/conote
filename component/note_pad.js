import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TextInput } from 'react-native'

export default function NotePad({ notes, setnotes, saves, setSaves, currentSave, setCurrentSave, currentIndex, setCurrentIndex }) {

    const autoSave = (newtext) => {
        //saves normally if you havent changed histor( no redo undo)
        if (currentSave.index === 0) {
            setSaves(prev => {
                const newSaves = [newtext, ...prev]
                return newSaves.slice(0, 5)
            })
        }
        //saves after you changed the history it first deletes the future you prevented and reshifts evrything
        else {
            setSaves(saves.toSpliced(0, currentIndex))
            setSaves(prev => {
                const newSaves = [newtext, ...prev]
                return newSaves.slice(0, 5)
            })
            setCurrentIndex(0)
        }

        setnotes(prevnotes => prevnotes.map((note) => note.id == 1 ? { ...note, text: newtext } : note))
    }


    useEffect(() => {
        const saveInterval = setTimeout(() => {
            if (currentSave.index === 0 && currentSave.text?.length > 0) {
                autoSave(currentSave)
                console.log("saved", saves)

            }
        }, 2000);
        return () => {
            console.log("reset", saves)
            clearTimeout(saveInterval)
        }

    }, [currentSave.text])// this updates the saves every 2 seconds of none typing if anything is typed the timer resests

    return (
        <View style={styles.container}>
            <TextInput style={styles.pad} multiline={true} value={currentSave.text || ""}
                onChangeText={(ntext) => setCurrentSave({ text: ntext, index: 0 })} textAlignVertical='top' />

        </View>

    )
}

const styles = StyleSheet.create({
    pad: {
        width: '100%', height: '100%', backgroundColor: '#ffffff', marginTop: '30', marginHorizontal: 5
    }, container: {
        width: '100%', height: '100%',
    }

})
