import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import getDimensions from "../utils/utils";

const logo = require('../assets/recycoText.png');

const { width, height } = getDimensions();

const LogoPage = ({navigation}) => {
    const handleViewClick = () => {
        navigation.navigate('IntroPage', {page: 'IntroPage'});
    };

    return (
        <TouchableOpacity onPress={handleViewClick}>
            <View style={styles.container}>
                <Image source={logo} style={styles.image}/>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        width: width,
        height: height,
        marginTop: height / 2
    },
    image: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
    },
});

export default LogoPage;
