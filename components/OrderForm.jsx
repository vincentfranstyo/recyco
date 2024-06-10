import React, { useEffect, useState } from 'react';
import { Alert, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import style from "../ui/style";
import { addOrder } from "../api/orders";
import { useUser } from '../contexts/UserContext';

const dropdown_arrow = require('../assets/images/dropdown_arrow.png');

const OrderForm = ({ navigation}) => {
    const { currentUser, updateUser } = useUser();
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [isOrganic, setIsOrganic] = useState(false);
    const [weight, setWeight] = useState('0');
    const [loadSchedule, setLoadSchedule] = useState('');
    const [totalPrice, setTotalPrice] = useState('0');

    const handleSelectLoadOptionButton = (option) => {
        setLoadSchedule(option);
    };

    const handlePrice = (weight, isOrganic) => {
        if (!isNaN(parseInt(weight)) && parseInt(weight) > 0) {
            setTotalPrice(((weight * 1500) + (isOrganic ? 0 : 5000)).toString());
        } else {
            setTotalPrice('0');
        }

        if (weight > 100) {
            Alert.alert('Error', 'Berat sampah tidak boleh lebih dari 100 Kg');
            setWeight('0');
            setTotalPrice('0');
        }
    };

    const handleOrganic = () => {
        setIsOrganic(!isOrganic);
    };

    useEffect(() => {
        handlePrice(weight, isOrganic);
    }, [weight, isOrganic]);

    const handleWeightChange = (weight) => {
        if (!isNaN(weight)) {
            setWeight(weight.toString());
        } else {
            setWeight('0');
        }
        handlePrice(weight, isOrganic);
    };

    const loadOptions = [
        '07.00 - 09.00',
        '11.00 - 13.00',
        '16.00 - 18.00'
    ];

    const handleUseMyDetail = () => {
        setName(currentUser.fullName);
        setPhone(currentUser.phoneNumber);
    };

    const handleOrder = async () => {
        if (name === '' || phone === '' || weight === '0' || loadSchedule === '') {
            Alert.alert('Please fill all the form');
            return;
        }

        if (totalPrice !== weight * 1500 + (isOrganic ? 0 : 5000)) {
            setTotalPrice((weight * 1500 + (isOrganic ? 0 : 5000)).toString());
        }

        const order = {
            uid: currentUser.uid,
            name: name,
            phone: phone,
            isOrganic: isOrganic,
            weight: weight,
            loadSchedule: loadSchedule,
            totalPrice: totalPrice,
            date: new Intl.DateTimeFormat('id-ID', {
                timeZone: 'Asia/Jakarta',
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
            }).format(new Date()),
            time: new Intl.DateTimeFormat('id-ID', {
                timeZone: 'Asia/Jakarta',
                hour: '2-digit',
                minute: '2-digit'
            }).format(new Date())
        };

        await addOrder(order)
            .then(() => {
                console.log('Order added successfully\n', order);
            })
            .catch((error) => {
                console.error('Error adding order: ', error);
                Alert.alert('Error adding order', error.message);
            });

        const updatedUserData = {
            balance: currentUser.balance - totalPrice,
            points: currentUser.points + 30
        };

        await updateUser(currentUser.uid, updatedUserData)
            .then(() => {
                // console.log('User updated successfully\n');
                console.log('Balance updated successfully\n', updatedUserData.balance);
                console.log('Points updated successfully\n', updatedUserData.points);
            })
            .catch((error) => {
                console.error('Error updating user: ', error);
                Alert.alert('Error updating user', error.message);
            });

        navigation.navigate('OrderConfirmationPage', { order: order });
    };

    return (
        <>
            <View className={'flex bg-transparent w-full max-h-[70%] max-w-full justify-between py-5'}>
                <View className={'w-full max-h-[40%] max-w-full bg-transparent flex justify-center items-center mb-2'}>
                    <View className={'flex flex-row justify-between max-w-full w-full px-2'}>
                        <Text className={'text-sm text-black'} style={{ fontFamily: 'Poppins-Bold' }}>
                            Detail Pengirim
                        </Text>
                        <TouchableOpacity onPress={handleUseMyDetail} className={"flex w-[33%] h-auto justify-center items-center rounded-xl mr-2"}>
                            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#2C6262', '#BE8D62']} className={"w-full rounded-full justify-center items-center py-2"}>
                                <Text className={'text-center text-[8px] text-white'} style={{ fontFamily: 'Poppins' }}>
                                    Pakai detail saya
                                </Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                    <View className={'flex justify-between w-full px-2'}>
                        <View className={'flex justify-start items-start w-full mb-2'}>
                            <Text className={'text-[10px] text-gray-200'}>
                                Nama pengirim*
                            </Text>
                            <TextInput placeholder={'Nama Pengirim'} value={name} onChangeText={setName} keyboardType={'default'} className={'w-full h-auto bg-transparent border-b-2 border-gray-200 text-xs'} />
                        </View>
                        <View className={'flex justify-between mb-2'}>
                            <Text className={'text-[10px] text-gray-200'}>
                                Nomor telepon*
                            </Text>
                            <TextInput keyboardType={'phone-pad'} placeholder={'Nomor telepon'} value={phone} onChangeText={setPhone} className={'w-full h-auto bg-transparent border-b-2 border-gray-200 text-xs'} />
                        </View>
                    </View>
                </View>
                <View className={'w-full max-h-[35%] flex bg-white rounded-xl'} style={style.glow}>
                    <View className={'w-full p-2 bg-transparent justify-between flex flex-row'}>
                        <Text className={'text-left text-[10px] max-w-[70%]'} style={{ fontFamily: 'Poppins-Bold' }}>
                            Apakah sampah sudah dipilah antara organik dan anorganik?
                        </Text>
                        <TouchableOpacity className={'max-w-[25%] w-[25%] bg-white rounded-full border-[#2C6262] border-2 justify-between items-center flex flex-row px-3'} onPress={handleOrganic}>
                            <Text className={'text-[#2C6262] text-xs'}>
                                {isOrganic ? 'Ya' : 'Tidak'}
                            </Text>
                            <Image source={dropdown_arrow} className={'w-auto h-[10px]'} />
                        </TouchableOpacity>
                    </View>
                    <View className={'w-full p-2 bg-transparent justify-between flex flex-row'}>
                        <Text className={'text-left text-xs max-w-[65%] text-[#2C6262] pt-1'} style={{ fontFamily: 'Poppins-Black' }}>
                            Perkiraan berat sampah
                        </Text>
                        <View className={'flex flex-row justify-between max-w-[30%] bg-transparent items-center'}>
                            <TextInput className={'border-b-2 border-gray-200 text-center text-sm mx-3'} value={weight} placeholder={'0'} onChangeText={handleWeightChange} min={0} max={100} keyboardType={'number-pad'} />
                            <Text className={'text-sm text-[#2C6262]'} style={{ fontFamily: 'Poppins-Bold' }}>
                                Kg
                            </Text>
                        </View>
                    </View>
                </View>
                <View className={'w-full max-h-[20%] h-full bg-transparent flex flex-col justify-center items-center max-w-full'}>
                    <Text className={'text-md text-black max-h-[40%] text-center py-2'} style={{ fontFamily: 'Poppins-Bold' }}>
                        Pilih Jadwal Pengangkutan
                    </Text>
                    <View className={'flex flex-row justify-between max-w-full w-full'}>
                        {loadOptions.map((option, index) => (
                            <TouchableOpacity key={index} onPress={() => handleSelectLoadOptionButton(option)} className={`w-full h-auto bg-white rounded-full justify-center items-center py-2 max-w-[30%] ${loadSchedule === option ? 'bg-gray-200' : 'bg-white'}`} style={style.glow}>
                                <Text className={'text-center text-[10px] text-black '} style={{ fontFamily: 'Poppins' }}>
                                    {option}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
                <View className={'w-full max-h-[20%] bg-transparent flex flex-row justify-between items-start px-2'}>
                    <View className={'max-w-[40%] flex justify-between items-start bg-transparent'}>
                        <Text className={'text-xs text-black'} style={{ fontFamily: 'Poppins-Bold' }}>
                            Total Bayar
                        </Text>
                        <Text className={'text-xs text-gray-400'} style={{ fontFamily: 'Poppins-Bold' }}>
                            Rp. {totalPrice}
                        </Text>
                    </View>
                    <TouchableOpacity onPress={handleOrder} className={"flex w-[50%] h-full justify-center items-center rounded-full"}>
                        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#2C6262', '#BE8D62']} className={"w-full rounded-xl justify-center items-center py-1.5"}>
                            <Text className={'text-center text-sm text-white'} style={{ fontFamily: 'Poppins-Black' }}>
                                Pesan
                            </Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
};

export default OrderForm;
