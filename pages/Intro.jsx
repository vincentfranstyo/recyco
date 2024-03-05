import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import getDimensions from "../utils/utils";

const {width, height} = getDimensions()

const IntroPage = ({navigation, route}) => {
    return (
        <View style={styles.container}>
            <Text>This is the {route.params.page}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        width: width,
        height: height,
    },
});

export default IntroPage;
