import React from 'react';
import HomeHero from '../components/HomeHero'
import {Text, TouchableOpacity, View} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'
import Info from "../components/Info";

const HomePage = ({navigation}) => {
    const handleOrderButton = () => {
        navigation.navigate('OrderPage')
    }
    return (
        <>
            <View
                className={'flex-col justify-center items-start max-w-[90%] mx-auto py-4 h-screen bg-transparent'}
            >
                <HomeHero
                    username={'asep'}
                    address={'Jl. Raya Bogor, No. 12'}
                    city={'Kota Bandung, Jawa Barat'}
                />
                <TouchableOpacity
                    onPress={handleOrderButton}
                    className={'flex justify-center items-center max-h-[20%] max-w-full rounded-xl py-2'}
                >
                    <LinearGradient
                        start={{x: 0, y: 0}} end={{x: 1, y: 1}}
                        colors={['#2C6262', '#BE8D62']}
                        className={"max-w-full rounded-xl justify-center items-center px-12"}
                    >
                        <Text
                            className={'w-[90%] max-h-[80%] py-2 justify-center items-center text-center text-sm text-white'}
                            style={{fontFamily: 'Poppins-Black'}}
                        >
                            Salurkan Sampahmu Sekarang!
                        </Text>
                    </LinearGradient>
                </TouchableOpacity>
                <Text
                    className={'text-left text-lg text-black'}
                    style={{fontFamily: 'Poppins-Bold'}}
                >
                    Info Untukmu!
                </Text>

                <Info navigation={navigation}/>
            </View>
        </>

    )
}

export default HomePage;