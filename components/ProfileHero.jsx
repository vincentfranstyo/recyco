import React, { useState } from 'react';
import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import style from "../ui/style";
import { useUser } from '../contexts/UserContext';
// import {updateUser} from "../api/users";

const profpic = require('../assets/images/profpic.png');
const stars = require('../assets/images/stars.png');
const discount = require('../assets/images/discount.png');
const credit_score = require('../assets/images/credit_score.png');
const add_card = require('../assets/images/add_card.png');

const ProfileHero = ({ navigation}) => {
    const { currentUser, updateUser } = useUser();
    const [user, setUser] = useState(currentUser);

    const handleTopUp = async () => {
        const updatedUser = {
            ...user,
            balance: user.balance + 30000
        };

        await updateUser(user.uid, updatedUser)
            .then(() => {
                setUser(updatedUser);
                console.log('Balance updated successfully', updatedUser.balance);
                Alert.alert('Balance updated', 'Your balance has been updated successfully. Your current balance is ' + updatedUser.balance + '.');
            })
            .catch((error) => {
                console.error('Error updating balance: ', error);
                Alert.alert('Error updating balance', error.message);
            });
    };

    const handleWithdraw = () => {
        navigation.navigate('NotFoundPage');
    };

    return (
        <>
            <View className={'flex flex-col justify-center items-center bg-white max-h-[50%] my-3'}>
                <Image
                    source={profpic}
                    className={'w-[120px] h-[120px] rounded-full my-2'}
                />
                <View className={'flex justify-center items-center my-2'}>
                    <Text
                        className={'text-xl mb-2 text-center text-black'}
                        style={{ fontFamily: 'Poppins-Bold' }}
                    >
                        {user.fullName}
                    </Text>
                    <TouchableOpacity
                        className={'flex justify-center items-center mb-2'}
                        onPress={() => navigation.navigate('NotFoundPage')}
                    >
                        <Text
                            className={'text-xs underline'}
                            style={{ fontFamily: 'Poppins' }}
                        >
                            edit profil
                        </Text>
                    </TouchableOpacity>
                </View>
                <View className={'flex flex-row justify-between items-center'}>
                    <LinearGradient
                        start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
                        colors={['#2C6262', '#BE8D62']}
                        className={"flex flex-row w-[50%] h-10 rounded-full justify-start items-center mr-3"}
                    >
                        <View className={'flex flex-row justify-center items-center bg-white rounded-full max-w-10 max-h-10 m-0.5'}>
                            <Image
                                source={stars}
                                className={'w-9 h-9'}
                            />
                        </View>
                        <Text
                            className={'text-center text-xs text-white ml-6'}
                            style={{ fontFamily: 'Poppins-Bold' }}
                        >
                            {user.points} points
                        </Text>
                    </LinearGradient>
                    <TouchableOpacity
                        className={"flex w-[40%] h-10 justify-center items-center rounded-full"}
                        onPress={() => navigation.navigate('NotFoundPage')}
                    >
                        <LinearGradient
                            start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
                            colors={['#2C6262', '#BE8D62']}
                            className={"flex flex-row w-full rounded-full justify-start items-center h-full"}
                        >
                            <View className={'flex flex-row justify-center items-center bg-white rounded-full w-9 h-9 m-0.5'}>
                                <Image
                                    source={discount}
                                    className={'w-8 h-8'}
                                />
                            </View>
                            <Text
                                className={'text-center text-xs text-white ml-2.5'}
                                style={{ fontFamily: 'Poppins-Bold' }}
                            >
                                Vouchers
                            </Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
                <View className={'flex flex-row justify-center items-center mt-3 bg-white rounded-xl w-[90%] max-h-20 h-fit'} style={style.glow}>
                    <View className={'flex flex-col justify-center items-center w-1/2 h-full'}>
                        <Text className={'text-[10px] text-left text-gray-400'} style={{ fontFamily: 'Poppins' }}>
                            Kantong Recyco
                        </Text>
                        <Text className={'text-xs text-center text-[#2C6262]'} style={{ fontFamily: 'Poppins-Bold' }}>
                            Rp. {user.balance}
                        </Text>
                    </View>
                    <View className={'flex flex-row justify-center items-center w-1/2 h-[95%] border-2 border-[#2C6262] rounded-xl m-0.5'}>
                        <TouchableOpacity className={'flex flex-col justify-center items-center w-1/2 h-10 bg-transparent border-r-2 border-[#2C6262]'} onPress={handleWithdraw}>
                            <Image source={credit_score} className={'w-7 h-7'} />
                            <Text className={'text-xs text-center text-[#2C6262]'} style={{ fontFamily: 'Poppins-Medium' }}>
                                Tarik
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity className={'flex-col justify-center items-center w-1/2 h-10 bg-transparent'} onPress={handleTopUp}>
                            <Image source={add_card} className={'w-7 h-7'} />
                            <Text className={'text-xs text-center text-[#2C6262]'} style={{ fontFamily: 'Poppins-Medium' }}>
                                Isi
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </>
    );
};

export default ProfileHero;
