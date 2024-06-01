import React from 'react';
import {View} from "react-native";
import Options from "../components/Options";
import ProfileHero from "../components/ProfileHero";
import Navbar from "../components/Navbar";

const Profile = ({navigation, route}) => {
    return (
        <>
            <View
                className={'flex justify-center items-center bg-white max-h-full px-3 h-full'}
            >
                <ProfileHero
                    navigation={navigation}
                    route={route}
                />
                <Options
                    navigation={navigation}
                />
            </View>
            <Navbar
                    navigation={navigation}
                    isProfile={true}
                    route={route}
                />
        </>
    )
}

export default Profile