import React from 'react';
import {Text, TouchableOpacity, View, Image} from "react-native";

import order_made from '../assets/images/order_made.png';

const OrderConfirmation = ({navigation}) => {
    const handleBackToHome = () => {
        navigation.navigate('HomePage')
    }
    return (
        <>
            <View
                className={'flex w-screen bg-white h-full p-5 justify-center items-center'}
            >
                <Image
                    source={order_made}
                    className={'w-screen h-auto'}
                />
                <TouchableOpacity
                    onPress={handleBackToHome}
                    className={'flex flex-row text-center text-2xl mt-5'}
                >
                    <Text
                        className={'mr-1 text-[#2C6262] underline'}
                        style={{fontFamily: 'Poppins'}}
                    >
                        Kembali ke
                    </Text>
                    <Text
                        className={'text-[#2C6262] underline'}
                        style={{fontFamily: 'Poppins-Bold'}}
                    >
                        Beranda
                    </Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default OrderConfirmation;