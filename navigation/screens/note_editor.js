import react, { useState, useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import NotePad from '../../component/note_pad';
import Undo from '../../component/undo';
import { NoteContext } from '../../context/notes_context_provider';
import { useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native/types_generated/Libraries/Animated/AnimatedExports';
import { TextInput } from 'react-native/types_generated/index';
export default function NoteEditor() {
    const { notes, setNotes, } = useContext(NoteContext)
    const [saves, setSaves] = useState(notes[0].saves) //contains five versions of the note max
    const [currentSave, setCurrentSave] = useState({ text: notes[0].text, index: 0 })
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
            <View style={styles.titelCard}>

                <ScrollView horizontal={true}>
                    <TextInput onChange={(title) => setNotes(prevnotes => prevnotes.map((note) => note.id == 1 ? { ...note, title: title } : note))}></TextInput>
                </ScrollView>

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

    }, titelCard: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },

});
