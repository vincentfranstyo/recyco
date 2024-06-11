import {StyleSheet} from "react-native";

const style = StyleSheet.create({
    glow: {
        shadowColor: '#2C6262',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 5,
    },
    elevated: {
        shadowColor: '#2C6262',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.7,
        shadowRadius: 10,
        elevation: 10,
    },
    scrollable: {
        flexGrow: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    hr: {
        height: 2,
        width: '75%',
        backgroundColor: '#2C6262',
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    line: {
        height: 2,
        marginTop: 2,
    },
    regular: {
        fontFamily: 'Poppins_400Regular',
    },
    bold: {
        fontFamily: 'Poppins_700Bold',
    },
    medium: {
        fontFamily: 'Poppins_500Medium'
    },
    extraBold: {
        fontFamily: 'Poppins_800ExtraBold',
    },
    black: {
        fontFamily: 'Poppins_900Black',
    },
    backButton: {
        shadowColor: '#2C6262',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.7,
        shadowRadius: 10,
        elevation: 10,
    }
})

export default style;