import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TextInput } from 'react-native/types_generated/index'

export default function note_pad() {
    const [saves, setSaves] = useState([]) //make this into a log for the saves every save into an array at [0] its the current text on te page before on change then 1 is the the previous save and 2 is the one befor that we have 4 saves in total
    useEffect(() => {

    }, [])// this update every interval of time it puts the current stuff in the context state and updates the save state and puts the text that was in the context state and puts it in [1] of the save state and shits everything. it also works when the users exits
    return (
        <View>
            <TextInput ></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({})