import React, { createContext, useState } from 'react'
export const NoteContext = createContext()

export default function NotesContextProvider({ children }) {
    const [notes, setNotes] = useState(
        [{
            title: '',
            text: '',
            saves: [],
            id: 1

        }]
    )
    const value = {
        notes,
        setNotes,
    }

    return (
        <NoteContext.Provider value={value}>{children}</NoteContext.Provider>
    )
}