import React, { useEffect } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

const logo = require('../assets/logoText.png');

const LogoPage = ({ navigation }) => {
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            navigation.navigate('IntroPage');
        }, 2000);

        return () => clearTimeout(timeoutId);
    }, [navigation]);

    const handleViewClick = () => {
        navigation.navigate('IntroPage');
    };

    return (
        <TouchableOpacity onPress={handleViewClick} className={'flex-1'}>
            <View className={'flex-1 justify-center items-center bg-white'}>
                <Image source={logo} className={'w-38 h-38'} />
            </View>
        </TouchableOpacity>
    );
};

export default LogoPage;
