import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';

const profile_logo = require('../assets/images/profile_img.png');
const home_logo_chosen = require('../assets/images/home_img_chosen.png');
const history_logo = require('../assets/images/history_img.png');
const profile_logo_chosen = require('../assets/images/profile_img_chosen.png');
const home_logo = require('../assets/images/home_img.png');
const history_logo_chosen = require('../assets/images/history_img_chosen.png');

const Navbar = ({navigation, isHome, isProfile, isHistory}) => {
    const handleNavigation = (page) => {
        navigation.navigate(page);
    };

    return (
        <>
            <View
                className={'flex-row justify-between items-center bg-white px-6 py-3'}
                style={style.elevated}
            >
                <TouchableOpacity onPress={() => handleNavigation('HomePage')}>
                    <Image
                        source={isHome ? home_logo_chosen : home_logo}
                        style={styles.logo}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleNavigation('HistoryPage')}>
                    <Image
                        source={isHistory ? history_logo_chosen : history_logo}
                        style={styles.logo}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleNavigation('ProfilePage')}>
                    <Image
                        source={isProfile ? profile_logo_chosen : profile_logo}
                        style={styles.logo}
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
        width: 20,
        height: 20
    }
})

export default Navbar;
