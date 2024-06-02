import React from 'react';
import {View} from "react-native";
import Options from "../components/Options";
import ProfileHero from "../components/ProfileHero";
import Navbar from "../components/Navbar";
import {FIREBASE_AUTH} from "../FirebaseConfig";

const Profile = ({navigation, route}) => {
    const auth = FIREBASE_AUTH;
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
                    auth={auth}
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