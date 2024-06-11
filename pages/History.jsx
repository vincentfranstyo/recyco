import React from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Navbar from "../components/Navbar";
import {useUser} from "../contexts/UserContext";

const History = ({navigation}) => {
    const {currentUser} = useUser();
    // console.log('history', currentUser)
    const data = [
        {date: '1 Juli 2023', totalSampah: '10kg', totalBiaya: 'Rp5.000', status: 'Pilah'},
        {date: '28 Juni 2023', totalSampah: '10kg', totalBiaya: 'Rp15.000', status: 'Campur'},
        {date: '9 Juni 2023', totalSampah: '20kg', totalBiaya: 'Rp30.000', status: 'Campur'},
        {date: '29 Mei 2023', totalSampah: '15kg', totalBiaya: 'Rp7.000', status: 'Pilah'},
        {date: '10 Mei 2023', totalSampah: '30kg', totalBiaya: 'Rp45.000', status: 'Campur'},
    ];

    return (
        <>
            <ScrollView style={styles.container}>
                <Text
                    className={'text-left text-lg'}
                    style={{
                        fontFamily: 'Poppins-Bold',
                        color: '#2E6464',
                        marginTop: 16,
                        marginBottom: 16
                    }}>
                    Riwayat Salur Sampah
                </Text>
                {data.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.card}
                        onPress={() => navigation.navigate('HistoryDetailPage', {item: item, currentUser: currentUser})}
                    >
                        <View style={styles.detailsContainer}>
                            <View style={styles.detailsLeft}>
                                <Text style={styles.date}>{item.date}</Text>
                            </View>
                            <View style={styles.detailsRight}>
                                <TouchableOpacity
                                    style={[styles.button, item.status === 'Pilah' ? styles.pilahButton : styles.campurButton]}
                                >
                                    <Text style={styles.buttonText}>{item.status}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={[styles.line, item.status === 'Pilah' ? styles.pilahLine : styles.compurLine]}/>

                        <View style={styles.detailsContainer}>
                            <View style={styles.detailsLeft}>
                                <Text style={styles.detailsText}>Total Sampah:</Text>
                                <Text className={'text-left text-lg'}
                                      style={{
                                          fontFamily: 'Poppins-Bold',
                                          color: '#2E6464',
                                          marginTop: 4,
                                          marginBottom: 4
                                      }}>
                                    {item.totalSampah}
                                </Text>
                            </View>
                            <View style={styles.detailsRight}>
                                <Text style={styles.detailsText}>Total Biaya:</Text>
                                <Text className={'text-left text-lg'}
                                      style={{
                                          fontFamily: 'Poppins-Bold',
                                          color: '#2E6464',
                                          marginTop: 4,
                                          marginBottom: 4
                                      }}>
                                    {item.totalBiaya}
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
            <Navbar
                navigation={navigation}
                isHistory={true}
                currentUser={currentUser}
            />
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 40,
    },
    card: {
        backgroundColor: '#ffffff',
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
        shadowColor: '#2E6464',
        shadowOpacity: 0.5,
        shadowOffset: {width: 0, height: 0},
        shadowRadius: 10,
        elevation: 10,
    },
    date: {
        fontWeight: 'bold',
        marginBottom: 8,
        fontSize: 20,
        fontFamily: 'Poppins-Bold',
        color: '#2E6464',
    },
    detailsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    detailsLeft: {
        alignItems: 'flex-start',
    },
    detailsRight: {
        alignItems: 'flex-end',
    },
    detailsText: {
        fontSize: 16,
        marginTop: 4,
        marginBottom: 4,
    },
    button: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 4,
        alignSelf: 'flex-end',
    },
    pilahButton: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 20,
        alignSelf: 'flex-end',
        backgroundColor: '#ffffff',
        borderWidth: 2,
        borderColor: '#2E6464',
    },
    campurButton: {
        paddingVertical: 8,
        paddingHorizontal: 8,
        borderRadius: 20,
        alignSelf: 'flex-end',
        backgroundColor: '#ffffff',
        borderWidth: 2,
        borderColor: '#2E6464',
    },
    buttonText: {
        color: '#2E6464',
        fontWeight: 'bold',
    },
    line: {
        height: 2,
        marginTop: 2,
    },
    pilahLine: {
        backgroundColor: '#2E6464',
    },
    compurLine: {
        backgroundColor: '#2E6464',
    },
});

export default History;