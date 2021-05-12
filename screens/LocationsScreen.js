import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainStatusBar from '../components/MainStatusBar';

export default function LocationsScreen() {
    return (
      <View style={styles.container}>
          <MainStatusBar/>
          <Text>Locaties</Text>
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
