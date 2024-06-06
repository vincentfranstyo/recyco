import {Image, ScrollView, Text, View} from "react-native";
import style from "../ui/style";
import React from 'react'

const InfoDetailComp = ({route}) => {
    const {info} = route.params;
    return (
        <View
            style={{flex: 1, backgroundColor: 'white'}}
            className={'flex flex-col justify-start items-center w-full'}
        >
            <Image
                source={info.img}
                style={{width: '100%', height: 250}}
                className={'w-[100%] h-[250px]'}
            />
            <View
                style={{paddingHorizontal: 15}}
                className={'w-[100%] flex-col justify-center'}
            >
                <Text
                className={'text-justify text-md text-[#2C6262] w-[100%] mb-3'}
                style={{fontFamily: 'Poppins-Black'}}
            >
                {info.title}
            </Text>
            <Text
                className={'text-justify text-xs text-black w-full mb-3'}
                style={{fontFamily: 'Poppins-Bold'}}
            >
                {info.sub}
            </Text>
            </View>
            <ScrollView
                style={{flex: 1, width: '100%'}}
                contentContainerStyle={[style.scrollable, {paddingHorizontal: 15}]}
                className={'w-[100%] flex-1'}
            >

                <Text
                    className={'text-justify text-[10px] text-black'}
                    style={{fontFamily: 'Poppins'}}
                >
                    {info.sub2}
                </Text>
            </ScrollView>
        </View>
    );
}

export default InfoDetailComp;