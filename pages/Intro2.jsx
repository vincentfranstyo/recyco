import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import getDimensions from "../utils/utils";
import {useFonts} from 'expo-font';


const {width, height} = getDimensions()

const landing_2_bg = require('../assets/images/landing_2_bg.png')
const landing_2 = require('../assets/images/landing_2.png');
const arrow_forward = require('../assets/images/arrow_forward.png')

const Intro2Page = ({navigation, route}) => {
    const [fontsLoaded] = useFonts({
        'Poppins-Black': require('../assets/fonts/Poppins/Poppins-Black.ttf'),
        'Poppins-Bold': require('../assets/fonts/Poppins/Poppins-Bold.ttf'),
        'Poppins': require('../assets/fonts/Poppins/Poppins-Regular.ttf'),
    });
    const handleViewClick = () => {
        // navigation.navigate('Intro2Page', {page: 'Intro2Page'});
    };

    if (!fontsLoaded) {
        return null;
    }

    return (
        <TouchableOpacity onPress={handleViewClick} style={styles.touchableContainer}>
            <View style={styles.container}>
                <View style={styles.imgContainer}>
                    <Image source={landing_2_bg} style={styles.landingBg}/>
                    <Image source={landing_2} style={styles.landingImage}/>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>Yuk salur sampahmu!</Text>
                    <Text style={styles.sub}>Dengan menyalurkan sampahmu ke Recyco, sampahmu akan dikelola dan kamu hanya perlu membayar dengan harga yang terjangkau! </Text>
                </View>
                <View style={styles.navButton}>
                    <Image source={arrow_forward} style={styles.arrow}/>
                </View>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    touchableContainer: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        width: width,
        height: height,
    },
    textContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
    },
    title: {
        fontFamily: 'Poppins-Black',
        textAlign: 'center',
        fontWeight: '100',
        fontSize: 18,
        marginTop: 20,
    },
    sub: {
        fontFamily: 'Poppins',
        textAlign: 'center',
        fontSize: 12,
        marginTop: 30,
    },
    imgContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    landingImage: {
        position: 'absolute',
        width: 276,
        height: 276,
        resizeMode: 'contain',
        top: 198,
    },
    landingBg: {
        position: 'absolute',
        width: 400,
        height: 400,
        resizeMode: 'cover',
    },
    navButton: {
        position: 'absolute',
        bottom: 120,
        backgroundColor: '#017C37',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        width: 40,
        height: 40,
    },
    arrow: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
    },
});

export default Intro2Page;
