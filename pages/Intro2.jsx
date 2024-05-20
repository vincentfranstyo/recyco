import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {useFonts} from 'expo-font';
import {create} from 'tailwindcss-react-native';

const {tailwind} = create(require('../tailwind.config'));

const landing_2_bg = require('../assets/images/landing_2_bg.png');
const landing_2 = require('../assets/images/landing_2.png');
const arrow_forward = require('../assets/images/arrow_forward.png');

const Intro2Page = ({navigation, route}) => {
    const [fontsLoaded] = useFonts({
        'Poppins-Black': require('../assets/fonts/Poppins/Poppins-Black.ttf'),
        'Poppins-Bold': require('../assets/fonts/Poppins/Poppins-Bold.ttf'),
        'Poppins': require('../assets/fonts/Poppins/Poppins-Regular.ttf'),
    });

    const handleViewClick = () => {
        // navigation.navigate('Intro2Page', { page: 'Intro2Page' });
    };

    if (!fontsLoaded) {
        return null;
    }

    return (
        <TouchableOpacity onPress={handleViewClick} style={tailwind('flex-1')}>
            <View style={tailwind('flex-1 justify-center items-center bg-white')}>
                <View style={tailwind('flex-1 justify-center items-center')}>
                    <Image source={landing_2_bg} style={tailwind('absolute w-100 h-100')}/>
                    <Image source={landing_2} style={tailwind('absolute w-69 h-69 top-49')}/>
                </View>
                <View style={tailwind('flex-1 justify-start items-center px-5')}>
                    <Text style={[tailwind('text-center mt-5 text-lg'), {fontFamily: 'Poppins-Black'}]}>
                        Yuk salur sampahmu!
                    </Text>
                    <Text style={[tailwind('text-center mt-7 text-sm'), {fontFamily: 'Poppins'}]}>
                        Dengan menyalurkan sampahmu ke Recyco, sampahmu akan dikelola dan kamu hanya perlu membayar
                        dengan harga yang terjangkau!
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

export default Intro2Page;
