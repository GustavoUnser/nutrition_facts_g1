import React from "react"
import { ActivityIndicator, View } from "react-native"
import Styles from "./styles"

const Loader = () => {
    return (
        <ActivityIndicator style={Styles.loader} size='large' />
    )
}

export default Loader