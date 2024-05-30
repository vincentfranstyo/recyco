import React from 'react';
import {View, Image, Text} from "react-native";
import style from '../ui/style'

const order_hero_img = require('../assets/images/order_hero_img.png');

const OrderHero = ({route}) => {
    const {orderDetail} = route.params;

    return (
        <>
            <View
                className={'flex bg-transparent max-h-[30%] w-full max-w-full'}
                style={style.glow}
            >
                <View
                    className={'w-full p-2 bg-transparent justify-between flex'}
                >
                    <Image
                        className={'w-full h-[100px]'}
                        source={order_hero_img}
                    />
                    <View
                        className={'w-full'}
                    >
                        <Text
                            className={'text-left text-lg font-bold'}
                            style={{fontFamily: 'Poppins-Bold'}}
                        >
                            {orderDetail.address}
                        </Text>
                        <Text
                            className={'text-justify text-sm font-bold'}
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