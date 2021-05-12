import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainStatusBar from '../components/MainStatusBar';
import FilmsOverview from '../components/FilmsOverview';
import SeriesOverview from '../components/SeriesOverview';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <MainStatusBar/>
      <Text>Films</Text>
      <FilmsOverview/>
      <Text>Series</Text>
      <SeriesOverview/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
