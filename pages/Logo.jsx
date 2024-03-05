import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const logo = require('../assets/recycoText.png');

const LogoPage = () => {
    const navigation = useNavigation();

    const handleViewClick = () => {
        navigation.navigate('IntroPage');
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
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
});

export default LogoPage;
