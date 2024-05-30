import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, TextInput, StyleSheet} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

const back_button = require('../assets/images/back_button.png');
const forgetPassword = require('../assets/images/forgetpassword_img.png');

const ForgotPassword = ({navigation}) => {
    const [email, setEmail] = useState('');
    const handleBack = () => {
        navigation.navigate('LoginPage');
    }
    const sendConfirmationEmail = () => {
        // Handle send confirmation email logic
    }
    return (
        <>
            <View
                className={'flex-1 flex-col justify-center items-center bg-white max-h-[60%] pt-[25%]'}
            >
                <View
                    className={'flex-row justify-start items-start w-full h-auto bg-white max-h-[20%] ml-5'}
                >
                    <TouchableOpacity
                        onPress={handleBack}
                        className={'flex rounded-full w-full h-auto py-2.5 justify-center items-center bg-white max-w-[10%]'}
                        style={styles.backButton}
                    >
                        <Image
                            source={back_button}
                            className={'w-[25px] h-[25px] ml-3'}
                        />
                    </TouchableOpacity>
                    <Text
                        className={'text-center text-xl text-[#2C6262] ml-3 mt-1'}
                        style={{fontFamily: 'Poppins-Bold'}}
                    >
                        Lupa Kata Sandi
                    </Text>
                </View>
                <View
                    className={'flex justify-center items-center bg-white h-full'}
                >
                    <Image
                        source={forgetPassword}
                        className={'flex-1 justify-center items-center w-auto h-full'}
                    />
                    <Text
                        className={'flex-1 justify-center text-center items-center w-auto max-w-[90%] text-sm mt-5 h-full'}
                    >
                        Masukkan email, dan kami akan mengirimkan kamu email untuk mengatur ulang konfirmasi kata sandi
                    </Text>
                </View>
            </View>
            <View
                className={'flex-1 justify-start items-center bg-white pt-5'}
            >
                <View
                    className={'flex-1 justify-start items-center w-[80%] h-auto'}
                >
                    <TextInput
                        className={'w-full p-3 mb-4 bg-gray-100 rounded-lg'}
                        placeholder="E-mail"
                        keyboardType="email-address"
                        value={email}
                        onChangeText={setEmail}
                        style={{fontFamily: 'Poppins'}}
                    />
                </View>
                <TouchableOpacity
                    onPress={sendConfirmationEmail}
                    className={"flex w-[33%] mt-0 justify-center items-center rounded-xl"}
                >
                    <LinearGradient
                        start={{x: 0, y: 0}} end={{x: 1, y: 1}}
                        colors={['#2C6262', '#BE8D62']}
                        className={"w-full rounded-xl justify-center items-center py-2 mb-auto"}>
                        <Text
                            className={'text-center text-md text-white'}
                            style={{fontFamily: 'Poppins-Black'}}
                        >
                            Send
                        </Text>

                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    glow: {
        shadowColor: '#2C6262',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.7,
        shadowRadius: 10,
        elevation: 10,
    },
    backButton: {
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.7,
        shadowRadius: 10,
        elevation: 10,
    }
})

export default ForgotPassword;