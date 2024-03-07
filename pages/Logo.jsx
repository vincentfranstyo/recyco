import React, {useEffect} from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import getDimensions from "../utils/utils";

const logo = require('../assets/logoText.png');

const {width, height} = getDimensions();

const LogoPage = ({navigation}) => {
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            navigation.navigate('IntroPage', {page: 'IntroPage'});
        }, 2000);

        return () => clearTimeout(timeoutId);
    }, [navigation]);

    const handleViewClick = () => {
        navigation.navigate('IntroPage', {page: 'IntroPage'});
    };

    return (
        <TouchableOpacity onPress={handleViewClick} style={styles.touchableContainer}>
            <View style={styles.container}>
                <Image source={logo} style={styles.image}/>
            </View>
        </TouchableOpacity>
    );
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
    image: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
    },
});

export default LogoPage;
