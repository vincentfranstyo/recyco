import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

const landing_2 = require('../assets/images/landing_2.png');
const arrow_forward = require('../assets/images/arrow_forward.png');

const Intro2Page = ({navigation}) => {

    const handleViewClick = () => {
        navigation.navigate('LoginPage');
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
                        source={landing_2}
                        className={'absolute w-[400px] h-[400px]'}
                    />
                </View>
                <View
                    className={'flex-1 justify-start items-center px-5'}
                >
                    <Text
                        className={'text-center mt-5 text-lg'}
                        style={{fontFamily: 'Poppins-Black'}}
                    >
                        Yuk salur sampahmu!
                    </Text>
                    <Text
                        className={'text-center mt-7 text-sm'}
                        style={{fontFamily: 'Poppins'}}
                    >
                        Dengan menyalurkan sampahmu ke Recyco, sampahmu akan dikelola dan kamu hanya perlu membayar
                        dengan harga yang terjangkau!
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

export default Intro2Page;
