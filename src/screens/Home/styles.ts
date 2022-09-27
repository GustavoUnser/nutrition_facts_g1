import { StyleSheet } from "react-native"

const Styles = StyleSheet.create({
    wrapper: {
        flex: 0,
        alignItems: "center",
        alignContent: "center",
    },
    input: {
        backgroundColor: '#DDDDDD',
        borderWidth: 2,
        borderColor: '#A9B2AC',
        borderRadius: 8,
        color: 'black',
        width: 350,
        marginStart: 6,
        marginEnd: 6,
        marginTop: 12,
        marginBottom: 12,
        textAlign: 'center',
    },
    textWrapper: {
        flex: 0,
        alignSelf: 'flex-start',
        backgroundColor: '#DCE5FF',
        width: 350,
        height: 60,
        marginStart: 50,
        marginEnd: 50,
        marginTop: 16,
        marginBottom: 16,
        borderColor: '#C1D0FF',
        borderRadius: 8,
        borderWidth: 4,
    },
    text: {
        color: 'black',
        fontSize: 24,
        fontWeight: "500",
        padding: 4,
    }
})

export default Styles