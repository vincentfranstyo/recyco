import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View, Image} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import style from "../ui/style";

const dropdown_arrow = require('../assets/images/dropdown_arrow.png');

const OrderForm = () => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [isOrganic, setIsOrganic] = useState(false)
    const [weight, setWeight] = useState('0')
    const [loadSchedule, setLoadSchedule] = useState('')
    const [totalPrice, setTotalPrice] = useState('0')

    const handlePrice = () => {
        if (!isNaN(parseInt(weight))){
            setTotalPrice(totalPrice + weight*1500)
        } else {
            setTotalPrice('0')
        }
    }

    const handleOrganic = () => {
        setIsOrganic(!isOrganic)
    }

    const handleWeightChange = (text) => {
        const intWeight = parseInt(text, 10);
        if (!isNaN(intWeight)) {
            setWeight(intWeight.toString());
        } else {
            setWeight('0'); // or handle invalid input as desired
        }
        handlePrice();
    };

    const loadOptions = [
        '07.00 - 09.00',
        '11.00 - 13.00',
        '16.00 - 18.00'
    ]
    const handleUseMyDetail = (user) => {
        // useUserDetail logic
    }

    return (
        <>
            <View
                className={'flex flex-row bg-transparent w-full max-h-[70%] max-w-full justify-between'}
            >
                <View
                    className={'w-full max-h-[40%] bg-transparent flex justify-center items-center mb-2'}
                >
                    <View
                        className={'flex flex-col justify-between'}
                    >
                        <Text
                        >
                            Detail Pengirim
                        </Text>
                        <TouchableOpacity
                            onPress={handleUseMyDetail}
                            className={"flex w-[33%] h-auto justify-center items-center rounded-xl mr-2"}
                        >
                            <LinearGradient
                                start={{x: 0, y: 0}} end={{x: 1, y: 1}}
                                colors={['#2C6262', '#BE8D62']}
                                className={"w-full rounded-xl justify-center items-center py-2"}>
                                <Text
                                    className={'text-center text-xs text-white'}
                                    style={{fontFamily: 'Poppins'}}
                                >
                                    Pakai detail saya
                                </Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                    <View
                        className={'flex justify-between'}>
                        <View
                            className={'flex justify-between mb-1'}
                        >
                            <Text
                                className={'text-xs text-gray-200'}
                            >
                                Name pengirim*
                            </Text>
                            <TextInput
                                placeholder={'Name Pengirim'}
                                value={name}
                                onChangeText={setName}
                                className={'w-full h-auto bg-transparent border-b-2 border-gray-200 text-sm'}
                            />
                        </View>
                        <View
                            className={'flex justify-between mb-1'}
                        >
                            <Text
                                className={'text-xs text-gray-200'}
                            >
                                Nomor telepon*
                            </Text>
                            <TextInput
                                placeholder={'Nomor telepon'}
                                value={phone}
                                onChangeText={setPhone}
                                className={'w-full h-auto bg-transparent border-b-2 border-gray-200 text-sm'}
                            />
                        </View>
                    </View>
                </View>
                <View
                    className={'w-full max-h-[35%] flex bg-white'}
                    style={style.glow}
                >
                    <View
                        className={'w-full p-2 bg-transparent justify-between flex flex-col'}
                    >
                        <Text
                            className={'text-left text-sm font-bold max-w-[70%]'}
                            style={{fontFamily: 'Poppins-Bold'}}
                        >
                            Apakah sampah sudah dipilah antara organik dan anorganik?
                        </Text>
                        <TouchableOpacity
                            className={'max-w-[25%] bg-white rounded-full border-[#2C6262] border-2 justify-center items-center flex-col'}
                            onPress={handleOrganic}
                        >
                            <Text
                                className={'text-[#2C6262] text-xs'}
                            >
                                {isOrganic ? 'Ya' : 'Tidak'}
                            </Text>
                            <Image
                                source={dropdown_arrow}
                                className={'w-auto h-[10px]'}
                            />
                        </TouchableOpacity>
                    </View>
                    <View
                        className={'w-full p-2 bg-transparent justify-between flex flex-col'}
                    >
                        <Text
                            className={'text-left text-md font-bold max-w-[70%]'}
                            style={{fontFamily: 'Poppins-Bold'}}
                        >
                            Perkiraan berat sampah
                        </Text>
                        <View
                            className={'flex flex-col justify-between'}
                        >
                            <TextInput
                                className={'max-w-[20%] border-b-2 border-gray-200 text-sm'}
                                value={weight.toString()}
                                placeholder={'0'}
                                onChangeText={handleWeightChange}
                            />
                            <Text
                                className={'text-sm text-[#2C6262]'}
                                style={{fontFamily: 'Poppins-Bold'}}
                            >
                                Kg
                            </Text>
                        </View>
                    </View>
                </View>
                <View
                    className={'w-full max-h-[20%] h-full bg-transparent flex flex-col justify-center items-center'}
                >
                    <Text
                        className={'text-lg font-bold text-black max-h-[40%] text-center py-2'}
                        style={{fontFamily: 'Poppins-Bold'}}
                    >
                        Pilih Jadwal Pengangkutan
                    </Text>
                    <View
                        className={'flex flex-col justify-between mx-2'}
                        style={style.glow}
                    >
                        {
                            loadOptions.map((option, index) => (
                                <TouchableOpacity
                                    key={index}
                                    onPress={() => setLoadSchedule(option)}
                                    className={'w-full h-auto bg-white rounded-full justify-center items-center py-2 max-w-[30%]'}
                                >
                                    <Text
                                        className={'text-center text-md text-black'}
                                        style={{fontFamily: 'Poppins'}}
                                    >
                                        {option}
                                    </Text>
                                </TouchableOpacity>
                            ))
                        }
                    </View>
                </View>
                <View
                    className={'w-full max-h-[5%] bg-transparent flex flex-col justify-between items-center'}
                >
                    <View
                        className={'max-w-[30%] flex justify-between items-center bg-transparent'}
                    >
                        <Text
                            className={'text-xs text-black'}
                            style={{fontFamily: 'Poppins-Bold'}}
                        >
                            Total Bayar
                        </Text>
                        <Text
                            className={'text-xs text-gray-200'}
                            style={{fontFamily: 'Poppins-Bold'}}
                            >
                            Rp. {totalPrice}
                        </Text>
                    </View>
                </View>
            </View>
        </>
    )
}

export default OrderForm