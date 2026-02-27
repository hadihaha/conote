
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NoteEditor from './screens/note_editor';
import NotesContextProvider from '../context/notes_context_provider';
const Stack = createNativeStackNavigator()
export default function Navigator() {
    return (
        <NotesContextProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">

                    <Stack.Screen name={"Home"} component={NoteEditor} />





                </Stack.Navigator >
            </NavigationContainer>

        </NotesContextProvider>
    )
}