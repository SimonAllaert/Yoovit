import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import DraggableFlatList from 'react-native-draggable-flatlist'
import MainStatusBar from '../components/MainStatusBar';
import MainHeader from '../components/MainHeader';
import { useNavigation } from '@react-navigation/native';

const AddStopComponent = ({addStop}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('AddStop')}>
      <Image source={require('../assets/tussenstop_toevoegen.png')}/>
      <Text>Tussenstop toevoegen</Text>
    </TouchableOpacity>
  );
};

export default class CreateRouteScreen extends React.Component {
  constructor(props){
    super(props)
    this.state={
        stops:[],
        counterXD: 0,
    };
  };

  renderItem = ({ item }) => {
    return (
      <View>
        <Text style={styles.listItem}>{item.name}</Text>
        <TouchableOpacity onPress={() => this.removeStop(item)}>
          <Image source={require('../assets/trashcan.png')}/>
        </TouchableOpacity>
      </View>
    );
  };

  addStop(newStop) {
    var isInState = false;
    for (var stop of this.state.stops) {
      if (newStop.tid === stop.tid) {
        isInState = true;
      };
    };
    if (!isInState){
      this.setState({
        stops: [...this.state.stops, newStop],
      });
    }
  };

  removeStop(oldStop) {
    var newState = []
    var oldState = [...this.state.stops];
    for (var stop of oldState) {
      if (oldStop.tid !== stop.tid) {
        newState.push(stop);
      };
    };
    if (newState.length === 0) {
      alert("You can't clear the last stop!")
    }
    this.setState({
      stops: newState,
    });
  };

  render () {
      const { stops } = this.state;
      const {route} = this.props;

      if (typeof route.params !== 'undefined') {
        //console.log(route.params.stopToAdd);
        this.addStop(route.params.stopToAdd);
      };
      return (
        <View style={styles.container}>
            <MainHeader/>
            <MainStatusBar/>
            <Text style={styles.titel}>Route maken</Text>
            <Text>Vertrekpunt</Text>
            <DraggableFlatList
              data={stops}
              renderItem={this.renderItem}
              keyExtractor={(item) => item.tid}
            />
            <AddStopComponent />
            <Text>Eindpunt</Text>
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
