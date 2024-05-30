import React from 'react';
import {SafeAreaView} from "react-native";
import Back from "../components/Back";
import OrderHero from "../components/OrderHero";
import OrderForm from "../components/OrderForm"

const Order = ({navigation, route}) => {
    return (
        <SafeAreaView
            className={'flex-1 justify-center items-center w-full bg-white max-h-max max-w-full'}
        >
            <Back
                navigation={navigation}
                text={'Order'}
            />
            <OrderHero
                route={route}
            />
            <OrderForm/>
        </SafeAreaView>
    )
}

export default Order