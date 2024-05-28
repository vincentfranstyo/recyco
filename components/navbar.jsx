import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const BottomNavbar = ({ activeTab, onChangeTab }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'Beranda' && styles.activeTab]}
        onPress={() => onChangeTab('Beranda')}
      >
        <Text style={styles.tabText}>Beranda</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'Riwayat' && styles.activeTab]}
        onPress={() => onChangeTab('Riwayat')}
      >
        <Text style={styles.tabText}>Riwayat</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'Profil' && styles.activeTab]}
        onPress={() => onChangeTab('Profil')}
      >
        <Text style={styles.tabText}>Profil</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#dddddd',
    height: 50,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#888888',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#3498db',
  },
});

export default BottomNavbar;
