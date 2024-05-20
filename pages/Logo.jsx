import React, { useEffect } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { create } from 'tailwindcss-react-native';

const { tailwind, getColor } = create(require('../tailwind.config'));

const logo = require('../assets/logoText.png');

const LogoPage = ({ navigation }) => {
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            navigation.navigate('IntroPage', { page: 'IntroPage' });
        }, 2000);

        return () => clearTimeout(timeoutId);
    }, [navigation]);

    const handleViewClick = () => {
        navigation.navigate('IntroPage', { page: 'IntroPage' });
    };

    return (
        <TouchableOpacity onPress={handleViewClick} style={tailwind('flex-1')}>
            <View style={tailwind('flex-1 justify-center items-center bg-white')}>
                <Image source={logo} style={tailwind('w-38 h-38')} />
            </View>
        </TouchableOpacity>
    );
};

export default LogoPage;

