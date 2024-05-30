import React, {useState} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View, StyleSheet} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
// import firebase from '../firebaseConfig'

const login_logo = require('../assets/images/login_logo.png');
const visibility_lock = require('../assets/images/visibility_lock.png');
const back_button = require('../assets/images/back_button.png');

const RegistPage = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [instanceName, setInstanceName] = useState('');
    const [fullName, setFullName] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
    const handleRegister = () => {
        // console.log(firebase);
        navigation.navigate('LoginPage')
    };

    const handleShortPassword = () => {
        if (password.length === 0) return false;
        return password.length < 8;
    }

    const handleBack = () => {
        navigation.navigate('LoginPage');
    }

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const toggleConfirmPasswordVisibility = () => {
        setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
    }

    const isPasswordMatch = () => {
        if (passwordConfirmation.length === 0) return true;
        return password === passwordConfirmation;
    }
    return (
        <>
            <View
                className={'flex-1 flex-col justify-center items-center bg-white max-h-[30%]'}
            >
                <View
                    className={'flex-row justify-start items-start w-full h-auto bg-white max-h-[20%] ml-5 mt-[15%]'}
                >
                    <TouchableOpacity
                        onPress={handleBack}
                        className={'flex rounded-full w-full h-full justify-center items-center bg-white max-w-[10%]'}
                        style={styles.backButton}
                    >
                        <Image
                            source={back_button}
                            className={'w-[25px] h-[25px] ml-2'}
                        />
                    </TouchableOpacity>
                    <Text
                        className={'text-center text-xl text-[#2C6262] ml-3 mt-1'}
                        style={{fontFamily: 'Poppins-Bold'}}
                    >
                        Daftar Akun
                    </Text>
                </View>

                <View
                    className={'flex justify-center items-center bg-white max-h-[25%] mt-auto'}
                >
                    <Image
                        source={login_logo}
                        className={'flex-1 justify-center items-center w-auto h-auto max-h-10'}
                    />
                </View>
            </View>
            <View
                className={'flex-1 justify-start items-center bg-white pt-5'}
            >
                <View
                    className={'flex-1 justify-start items-center w-[80%] h-auto'}
                >
                    <TextInput
                        className={'w-full p-3 mb-4 bg-gray-100 rounded-lg text-xs'}
                        placeholder="E-mail"
                        keyboardType="email-address"
                        value={email}
                        onChangeText={setEmail}
                        style={{fontFamily: 'Poppins'}}
                    />
                    <TextInput
                        className={'w-full p-3 mb-4 bg-gray-100 rounded-lg text-xs'}
                        placeholder="Nama Instansi (opsional)"
                        keyboardType="default"
                        value={instanceName}
                        onChangeText={setInstanceName}
                        style={{fontFamily: 'Poppins'}}
                    />
                    <TextInput
                        className={'w-full p-3 mb-4 bg-gray-100 rounded-lg text-xs'}
                        placeholder="Nama Lengkap"
                        keyboardType="default"
                        value={fullName}
                        onChangeText={setFullName}
                        style={{fontFamily: 'Poppins'}}
                    />
                    <View class="PasswordInput"
                          className={`w-full flex-row items-center p-3 bg-gray-100 rounded-lg ${handleShortPassword() ? null: 'mb-4'}`}
                    >
                        <TextInput
                            className="flex-1 text-xs"
                            placeholder="Password more than 8 letters"
                            secureTextEntry={!isPasswordVisible}
                            value={password}
                            onChangeText={setPassword}
                            style={{fontFamily: 'Poppins'}}
                        />
                        <TouchableOpacity
                            onPress={togglePasswordVisibility}
                        >
                            <Image
                                source={visibility_lock}
                                className="w-[20px] h-[20px] ml-2"
                            />
                        </TouchableOpacity>
                    </View>
                    {
                        handleShortPassword() ?
                            <View
                                className="w-full flex-row items-center mb-2"
                            >
                                <Text
                                    className={'text-xs text-red-500'}
                                    style={{fontFamily: 'Poppins'}}
                                >
                                    Password harus lebih dari 8 karakter
                                </Text>
                            </View> : null
                    }
                    <View
                          className={`w-full flex-row justify-between items-center p-3 bg-gray-100 rounded-lg ${isPasswordMatch() ? 'mb-4': null}`}
                    >
                        <TextInput
                            className="flex text-xs"
                            placeholder="Confirm Password"
                            secureTextEntry={!isConfirmPasswordVisible}
                            value={passwordConfirmation}
                            onChangeText={setPasswordConfirmation}
                            style={{fontFamily: 'Poppins'}}
                        />
                        <TouchableOpacity
                            onPress={toggleConfirmPasswordVisibility}
                        >
                            <Image
                                source={visibility_lock}
                                className="w-[20px] h-[20px] ml-2"
                            />
                        </TouchableOpacity>
                    </View>
                    {
                        isPasswordMatch() ? null :
                            <View
                                  className="w-full flex-row items-center"
                            >
                                <Text
                                    className={'text-xs text-red-500'}
                                    style={{fontFamily: 'Poppins'}}
                                >
                                    Password tidak sama
                                </Text>
                            </View>
                    }
                    <View
                        className={"flex-row flex-end w-full mt-2.5"}
                    >
                        <TouchableOpacity
                            onPress={handleRegister}
                            className={"flex w-[33%] h-auto justify-center items-center rounded-xl ml-auto"}
                        >
                            <LinearGradient
                                start={{x: 0, y: 0}} end={{x: 1, y: 1}}
                                colors={['#2C6262', '#BE8D62']}
                                className={"w-full rounded-xl justify-center items-center py-2"}>
                                <Text
                                    className={'text-center text-md text-white'}
                                    style={{fontFamily: 'Poppins-Black'}}
                                >
                                    Register
                                </Text>

                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </>
    );
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

export default RegistPage;