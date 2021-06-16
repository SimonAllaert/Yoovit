import React from 'react';
import { StyleSheet, Text, View,TextInput, TouchableOpacity } from 'react-native';
import MainStatusBar from '../components/MainStatusBar';
import MainHeader from '../components/MainHeader';
import Login from '../components/Login';

export default class LoginScreen extends React.Component{

  constructor(props){
    super(props)
  };
  
  Login() {
    this.props.Login();
  };

  render () {
    return (
      <View style={styles.container}>
          <MainHeader/>
          <MainStatusBar/>
          <Text style={styles.titel}>Login</Text>
           
          <Login navigation={this.props.navigation} Login={this.Login}/>      
      </View>
    );
};
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titel: {
    color:'#006E3E',
    fontSize: 22,
    marginTop: 25,
    fontWeight:'bold',
    marginTop: 25,
  },
});