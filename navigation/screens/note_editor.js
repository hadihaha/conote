import react, { useState, useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import NotePad from '../../component/note_pad';
import Undo from '../../component/undo';
import { NoteContext } from '../../context/notes_context_provider';
import { useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
export default function NoteEditor() {
    const { notes, setNotes, } = useContext(NoteContext)
    const [saves, setSaves] = useState([]) //contains five versions of the notes max
    const [currentSave, setCurrentSave] = useState({ text: "", index: 0 })
    const [currentIndex, setCurrentIndex] = useState(0)
    //auto save on exit off screen

    console.log(saves.length)
    useFocusEffect(
        useCallback(() => {
            console.log('Screen focused');
            return () => {
                setNotes((prevnotes) => prevnotes.map((note) => note.id == 1 ? { ...note, text: currentSave.text } : note))
                console.log('Screen unfocused ');
            }
        }, [])
    )


    return (

        <SafeAreaView style={styles.container}>
            <View style={styles.undoContainer}>
                <Text>meta data</Text>
                <Undo saves={saves}
                    setSaves={setSaves}
                    currentSave={currentSave}
                    setCurrentSave={setCurrentSave}
                    currentindex={currentIndex}
                    setCurrentIndex={setCurrentIndex} />
            </View>

            <NotePad notes={notes}
                setnotes={setNotes}
                saves={saves}
                setSaves={setSaves}
                currentSave={currentSave}
                setCurrentSave={setCurrentSave} />

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {

        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    }, undoContainer: {
        gap: '50%',
        flexDirection: 'row',
        paddingTop: 35,
        justifyContent: 'flex-end',
        width: '100%',
        height: 'auto'

    },
});
