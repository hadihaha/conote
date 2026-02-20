
import { StyleSheet, Text, View } from 'react-native';
import NotePad from './component/note_pad';
import NotesContextProvider from './context/notes_context_provider';
export default function App() {
  return (

    <View style={styles.container}>
      <NotesContextProvider> <NotePad /></NotesContextProvider>

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
