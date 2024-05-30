import React from 'react';
import {View, Image, Text} from "react-native";
import style from '../ui/style'

const order_hero_img = require('../assets/images/order_hero_img.png');

const OrderHero = ({route}) => {
    const {orderDetail} = route.params;

    return (
        <>
            <View
                className={'flex bg-white rounded-lg max-h-[35%] w-full max-w-full relative'}
                style={style.glow}
            >
                <View
                    className={'w-full p-3 bg-transparent justify-between flex'}
                >
                    <Image
                        className={'w-full h-[125px] rounded-lg mb-2.5'}
                        source={order_hero_img}
                    />
                    <View
                        className={'w-full'}
                    >
                        <Text
                            className={'text-left text-md'}
                            style={{fontFamily: 'Poppins-Bold'}}
                        >
                            {orderDetail.address}
                        </Text>
                        <Text
                            className={'text-justify text-xs'}
                            style={{fontFamily: 'Poppins'}}
                        >
                            {orderDetail.city}
                        </Text>
                    </View>
                </View>
            </View>
        </>
    )
}

export default OrderHero;