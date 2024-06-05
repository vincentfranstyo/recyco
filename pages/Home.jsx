import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'
import Info from "../components/Info";
import Navbar from "../components/Navbar";
import HomeHero from '../components/HomeHero'
import {getUserByUid} from "../api/users";

const testUser = {
    uid: '1',
    username: 'John Doe',
    address: 'Jl. Jend. Sudirman',
    city: 'Jakarta'
}

const HomePage = ({navigation, route}) => {
    const [currentUser, setcurrentUser] = useState({});
    const { uid } = route.params;

    const fetchData = async () => {
        try {
            const user = await getUserByUid(uid);
            setcurrentUser(user);
            console.log("currentuser", currentUser);
        } catch (e) {
            console.error("error fetching user: " + e);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const handleOrderButton = () => {
        navigation.navigate('OrderPage', {currentUser: currentUser})
    }
    return (
        <>
            <View
                className={'flex-col justify-center items-start max-w-[90%] mx-auto mt-0 pt-4 h-screen max-h-[92%] bg-transparent'}
            >
                <HomeHero
                    username={currentUser.fullName}
                    address={currentUser.address}
                    city={currentUser.city}
                />
                <TouchableOpacity
                    onPress={handleOrderButton}
                    className={'flex justify-center items-center max-h-[20%] max-w-full rounded-xl py-2'}
                >
                    <LinearGradient
                        start={{x: 0, y: 0}} end={{x: 1, y: 1}}
                        colors={['#2C6262', '#BE8D62']}
                        className={"max-w-full rounded-xl justify-center items-center px-12"}
                    >
                        <Text
                            className={'w-[90%] max-h-[80%] py-2 justify-center items-center text-center text-sm text-white'}
                            style={{fontFamily: 'Poppins-Black'}}
                        >
                            Salurkan Sampahmu Sekarang!
                        </Text>
                    </LinearGradient>
                </TouchableOpacity>
                <Text
                    className={'text-left text-lg text-black'}
                    style={{fontFamily: 'Poppins-Bold'}}
                >
                    Info Untukmu!
                </Text>

                <Info
                    navigation={navigation}
                    route={route}
                />
            </View>
            <Navbar
                navigation={navigation}
                isHome={true}
                route={route}
                currentUser={currentUser}
            />
        </>
    )
}

export default HomePage;