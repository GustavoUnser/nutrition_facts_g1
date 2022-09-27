import React from "react"
import { View } from "react-native"
import Styles from "./styles"

const Divider = () => {
    return (
        <View style={Styles.divider} />
    )
}

export default React.memo(Divider)