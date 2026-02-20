import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator()
export default function navigator() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen>

            </Stack.Screen></Stack.Navigator >
    )
}