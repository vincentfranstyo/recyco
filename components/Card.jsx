import React from 'react';
import {Text, View} from 'react-native';


const Card = (title, sub) => {
    return (
        <View
            className={'bg-white p-4 rounded-lg shadow-md'}
        >
            <View
                className={'flex-row justify-between items-center'}
            >
                <Text
                    className={'text-lg'}
                >
                    {title}
                </Text>
            </View>
            <hr/>
            <Text
                className={'text-sm'}
            >
                {sub}
            </Text>
        </View>
    )
}

const style = StyleSheet.create({})

export default Card;