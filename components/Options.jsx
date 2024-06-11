import React, {useState} from 'react';
import {Alert, Dimensions, Image, Modal, Text, TouchableOpacity, View} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import {useUser} from "../contexts/UserContext";

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
        navigation: 'NotFoundPage'
    },
    {
        img: FAQ,
        title: 'FAQ',
        navigation: 'NotFoundPage'
    },
    {
        img: help,
        title: 'Bantuan',
        navigation: 'NotFoundPage'
    },
    {
        img: changePassword,
        title: 'Ubah Password',
        navigation: 'NotFoundPage'
    },
    {
        img: delAcc,
        title: 'Hapus Akun',
        navigation: 'NotFoundPage'
    }
]

const Options = ({navigation, auth}) => {
    const {currentUser, updateUser} = useUser();
    const [isModalVisible, setModalVisible] = useState(false);
    const [user, setUser] = useState(currentUser);
    const handleNavigateOption = (option) => {
        navigation.navigate(option)
    }

    const handleLogoutButton = () => {
        toggleModal()
    }

    const handleLogout = () => {
        auth.signOut()
            .then(() => {
                // updateUser(null);
                navigation.navigate('LoginPage')
                console.log('Logout Success')
                Alert.alert('Logout Success')

            })
            .catch((error) => {
                console.error(error)
                Alert.alert('Logout Failed' + error.message)
            })
    }

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    return (
        <>
            {options.map((option, index) => (
                    <View
                        key={index}
                        className={'flex flex-col justify-between items-center bg-white w-full px-3 py-3 max-h-[50%]'}
                    >
                        <TouchableOpacity
                            className={'flex flex-row justify-between items-center w-full max-h-full'}
                            onPress={() => handleNavigateOption(option.navigation)}
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
                    </View>
                )
            )}
            <TouchableOpacity
                onPress={handleLogoutButton}
                className={"flex w-[33%] h-auto justify-center items-center rounded-xl ml-4 mt-0 mb-14"}
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

            <Modal
                animationType="slide"
                transparent={true}
                visible={isModalVisible}
                onRequestClose={handleLogoutButton}
            >
                <View className="bg-white p-5 mt-auto rounded-lg">
                    <Text className="text-lg font-bold mb-4">Confirm Logout</Text>
                    <Text className="text-base mb-4">Are you sure you want to logout?</Text>
                    <View className="flex-row justify-center gap-x-10">
                        <TouchableOpacity
                            onPress={handleLogout}
                            className="px-4 py-2 bg-[#2C6262] rounded-lg"
                        >
                            <Text className="text-white">Yes</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={handleLogoutButton}
                            className="px-4 py-2 bg-[#BE8D62] rounded-lg"
                        >
                            <Text className="text-white">No</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </>
    )
}

export default Options