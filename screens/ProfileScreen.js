import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainStatusBar from '../components/MainStatusBar';
import MainHeader from '../components/MainHeader';

/*
UIT EEN STATE LOGGED IN USER INFORMATION HALEN, STATE MOET PERMANENT IN MAIN APP ZITTEN
*/

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <MainHeader/>
      <MainStatusBar/>
      <Text>Profiel informatie</Text>
      <Text>Naam</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
