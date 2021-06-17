import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import MainStatusBar from '../components/MainStatusBar';
import MainHeader from '../components/MainHeader';
import { useNavigation } from '@react-navigation/native';

const StartRoute = () => {

  return (
    <TouchableOpacity style={styles.button} onPress={() => alert('Komt binnenkort')}>
      <Text style={styles.buttontext}>Start route</Text>
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
            <View style={styles.DerdeContainer}>
              <Text>{selectedRoute.body}</Text>
              <Text style={styles.lengte}>De route is <Text style={styles.routelengte}>{selectedRoute.field_lengteroute}</Text> lang.</Text>
              <StartRoute item={selectedRoute} />
            </View>
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
    marginTop: 20,
  },
  button: {
    alignItems: 'center',
    justifyContent:'center',
    width: 300,
    height: 60,
    padding: 10,
    backgroundColor: '#00A51E',
    borderRadius: 40,
    marginBottom: 10,
    marginTop: 10,
    fontSize: 18,
  },
  buttontext: {
    color:"white",
    fontSize: 18,
  },
  DerdeContainer:{
    marginLeft: 40,
    right: 10,
    width: 320,
    marginTop:40,
  },
  routelengte: {
    textAlign: "right",
    color:"#00A51E",
    marginRight:30,
    marginTop: 0,
    fontSize:15,
  },
  lengte: {
    marginRight:30,
    marginTop: 30,
    fontSize:15,
  }
});