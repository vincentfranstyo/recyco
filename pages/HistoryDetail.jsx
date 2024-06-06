import React from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FontAwesome5, Ionicons} from '@expo/vector-icons';
import Back from "../components/Back";

const HistoryDetail = ({navigation, route}) => {
    const {currentUser} = route.params;
    const {item} = route.params;

    console.log("owo user ", currentUser)
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Back
                    navigation={navigation}
                    text={'Detail Pesanan'}
                />

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Pengangkutan selesai</Text>
                    <Text style={styles.sectionText}>Pengangkutan sampah selesai pada tanggal 1 Juli 2023</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}><FontAwesome5 name="truck" size={16} color="#2E6464"/> Informasi
                        Kurir</Text>
                    <Text style={styles.sectionText}>Sihabuddin - 082323232323</Text>
                </View>

                <View style={styles.section}>
                    <View style={styles.addressHeader}>
                        <Text style={styles.sectionTitle}><Ionicons name="location-outline" size={18}
                                                                    color="#2E6464"/> Alamat Penjemputan</Text>
                        <TouchableOpacity>
                            <Text style={styles.salinText}>SALIN</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.sectionText}>Erensi Ratu Chelsia | (+62) 8xxxxxx</Text>
                    <Text style={styles.sectionText}>Jalan lorem ipsum no. 100</Text>
                    <Text style={styles.sectionText}>Lorem, KOTA Bandung, Jawa Barat</Text>
                </View>

                <View style={styles.section}>
                    <View style={styles.row}>
                        <Text style={styles.label}>Jenis Sampah</Text>
                        <Text style={styles.value}>Pisah</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Total Sampah</Text>
                        <Text style={styles.value}>10kg</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Total Biaya</Text>
                        <Text style={styles.value}>Rp5.000</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Total Points yang Didapatkan</Text>
                        <Text style={styles.value}>30 Points</Text>
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Detail Waktu</Text>
                    <View style={styles.row}>
                        <Text style={styles.label}>Waktu Pemesanan</Text>
                        <Text style={styles.value}>01-07-2023 10:19</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Waktu Pengiriman</Text>
                        <Text style={styles.value}>01-07-2023 10:22</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Pengiriman Selesai</Text>
                        <Text style={styles.value}>01-07-2023 10:42</Text>
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Catatan</Text>
                    <Text style={styles.sectionText}>-</Text>
                </View>

                <Text style={styles.helpText}>Hubungi pusat bantuan jika menemukan masalah.</Text>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    section: {
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#2E6464',
        marginBottom: 8,
    },
    sectionText: {
        fontSize: 14,
        color: '#333',
    },
    addressHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    salinText: {
        color: '#2E6464',
        fontWeight: 'bold',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 4,
    },
    label: {
        fontSize: 14,
        color: '#333',
    },
    value: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333',
    },
    helpText: {
        fontSize: 12,
        color: '#666',
        textAlign: 'center',
        marginVertical: 16,
    },
});

export default HistoryDetail

