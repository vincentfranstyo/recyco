import React from 'react';
import {Image, TouchableOpacity, View, StyleSheet} from 'react-native';

const profile_logo = require('../assets/images/profile_img.png');
const home_logo = require('../assets/images/home_img.png');
const history_logo = require('../assets/images/history_img.png');

const Navbar = ({navigation}) => {
    const handleHomeButton = () => {
        navigation.navigate('HomePage')
    }
    const handleHistoryButton = () => {
        navigation.navigate('HistoryPage')
    }

    const handleProfileButton = () => {
        navigation.navigate('ProfilePage')
    }
    return (
        <>
            <View
                className={'flex-row justify-between items-center bg-white px-6 py-3'}
                style={style.elevated}
            >
                <TouchableOpacity
                    onPress={handleHomeButton}
                >
                    <Image
                        source={home_logo}
                        className={'w-5 h-5'}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={handleHistoryButton}
                >
                    <Image
                        source={history_logo}
                        className={'w-5 h-5'}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={handleProfileButton}
                >
                    <Image
                        source={profile_logo}
                        className={'w-5 h-5'}
                    />
                </TouchableOpacity>
            </View>
        </>
    )
}

const style = StyleSheet.create({
    elevated: {
        shadowColor: '#2C6262',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.7,
        shadowRadius: 10,
        elevation: 10,
    }
})

export default Navbar;
