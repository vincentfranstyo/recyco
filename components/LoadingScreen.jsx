import {SafeAreaView, Text, View} from "react-native";
import React from "react";

const LoadingScreen = () => {
    return (
        <SafeAreaView
            style={{flex: 1, backgroundColor: 'transparent'}}
        >
            <View
                style={{flex: 1}}
                className={'flex-col justify-center items-start max-w-[90%] mx-auto mt-0 pt-4 h-screen max-h-[92%] bg-transparent'}
            >
                <Text
                    className={'text-left text-lg text-black'}
                    style={{fontFamily: 'Poppins-Bold'}}
                >
                    Loading...
                </Text>
            </View>
        </SafeAreaView>
    )
}

export default LoadingScreen;