import React, {useEffect, useState} from 'react'
import HeroCard from './HeroCard'
import {FlatList, StyleSheet, TouchableOpacity} from "react-native";
import {getNews} from "../api/news";

const infoimg_1 = require('../assets/images/infoimg_1.png')
const infoimg_2 = require('../assets/images/infoimg_2.png')
const infoimg_3 = require('../assets/images/infoimg_3.png')

const images = [infoimg_1, infoimg_2, infoimg_3]

const Info = ({navigation, route}) => {
    const [news, setNews] = useState([]);
    const [infos, setInfos] = useState([]);

    const fetchData = async () => {
        try {
            const newsData = await getNews();
            setNews(newsData);

            const mappedInfos = newsData.map((item, index) => ({
                index: index,
                title: item.title,
                img: images[index % images.length],
                sub: item.sub,
                sub2: item.sub2
            }));
            setInfos(mappedInfos);
        } catch (e) {
            console.error("error fetching news: " + e);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleInfoButton = (item) => {
        navigation.navigate('InfoDetailPage', {info: item})
    }

    return (
        <FlatList
            data={infos}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => (
                <TouchableOpacity
                    className={`bg-transparent w-fit h-fit ${index !== infos.length - 1 ? 'mb-4' : 'mb-0'} ${index === 0 ? 'mt-2' : 'mt-0'}`}
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
    )
}

const style = StyleSheet.create({
    scrollable: {
        flex: 1,
        height: 'auto',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'transparent',
    }
})

export default Info