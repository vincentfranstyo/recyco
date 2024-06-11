import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'
import Info from "../components/Info";
import Navbar from "../components/Navbar";
import HomeHero from '../components/HomeHero'
import {useUser} from "../contexts/UserContext";
import LoadingScreen from "../components/LoadingScreen"

const HomePage = ({navigation, route}) => {
    const {currentUser} = useUser();

    const handleOrderButton = () => {
        navigation.navigate('OrderPage', {currentUser: currentUser})
    }

    if (!currentUser) {
        return (
            <LoadingScreen/>
        )
    }

    return (
        <SafeAreaView
            style={{flex: 1, backgroundColor: 'transparent'}}
        >
            <View
                style={{flex: 1}}
                className={'flex-col justify-center items-center max-w-full mx-auto px-3 pt-4 h-screen max-h-[91%] bg-white'}
            >
                <HomeHero
                    username={currentUser.fullName}
                    address={currentUser.address}
                    city={currentUser.city}
                    navigation={navigation}
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
                <View
                    className={'flex w-screen justify-start h-auto px-5'}
                >
                    <Text
                        className={'text-left text-lg text-black'}
                        style={{fontFamily: 'Poppins-Bold'}}
                    >
                        Info Untukmu!
                    </Text>
                </View>

                <Info
                    navigation={navigation}
                />
            </View>
            <Navbar
                navigation={navigation}
                isHome={true}
                currentUser={currentUser}
            />
        </SafeAreaView>
    )
}

export default HomePage;