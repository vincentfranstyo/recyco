import React from 'react';
import {View} from "react-native";
import Options from "../components/Options";
import ProfileHero from "../components/ProfileHero";
import Navbar from "../components/Navbar";
import {FIREBASE_AUTH} from "../FirebaseConfig";
import {useUser} from "../contexts/UserContext";

const Profile = ({navigation}) => {
    const auth = FIREBASE_AUTH;
    const { currentUser } = useUser();
    return (
        <>
            <View
                className={'flex justify-center items-center bg-white max-h-full px-3 h-full'}
            >
                <ProfileHero
                    navigation={navigation}
                />
                <Options
                    navigation={navigation}
                    auth={auth}
                />
            </View>
            <Navbar
                    navigation={navigation}
                    isProfile={true}
                    currentUser={currentUser}
                />
        </>
    )
}

export default Profile