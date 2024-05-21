import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, TextInput, StyleSheet} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'

const login_logo = require('../assets/images/login_logo.png');
const google_icon = require('../assets/images/google_icon.png');
const visibility_lock = require('../assets/images/visibility_lock.png');

const LoginPage = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const handleLogin = () => {
        // Handle login logic
    };

    const handleRegistration = () => {
        navigation.navigate('RegistrationPage');
    }

    const handleGoogleLogin = () => {
        // Handle login with Google logic
    };
    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };
    return (
        <>
            <View class={"Logo"}
                  className={'flex-1 justify-center items-center bg-white max-h-[30%]'}
            >
                <View
                    className={'flex-1 h-[20%]'}
                >
                </View>
                <Image
                    source={login_logo}
                    className={'flex-1 justify-center items-center w-auto max-h-10'}
                />
            </View>
            <View class={"inputLoginContainer"}
                  className={'flex-1 justify-start items-center bg-white pt-20'}
            >
                <View class={"inputContainer"}
                      className={'flex-1 justify-start items-center w-[80%] h-auto'}
                >
                    <TextInput
                        className={'w-full p-3 mb-4 bg-gray-100 rounded-lg'}
                        placeholder="E-mail"
                        keyboardType="email-address"
                        value={email}
                        onChangeText={setEmail}
                    />
                    <View class="PasswordInput"
                          className="w-full flex-row items-center p-3 mb-4 bg-gray-100 rounded-lg"
                    >
                        <TextInput
                            className="flex-1"
                            placeholder="Password"
                            secureTextEntry={!isPasswordVisible}
                            value={password}
                            onChangeText={setPassword}
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
                    <TouchableOpacity
                        class={"ForgetPassword"}
                        className={"w-full flex-row justify-end"}
                    >
                        <Text
                            className={'text-right text-[10px] text-black underline'}
                            style={{fontFamily: 'Poppins'}}
                        >
                            Lupa kata sandi?
                        </Text>
                    </TouchableOpacity>
                    <View class={"LoginButtonContainer"}
                          className={"flex-row w-full mt-2.5"}
                    >
                        <TouchableOpacity
                            class={"GoogleLoginButton"}
                            onPress={handleGoogleLogin}
                            className={"flex-row max-w-[63%] h-auto rounded-xl bg-white pb-2 pr-2 justify-center items-center"}
                            style={styles.glow}
                        >
                            <Image
                                source={google_icon}
                                className={"w-[20px] h-[20px] m-2.5 mt-3"}
                            />
                            <Text
                                className={'text-center mt-2.5 text-xs text-[#2C6262]'}
                                style={{fontFamily: 'Poppins'}}
                            >
                                Login with Google
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={handleLogin}
                            className={"flex w-[33%] h-auto justify-center items-center rounded-xl ml-4"}
                        >
                            <LinearGradient
                                start={{x: 0, y: 0}} end={{x: 1, y: 1}}
                                colors={['#2C6262', '#BE8D62']}
                                className={"w-full rounded-xl justify-center items-center py-2"}>
                                <Text
                                    className={'text-center text-md text-white'}
                                    style={{fontFamily: 'Poppins-Black'}}
                                >
                                    Login
                                </Text>

                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                    <View
                        className={"flex-row mt-2.5 w-full justify-center items-center"}
                    >
                        <Text
                            className={"text-xs"}
                            style={{fontFamily: 'Poppins'}}
                        >
                            Belum punya akun?
                        </Text>
                        <TouchableOpacity
                            onPress={handleRegistration}
                            className={"ml-1"}
                        >
                            <Text
                                className={"text-[#2C6262] underline text-xs"}
                                style={{fontFamily: 'Poppins-Bold'}}
                            >
                                Daftar disini
                            </Text>
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
    }
})

export default LoginPage;