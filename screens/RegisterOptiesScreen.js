import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import MainStatusBar from '../components/MainStatusBar';
import MainHeader from '../components/MainHeader';
import { useNavigation } from '@react-navigation/native';


function GoToRegister() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("RegisterUser")}> 
       <Text style={styles.buttonText}> Registreren met e-mailadres </Text>
    </TouchableOpacity>
  )
}

export default function RegisterOptiesScreen() { 
    return (
      <View style={styles.container}>
          <MainHeader/>
          <MainStatusBar/>
          <Text style={styles.titel}>Registratie</Text>
          <View>
              <GoToRegister/>
          </View>
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  button: {
    alignItems: 'center',
    width: 300,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: '#707070',
    borderRadius: 25,
    marginBottom: 10,
  },
  titel: {
    color:'#006E3E',
    fontSize: 22,
    marginTop: 25,
    fontWeight:'bold',
  },
});