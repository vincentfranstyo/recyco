import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Navbar from "../components/Navbar";
import { useUser } from "../contexts/UserContext";
import { getHistoriesByUID } from "../api/histories";
import LoadingScreen from "../components/LoadingScreen";

const History = ({ navigation }) => {
    const { currentUser } = useUser();
    const [histories, setHistories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchHistories = async () => {
            try {
                const data = await getHistoriesByUID(currentUser.uid);
                setHistories(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching histories: ', error);
                setLoading(false);
            }
        };

        fetchHistories();
    }, [currentUser.uid]);

    if (loading) {
        return <LoadingScreen />;
    }

    const formatNumberFromEnd = (num) => {
        return num.toString().replace(/\d(?=(\d{3})+$)/g, "$&.");
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('HistoryDetailPage', { item: item, currentUser: currentUser })}
        >
            <View style={styles.detailsContainer}>
                <View style={styles.detailsLeft}>
                    <Text style={styles.date}>{item.orderDate}</Text>
                </View>
                <View style={styles.detailsRight}>
                    <TouchableOpacity
                        style={[styles.button, item.status === 'Pilah' ? styles.pilahButton : styles.campurButton]}
                    >
                        <Text style={styles.buttonText}>{item.status}</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={[styles.line, item.status === 'Pilah' ? styles.pilahLine : styles.compurLine]} />

            <View style={styles.detailsContainer}>
                <View style={styles.detailsLeft}>
                    <Text style={styles.detailsText}>Total Sampah:</Text>
                    <Text style={styles.detailsValue}>{parseInt(item.weight).toString()}</Text>
                </View>
                <View style={styles.detailsRight}>
                    <Text style={styles.detailsText}>Total Biaya:</Text>
                    <Text style={styles.detailsValue}>Rp {formatNumberFromEnd(item.totalPrice.toString())}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <>
            <FlatList
                data={histories}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                style={styles.container}
            />
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
        maxHeight: '91%'
    },
    card: {
        backgroundColor: '#ffffff',
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
        shadowColor: '#2E6464',
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 10,
        elevation: 3,
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
    detailsValue: {
        fontFamily: 'Poppins-Bold',
        color: '#2E6464',
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
        backgroundColor: '#ffffff',
        borderWidth: 2,
        borderColor: '#2E6464',
    },
    campurButton: {
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
