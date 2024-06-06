import React from 'react';
import {View} from "react-native";
import Back from "../components/Back";
import InfoDetailComp from "../components/InfoDetailComp";

const InfoDetail = ({route, navigation}) => {
    return (
        <View style={{flex: 1, backgroundColor: 'white'}}>
            <Back
                style={{paddingHorizontal: 15}}
                text={'Info Detail'}
                navigation={navigation}
            />
            <InfoDetailComp
                route={route}
            />
        </View>
    )
}

export default InfoDetail