import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';

const profile_logo = require('../assets/images/profile_img.png');
const home_logo_chosen = require('../assets/images/home_img_chosen.png');
const history_logo = require('../assets/images/history_img.png');
const profile_logo_chosen = require('../assets/images/profile_img_chosen.png');
const home_logo = require('../assets/images/home_img.png');
const history_logo_chosen = require('../assets/images/history_img_chosen.png');

const Navbar = ({navigation, isHome = false, isProfile = false, isHistory = false}) => {
    const handleNavigation = (page) => {
        navigation.navigate(page);
    };

    return (
        <>
            <View
                className={'flex-row justify-between items-center bg-white px-6 py-1 max-h-[80%] absolute bottom-0 w-full'}
                style={style.elevated}
            >
                <TouchableOpacity
                    onPress={() => handleNavigation('HistoryPage')}
                    className={'flex bg-white justify-center items-center p-2 max-h-full'}
                >
                    <Image
                        source={isHistory ? history_logo_chosen : history_logo}
                        className={`${isHistory ? 'w-[60px] h-[70px]' : 'w-[40px] h-[55px]'} `}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => handleNavigation('HomePage')}
                    className={'flex bg-white justify-center items-center p-2 max-h-full'}
                >
                    <Image
                        source={isHome ? home_logo_chosen : home_logo}
                        className={`${isHome ? 'w-[60px] h-[70px]' : 'w-[45px] h-[60px]'} `}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => handleNavigation('ProfilePage')}
                    className={'flex bg-white justify-center items-center p-2 max-h-full'}
                >
                    <Image
                        source={isProfile ? profile_logo_chosen : profile_logo}
                        className={`${isProfile ? 'w-[60px] h-[70px]' : 'w-[33px] h-[58px]'} `}
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
    },
    logo: {
        width: 25,
        height: 25
    }
})

export default Navbar;
