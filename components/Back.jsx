import React from 'react';
import {Image, Text, TouchableOpacity, View, StyleSheet} from 'react-native';

const back_button = require('../assets/images/back_button.png');

const Back = ({navigation, text}) => {
    const handleBack = () => {
        navigation.goBack();
    }
    return (
        <>
            <View
                className={'flex-row justify-start items-center bg-white pt-10 mb-2 w-full max-h-[20%]'}
            >
                <TouchableOpacity
                    onPress={handleBack}
                    className={'flex flex-col rounded-full w-full h-full justify-center items-center bg-white max-w-[10%] max-h-[80%]'}
                    style={styles.backButton}
                >
                    <Image
                        source={back_button}
                        className={'w-[25px] h-[25px] ml-2'}
                    />
                </TouchableOpacity>
                <Text
                    className={'flex flex-col text-center text-xl text-[#2C6262] ml-3 mt-1'}
                    style={{fontFamily: 'Poppins-Bold'}}
                >
                    {text}
                </Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    backButton: {
        shadowColor: '#2C6262',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.7,
        shadowRadius: 10,
        elevation: 10,
    }
})

export default Back;
