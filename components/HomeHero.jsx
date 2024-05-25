import {Text, View} from 'react-native';
import React from 'react';
import HeroCard from "./HeroCard";

const HomeHero = ({username, address, city}) => {
    return (
        <>
            <View
                className={'flex flex-col justify-start items-start bg-transparent max-h-[30%] mt-5'}
            >
                <View
                    className={'flex pt-5 pb-2'}
                >
                    <Text
                        className={'text-xl'}
                        style={{fontFamily: 'Poppins-Bold'}}
                    >
                        Hello,
                    </Text>
                    <Text
                        className={'text-lg'}
                        style={{fontFamily: 'Poppins-Bold'}}
                    >
                        {username}
                    </Text>
                </View>

                <HeroCard
                    title={'Alamat penjemputan sampah'}
                    img={null}
                    sub={address}
                    sub2={city}
                />
            </View>
        </>
    )
}

export default HomeHero;