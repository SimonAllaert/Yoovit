import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,TextInput, ScrollView } from 'react-native';
import MainStatusBar from '../components/MainStatusBar';
import MainHeader from '../components/MainHeader';
import Register from '../components/Register';

export default class RegisterScreen extends React.Component{
    render () {
      return (
        
        <View style={styles.container}>
          <ScrollView contentContainerStyle={{justifyContent: 'center',  alignItems: 'center', }}>
            <MainHeader/>
            <MainStatusBar/>
              <Text style={styles.titel}>Registreer</Text>
              <Register/>
          </ScrollView>
        </View>
      );
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titel: {
    color:'#006E3E',
    fontSize: 22,
    marginTop: 25,
    fontWeight:'bold',
    marginTop: 25,
  },
});
