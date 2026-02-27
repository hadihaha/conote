import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TextInput } from 'react-native'

export default function NotePad({ notes, setnotes, saves, setSaves, currentSave, setCurrentSave }) {

    const autoSave = (newtext) => {
        setSaves(prev => {
            const newSaves = [newtext, ...prev]
            return newSaves.slice(0, 5)
        })

        setnotes(prevnotes => prevnotes.map((note) => note.id == 1 ? { ...note, text: newtext } : note))
    }


    useEffect(() => {
        setCurrentSave(notes[0].text)
        setSaves(notes[0].saves)
    }, []) // puts the contents of the notes in the saves on mount and delete all the saves{needs update once tabs are added}

    useEffect(() => {
        const saveInterval = setTimeout(() => {
            if (currentSave.length > 0) {
                autoSave(currentSave)
                console.log("saved", notes, saves)

            }
        }, 2000);
        return () => {
            console.log("reset", notes)
            clearTimeout(saveInterval)
        }

    }, [currentSave])// this updates the saves every 2 seconds of none typing if anything is typed the timer resests

    return (
        <View style={styles.container}>
            <TextInput style={styles.pad} multiline={true} value={currentSave || ""}
                onChangeText={setCurrentSave} textAlignVertical='top' />

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
