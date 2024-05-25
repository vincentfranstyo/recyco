import React from 'react'
import HeroCard from './HeroCard'
import {FlatList, ScrollView, StyleSheet, TouchableOpacity} from "react-native";

const infoimg_1 = require('../assets/images/infoimg_1.png')

const infos = [
    {
        img: infoimg_1,
        sub: 'Mekanisme Green Building Certificate, Yuk Cari Tahu'
    },
    {
        img: infoimg_1,
        sub: 'Mekanisme Green Building Certificate, Yuk Cari Tahu'
    }
]

const Info = ({navigation}) => {
    const handleInfoButton = () => {
        navigation.navigate('InfoDetailPage')
    }
    return (
        <>
            <FlatList
                    data={infos}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item, index}) => (
                        <TouchableOpacity
                            className={`bg-transparent w-fit ${index !== infos.length - 1 ? 'mb-4' : 'mb-0'} ${index === 0 ? 'mt-2' : 'mt-0'}`}
                            onPress={handleInfoButton}
                            key={index}
                        >
                            <HeroCard
                                title={null}
                                img={item.img}
                                sub={item.sub}
                                sub2={null}
                            />
                        </TouchableOpacity>
                    )}
                    contentContainerStyle={style.scrollable}
                />
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

export default Info