import React from 'react'
import HeroCard from './HeroCard'
import {FlatList, ScrollView, StyleSheet, TouchableOpacity} from "react-native";

const infoimg_1 = require('../assets/images/infoimg_1.png')

const infos = [
    {
        img: infoimg_1,
        sub: 'Mekanisme Green Building Certificate, Yuk Cari Tahu',
        text: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur, purus nec lacinia ultricies, tortor urna lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur, purus nec lacinia ultricies, tortor urna lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur, purus nec lacinia ultricies, tortor urna lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur, purus nec lacinia ultricies, tortor urna lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur, purus nec lacinia ultricies, tortor urna lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur, purus nec lacinia ultricies, tortor urna lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur, purus nec lacinia ultricies, tortor urna lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur, purus nec lacinia ultricies, tortor urna lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur, purus nec lacinia ultricies, tortor urna'
    },
    {
        img: infoimg_1,
        sub: 'Mekanisme Green Building Certificate, Yuk Cari Tahu',
        text: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur, purus nec lacinia ultricies, tortor urna lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur, purus nec lacinia ultricies, tortor urna lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur, purus nec lacinia ultricies, tortor urna lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur, purus nec lacinia ultricies, tortor urna lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur, purus nec lacinia ultricies, tortor urna lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur, purus nec lacinia ultricies, tortor urna lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur, purus nec lacinia ultricies, tortor urna lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur, purus nec lacinia ultricies, tortor urna lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur, purus nec lacinia ultricies, tortor urna'
    },
    {
        img: infoimg_1,
        sub: 'Mekanisme Green Building Certificate, Yuk Cari Tahu',
        text: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur, purus nec lacinia ultricies, tortor urna lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur, purus nec lacinia ultricies, tortor urna lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur, purus nec lacinia ultricies, tortor urna lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur, purus nec lacinia ultricies, tortor urna lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur, purus nec lacinia ultricies, tortor urna lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur, purus nec lacinia ultricies, tortor urna lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur, purus nec lacinia ultricies, tortor urna lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur, purus nec lacinia ultricies, tortor urna lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur, purus nec lacinia ultricies, tortor urna'
    }
]

const Info = ({navigation, route}) => {
    const handleInfoButton = (item) => {
        navigation.navigate('InfoDetailPage', {info: item})
    }
    return (
        <ScrollView>
            <FlatList
            data={infos}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => (
                <TouchableOpacity
                    className={`bg-transparent w-fit ${index !== infos.length - 1 ? 'mb-4' : 'mb-0'} ${index === 0 ? 'mt-2' : 'mt-0'}`}
                    onPress={() => handleInfoButton(item)}
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
        </ScrollView>
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