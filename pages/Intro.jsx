import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

const landing_1 = require('../assets/images/landing_1.png');
const arrow_forward = require('../assets/images/arrow_forward.png');

const IntroPage = ({navigation}) => {
    const handleViewClick = () => {
        navigation.navigate('Intro2Page');
    };

    return (
        <TouchableOpacity
            onPress={handleViewClick}
            className={'flex-1'}
        >
            <View
                className={'flex-1 justify-center items-center bg-white'}
            >
                <View
                    className={'flex-1 justify-center items-center'}
                >
                    <Image
                        source={landing_1}
                        className={'absolute w-[400px] h-[400px]'}
                    />
                </View>
                <View
                    className={'flex-1 justify-start items-center px-6'}
                >
                    <Text
                        className={'text-center mt-5 text-lg'}
                        style={{fontFamily: 'Poppins-Black'}}
                    >
                        Selamat datang di Recyco
                    </Text>
                    <Text
                        className={'text-center mt-7 text-sm'}
                        style={{fontFamily: 'Poppins'}}
                    >
                        Recyco adalah aplikasi penanggulangan sampah yang akan membantu dalam hal pengelolaan sampah.
                    </Text>
                </View>
                <View
                    className={'absolute bottom-30 bg-green-700 justify-center items-center rounded-full w-10 h-10'}
                >
                    <Image
                        source={arrow_forward}
                        className={'w-7 h-7'}
                    />
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default IntroPage;
