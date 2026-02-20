import React, { createContext, useState } from 'react'
export const NoteContext = createContext()

export default function NotesContextProvider({ children }) {
    const [note, setNote] = useState(
        [{
            title: '',
            text: 'hhhhhh',
            id: ''

        }]
    )
    const value = {
        note,
        setNote,
    }
    return (
        <NoteContext.Provider value={value}>{children}</NoteContext.Provider>
    )
}