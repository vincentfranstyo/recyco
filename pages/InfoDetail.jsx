import React from 'react';
import {View} from "react-native";
import Back from "../components/Back";
import InfoDetail from "../components/InfoDetail";

const InfoDetail = () => {
    return (
        <>
            <View
                className={'flex flex-col justify-center items-center bg-transparent max-h-max w-full max-w-full'}
            >
                <Back
                    text={'Info Detail'}
                />
                <InfoDetail />
            </View>
        </>
    )
}

export default InfoDetail