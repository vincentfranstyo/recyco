import React from 'react';
import {Image, Text, TouchableOpacity, View} from "react-native";
import style from "../ui/style";
import {LinearGradient} from "expo-linear-gradient";

const setting = require('../assets/images/settings.png')
const FAQ = require('../assets/images/FAQ.png')
const help = require('../assets/images/help.png')
const changePassword = require('../assets/images/lock.png')
const delAcc = require('../assets/images/delete.png')
const arrow = require('../assets/images/goto_arrow.png')

const options = [
    {
        img: setting,
        title: 'Pengaturan',
        navigation: 'Setting'
    },
    {
        img: FAQ,
        title: 'FAQ',
        navigation: 'FAQ'
    },
    {
        img: help,
        title: 'Bantuan',
        navigation: 'Help'
    },
    {
        img: changePassword,
        title: 'Ubah Password',
        navigation: 'ChangePassword'
    },
    {
        img: delAcc,
        title: 'Hapus Akun',
        navigation: 'DeleteAccount'
    }
]

const Options = ({navigation}) => {
    const handleNavigateOption = (option) => {
        navigation.navigate(option)
    }
    return (
        <>
            {options.map((option, index) => (
                    <View
                        key={index}
                        className={'flex flex-col justify-between items-center bg-white w-full px-3 py-3 max-h-[50%]'}
                    >
                        {/*{index === 0 ?*/}
                        {/*    <View*/}
                        {/*        className={'mb-2'}*/}
                        {/*        style={style.hr}*/}
                        {/*    >*/}
                        {/*    </View> : null*/}
                        {/*}*/}
                        <TouchableOpacity
                            className={'flex flex-row justify-between items-center w-full max-h-full'}
                            onPress={() => handleNavigateOption(option.title)}
                        >
                            <Image
                                source={option.img}
                                className={'w-10 h-10'}
                            />
                            <Text
                                className={'text-sm text-black max-w-[80%]'}
                                style={{fontFamily: 'Poppins'}}
                            >
                                {option.title}
                            </Text>
                            <Image
                                source={arrow}
                                className={'w-5 h-5'}
                            />
                        </TouchableOpacity>
                        {/*<View*/}
                        {/*    className={'mt-3'}*/}
                        {/*    style={style.hr}*/}
                        {/*></View>*/}
                    </View>
                )
            )}
            <TouchableOpacity
                onPress={() => handleNavigateOption('Logout')}
                className={"flex w-[33%] h-auto justify-center items-center rounded-xl ml-4 my-10"}
            >
                <LinearGradient
                    start={{x: 0, y: 0}} end={{x: 1, y: 1}}
                    colors={['#2C6262', '#BE8D62']}
                    className={"w-full rounded-xl justify-center items-center py-2"}>
                    <Text
                        className={'text-center text-md text-white'}
                        style={{fontFamily: 'Poppins-Black'}}
                    >
                        Logout
                    </Text>
                </LinearGradient>
            </TouchableOpacity>
        </>
    )
}

export default Options