import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainStatusBar from '../components/MainStatusBar';
import MainHeader from '../components/MainHeader';
import Logout from '../components/Logout';


/*
UIT EEN STATE LOGGED IN USER INFORMATION HALEN, STATE MOET PERMANENT IN MAIN APP ZITTEN
navigation={this.props.navigation}  
*/

export default class ProfileScreen extends React.Component{
  render () {
    return (
      <View style={styles.container}>
        <MainHeader/>
        <MainStatusBar/>
        <View style={styles.tweedeContainer}>
          <Text style={styles.titel}>Profiel informatie</Text>
          <Logout navigation={this.props.navigation} />  
        </View>
      </View>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tweedeContainer: {
    marginTop: 20,
  },
  titel: {
    color:'#006E3E',
    fontSize: 22,
    marginTop: 5,
    fontWeight:'bold',
    marginLeft: 30, 
  },
});
