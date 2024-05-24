import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import HomeHero from '../components/HomeHero'

const HomePage = ({navigation}) => {
    const handleOrderButton = () => {
        navigation.navigate('OrderPage')
    }
    return (
        <HomeHero />

    )

}

const style = StyleSheet.create({

})

export default HomePage;