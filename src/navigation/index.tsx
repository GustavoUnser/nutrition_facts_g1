import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React from "react"
import Home from "../screens/Home"
import Details from "../screens/Details"
import { AppStackParamList } from "./interface"

const Stack = createNativeStackNavigator<AppStackParamList>()

const AppNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
    )
}

export default AppNavigator