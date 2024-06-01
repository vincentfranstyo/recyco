import React from 'react';
import {View, Image} from "react-native";
import Navbar from "../components/Navbar";

const history = require('../assets/images/history.png')

const History = ({navigation}) => {
    return (
        <>
            <View
                className={'flex-1 justify-center items-center bg-white'}
            >
                {/*<Image*/}
                {/*    source={history}*/}
                {/*    className={'w-screen h-full'}*/}
                {/*    />*/}
            </View>
            <Navbar
                navigation={navigation}
                isHistory={true}
            />
        </>
    )
}

export default History