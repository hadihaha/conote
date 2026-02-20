import React, { createContext, useState } from 'react'
const Context = createContext()

export default function context_provider({ children }) {
    const [note, setNote] = useState(
        [{
            title: '',
            text: '',
            id: ''

        }]
    )
    const value = {
        note,
        setNote,
    }
    return (
        <Context.Provider value={value}>{children}</Context.Provider>
    )
}