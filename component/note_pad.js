import { StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TextInput } from 'react-native'
import { useContext } from 'react'
import NotesContext from '../context/notes_context_provider'
export default function NotePad() {
    const { notes, setnotes } = useContext(NotesContext)
    const [saves, setSaves] = useState(["", "", "", ""]) //make this into a log for the saves every save into an array at [0] its the current text on te page before on change then 1 is the the previous save and 2 is the one befor that we have 4 saves in total
    const autoSave = (text) => {
        const newSaves = saves.map((item, index) => {
            if (index === 0) {
                return text
            }
            return item
        })

        setSaves(newSaves)
    }
    useEffect(() => { setSaves([notes.text, "", "", ""]) }, []) // puts the contents of the notes in the saves on mount and delete all the saves{needs update once tabs are added}
    useEffect(() => {

    }, [])// this updates every interval of time it puts the current stuff in the context state and updates the save state and puts the text that was in the context state and puts it in [1] of the save state and shits everything. it also works when the users exits
    return (
        <View style={styles.container}>
            <TextInput style={styles.pad} multiline={true} value={saves[0]}
                onChange={(text) => autoSave(text)} textAlignVertical='top' />

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

//when you press a tab that state is gonna get put in [0] of the save state and everything is going to be reset 