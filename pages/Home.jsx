import React from 'react';
import {SafeAreaView, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'
import Info from "../components/Info";
import Navbar from "../components/Navbar";
import HomeHero from '../components/HomeHero'

const HomePage = ({navigation, route}) => {
    const currentUser = route.params.currentUser;

    const handleOrderButton = () => {
        navigation.navigate('OrderPage', {currentUser: currentUser})
    }

    return (
        <SafeAreaView
            style={{flex: 1, backgroundColor: 'transparent'}}
        >
                <View
                    style={{flex: 1}}
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
        </SafeAreaView>
    )
}

export default HomePage;