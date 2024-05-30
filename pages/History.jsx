import React from 'react';
import {View} from "react-native";
import Navbar from "../components/Navbar";

const InfoDetail = ({navigation}) => {
    return (
        <>
            <View
                className={'flex-1 justify-center items-center bg-black'}
            >

            </View>
            <Navbar
                navigation={navigation}
                isHistory={true}
            />
        </>
    )
}

export default InfoDetail