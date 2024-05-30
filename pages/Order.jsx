import React from 'react';
import {SafeAreaView, View} from "react-native";
import Back from "../components/Back";
import OrderHero from "../components/OrderHero";
import OrderForm from "../components/OrderForm"

const Order = ({navigation, route}) => {
    return (
        <View
            className={'flex w-screen bg-white h-full p-5'}
        >
            <Back
                navigation={navigation}
                text={'Order'}
            />
            <OrderHero
                route={route}
            />
            <OrderForm
                navigation={navigation}
                route={route}
            />
        </View>
    )
}

export default Order