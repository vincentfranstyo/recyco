import React from 'react'
import {Image, Text, TouchableOpacity, View} from "react-native";

const profpic = require('../assets/images/profpic.png')

const ProfileHero = ({navigation, route}) => {
    const {currentUser} = route.params
    return (
        <>
            <View
                className={'flex flex-col justify-center items-center bg-white max-h-[50%] my-3'}
            >
                <Image
                    source={profpic}
                    className={'w-[120px] h-[120px] rounded-full my-2'}
                />
                <View
                    className={'flex justify-center items-center my-2'}
                >
                    <Text
                        className={'text-xl mb-2 text-center text-black'}
                        style={{fontFamily: 'Poppins-Black'}}
                    >
                        {currentUser.fullName}
                    </Text>
                    <TouchableOpacity
                        className={'flex justify-center items-center mb-2'}
                        onPress={() => navigation.navigate('EditProfilePage', {currentUser: currentUser})}
                    >
                        <Text
                            className={'text-xs underline'}
                            style={{fontFamily: 'Poppins'}}
                        >
                            edit profil
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}

export default ProfileHero;