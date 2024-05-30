import React from 'react';
import {View} from "react-native";
import Navbar from "../components/Navbar";

const Profile = ({navigation}) => {
    return (
        <>
            <View
                className={'flex-1 justify-center items-center bg-black'}
            >

            </View>
            <Navbar
                navigation={navigation}
                isProfile={true}
            />
        </>
    )
}

export default Profile