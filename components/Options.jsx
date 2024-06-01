import React from 'react';
import {Image, Text, View} from "react-native";
import style from "../ui/style";

const setting = require('../assets/images/settings.png')
const FAQ = require('../assets/images/FAQ.png')
const help = require('../assets/images/help.png')
const changePassword = require('../assets/images/lock.png')
const delAcc = require('../assets/images/delete.png')
const arrow = require('../assets/images/goto_arrow.png')

const options = [
    {
        img: setting,
        title: 'Pengaturan'
    },
    {
        img: FAQ,
        title: 'FAQ'
    },
    {
        img: help,
        title: 'Bantuan'
    },
    {
        img: changePassword,
        title: 'Ubah Password'
    },
    {
        img: delAcc,
        title: 'Hapus Akun'
    }
]

const Options = ({navigation}) => {
    return (
        <>
            {options.map((option, index) => (
                    <View
                        key={index}
                        className={'flex flex-col justify-between items-center bg-white w-full p-3 max-h-[50%]'}
                    >
                        {index === 1 ?
                            <View
                                style={style.hr}
                            >
                            </View> : null
                        }
                        <View
                            className={'flex flex-row justify-between items-center w-full max-h-full'}
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
                        </View>
                        <View
                            style={style.hr}
                        ></View>
                    </View>
                )
            )}
        </>
    )
}

export default Options