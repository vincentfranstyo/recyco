import React from 'react';
import {View} from "react-native";
import Back from "../components/Back";
import InfoDetailComp from "../components/InfoDetailComp";

const InfoDetail = ({route, navigation}) => {
    return (
        <>
            <View
                className={'flex flex-col justify-start items-center bg-white max-h-max w-full max-w-full'}
            >
                <Back
                    text={'Info Detail'}
                    navigation={navigation}
                />
                <InfoDetailComp
                    route={route}
                />
            </View>
        </>
    )
}

export default InfoDetail