import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import style from '../ui/style';

const InfoDetailComp = ({route}) => {
    const {info} = route.params;
    return (
        <>
            <View
                className={'flex flex-col justify-center items-center bg-white max-h-max w-full max-w-full'}
            >
                <Image
                    source={info.img}
                    className={'w-[100%] h-[250px]'}
                />
                <ScrollView
                    className={'w-[100%] h-[75%] bg-white p-3'}
                    contentContainerStyle={style.scrollable}
                >
                    <View
                    className={'w-[100%]'}>
                        <Text
                            className={'text-left text-lg text-[#2C6262] w-[100%] max-h-[65%] px-2'}
                            style={{fontFamily: 'Poppins-Black'}}
                        >
                            {info.sub}
                        </Text>
                        <Text
                            className={'text-justify text-xs text-black mt-2 px-2 w-[100%] max-h-[90%] mb-5'}
                            style={{fontFamily: 'Poppins'}}
                        >
                            {info.sub2}
                        </Text>
                    </View>
                </ScrollView>
            </View>
        </>
    )
}

export default InfoDetailComp;