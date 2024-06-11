import React from 'react';
import {Text, View} from "react-native";
import style from "../ui/style";

const NotFound = () => {
    return (
        <View
            className={'justify-center w-full h-full bg-white items-center'}>
            <Text
                className={'text-black text-center text-2xl'}
                style={{fontFamily: 'Poppins-Medium'}}
            >
                This feature is under development.
            </Text>
        </View>
    );
}

export default NotFound;