
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NoteEditor from './screens/note_editor';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import NotesContextProvider from '../context/notes_context_provider';
const Stack = createNativeStackNavigator()
export default function Navigator() {
    return (
        <SafeAreaProvider>
            <NotesContextProvider>
                <NavigationContainer>
                    <Stack.Navigator initialRouteName="Home" >

                        <Stack.Screen name={"Home"} component={NoteEditor} options={{ headerShown: false }} />





                    </Stack.Navigator >
                </NavigationContainer>

            </NotesContextProvider>
        </SafeAreaProvider>
    )
}