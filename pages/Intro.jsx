import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import getDimensions from "../utils/utils";
import Navbar from '../components/navbar'

const {width, height} = getDimensions()

const IntroPage = ({navigation, route}) => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text>This is the {route.params.page}</Text>
            </View>
            <Navbar title="Navbar" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
      },
      content: {
        flex: 1, // Take up all available space except for the Navbar
        justifyContent: 'center',
        alignItems: 'center',
      },
});

export default IntroPage;
