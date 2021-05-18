import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import MainStatusBar from './components/MainStatusBar';
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import RoutesScreen from './screens/RouteScreen';
import LocationScreen from './screens/LocationsScreen';
import ProfileScreen from './screens/ProfileScreen';
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './Tabs';

export default function App() {
  return (
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
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
