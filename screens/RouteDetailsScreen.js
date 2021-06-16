import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import MainStatusBar from '../components/MainStatusBar';
import MainHeader from '../components/MainHeader';
import { useNavigation } from '@react-navigation/native';

const StartRoute = () => {

  return (
    <TouchableOpacity style={styles.button} onPress={() => alert('Work in progress')}>
      <Text>Start route</Text>
    </TouchableOpacity>
  );
};

export default class RouteDetailsScreen extends React.Component {
  constructor(props){
    super(props)
    this.state={
    };
  };

  render () {
      const{route} = this.props;
      const selectedRoute = route.params.selectedRoute;

      return (
        <View style={styles.container}>
            <MainHeader/>
            <MainStatusBar/>
            <Text style={styles.titel}>{selectedRoute.title}</Text>
            <Text>{selectedRoute.field_lengteroute}</Text>
            <Text>{selectedRoute.body}</Text>
            <StartRoute item={selectedRoute} />
        </View>
      );
    };

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  titel: {
    color:'#006E3E',
    fontSize: 22,
    marginLeft: 25,
    fontWeight:'bold',
    marginTop: 5,
  },
  button: {
    alignItems: 'center',
    color:'white',
    width: 300,
    height: 60,
    padding: 10,
    backgroundColor: '#00A51E',
    borderRadius: 40,
    marginBottom: 10,
    marginTop: 10,
    fontSize: 18,
  },
});