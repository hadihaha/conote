import react, { useState, useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import NotePad from '../../component/note_pad';
import { NoteContext } from '../../context/notes_context_provider';
import { useContext } from 'react'

export default function NoteEditor() {
    const {
        notes,
        setNotes,
    } = useContext(NoteContext)
    const [saves, setSaves] = useState([]) //contains five versions of the notes max
    const [currentSave, setCurrentSave] = useState("")
    //auto save on exit off screen
    //useFocusEffect(
    //useCallback(() => {
    //console.log('Screen focused');
    //return () => {
    //setNotes((prevnotes) => prevnotes.map((note) => note.id == id ? { ...note, text: newtext } : note))
    //console.log('Screen unfocused ');
    //}
    //}, [])
    //)
    return (

        <View style={styles.container}>
            <NotePad notes={notes} setnotes={setNotes} saves={saves} setSaves={setSaves} currentSave={currentSave} setCurrentSave={setCurrentSave} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
