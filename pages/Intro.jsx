import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {useFonts} from 'expo-font';
import {create} from 'tailwindcss-react-native';

const {tailwind} = create(require('../tailwind.config'));

const landing_1_bg = require('../assets/images/landing_1_bg.png');
const landing_1 = require('../assets/images/landing_1.png');
const arrow_forward = require('../assets/images/arrow_forward.png');

const IntroPage = ({navigation, route}) => {
    const [fontsLoaded] = useFonts({
        'Poppins-Black': require('../assets/fonts/Poppins/Poppins-Black.ttf'),
        'Poppins-Bold': require('../assets/fonts/Poppins/Poppins-Bold.ttf'),
        'Poppins': require('../assets/fonts/Poppins/Poppins-Regular.ttf'),
    });

    const handleViewClick = () => {
        navigation.navigate('Intro2Page', {page: 'Intro2Page'});
    };

    if (!fontsLoaded) {
        return null;
    }

    return (
        <TouchableOpacity onPress={handleViewClick} style={tailwind('flex-1')}>
            <View style={tailwind('flex-1 justify-center items-center bg-white')}>
                <View style={tailwind('flex-1 justify-center items-center')}>
                    <Image source={landing_1_bg} style={tailwind('absolute w-100 h-100')}/>
                    <Image source={landing_1} style={tailwind('absolute w-69 h-69 top-43')}/>
                </View>
                <View style={tailwind('flex-1 justify-start items-center px-6')}>
                    <Text style={[tailwind('text-center mt-5 text-lg'), {fontFamily: 'Poppins-Black'}]}>
                        Selamat datang di Recyco
                    </Text>
                    <Text style={[tailwind('text-center mt-7 text-sm'), {fontFamily: 'Poppins'}]}>
                        Recyco adalah aplikasi penanggulangan sampah yang akan membantu dalam hal pengelolaan sampah.
                    </Text>
                </View>
                <View
                    style={tailwind('absolute bottom-30 bg-green-700 justify-center items-center rounded-full w-10 h-10')}>
                    <Image source={arrow_forward} style={tailwind('w-7 h-7')}/>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default IntroPage;
