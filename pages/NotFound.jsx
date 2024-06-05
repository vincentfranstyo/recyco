import React from 'react';
import {Text, View} from "react-native";

const NotFound = () => {
    return (
        <View
            className={'justify-center w-screen h-screen bg-white items-center'}>
            <Text
                className={'text-black text-center text-2xl'}
            >
                404 Not Found
            </Text>
        </View>
    );
}

export default NotFound;