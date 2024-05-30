import React from 'react';
import {Image, ScrollView, Text, View, StyleSheet} from 'react-native';

const InfoDetail = ({route}) => {
    const {info} = route.params;
    return (
        <>
            <View
                className={'flex flex-col justify-center items-center bg-transparent max-h-max w-full max-w-full'}
            >
                <Image
                    source={info.img}
                    className={'w-[100%] h-[200px]'}
                />
                <ScrollView
                    className={'w-[100%] h-[100%] bg-transparent p-5'}
                    contentContainerStyle={style.scrollable}
                >
                    <Text
                        className={'text-left text-xl text-[#2C6262] w-[100%] max-h-[10%] my-3'}
                        style={{fontFamily: 'Poppins-Black'}}
                    >
                        {info.sub}
                    </Text>
                    <Text
                        className={'text-left text-xs text-black mt-5 px-5 w-[100%] max-h-[90%] mb-5'}
                        style={{fontFamily: 'Poppins-Regular'}}
                    >
                        {info.text}
                    </Text>
                </ScrollView>
            </View>
        </>
    )
}

const style = StyleSheet.create({
    scrollable: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'transparent',
    }
})

export default InfoDetail;