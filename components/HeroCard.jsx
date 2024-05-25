import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useFonts} from "expo-font";


const HeroCard = ({title, img, sub, sub2}) => {
    const [fontsLoaded] = useFonts({
        'Poppins-Black': require('../assets/fonts/Poppins/Poppins-Black.ttf'),
        'Poppins-Bold': require('../assets/fonts/Poppins/Poppins-Bold.ttf'),
        'Poppins': require('../assets/fonts/Poppins/Poppins-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View
            className={`bg-white p-2 rounded-xl shadow-md max-w-full mx-auto max-h-full`}
            style={style.glow}
        >
            {title ? (
                <View
                    className={'flex-col justify-between items-start'}
                >
                    <View
                        className={'flex flex-row justify-between items-between max-h-[43%] w-full my-auto'}
                    >
                        <Text
                            className={'text-xs text-[#2C6262]'}
                            style={{fontFamily: 'Poppins-Bold'}}
                        >
                            {title}
                        </Text>

                        <TouchableOpacity
                            className={'h-full border-[#2C6262] border rounded-xl p-2'}
                        >
                            <Text
                                className={'text-[#2C6262] text-xs text-center'}
                                style={{fontFamily: 'Poppins'}}
                            >
                                Ubah
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={style.horizontalLine} />
                    <View
                        className={'flex-col justify-between items-start max-h-[55%] w-full my-auto'}
                    >
                        <Text
                            className={'text-xs'}
                            style={{fontFamily: 'Poppins'}}
                        >
                            {sub}
                        </Text>
                        <Text
                            className={'text-xs'}
                        >
                            {sub2}
                        </Text>
                    </View>

                </View>
            ) : (
                <View
                    className={'flex flex-col justify-between items-start w-full my-auto'}
                >

                    <Image
                        source={img}
                        className={'w-max'}
                    />
                    <View style={style.horizontalLine} />
                    <Text
                        className={'text-xs text-[#2C6262] mt-2'}
                        style={{fontFamily: 'Poppins-Bold'}}
                    >
                        {sub}
                    </Text>
                </View>)}
        </View>
    )
}

const style = StyleSheet.create({
    glow: {
        shadowColor: '#2C6262',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 10,
    },
    horizontalLine: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        alignSelf: 'center',
        backgroundColor: 'black'
    }
})

export default HeroCard;