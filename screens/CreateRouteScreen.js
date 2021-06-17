import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import MainStatusBar from '../components/MainStatusBar';
import MainHeader from '../components/MainHeader';
import { useNavigation } from '@react-navigation/native';

const AddStopComponent = ({addStop}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity 
      style={styles.addStop}
      onPress={() => navigation.navigate('AddStop')}
    >
      <Image source={require('../assets/tussenstop_toevoegen.png')}/>
      <Text style={styles.addStopText}>Tussenstop toevoegen</Text>
    </TouchableOpacity>
  );
};

const StartRoute = ({route}) => {
  const navigation = useNavigation();

  return(
    <TouchableOpacity 
      style={styles.button}
      onPress={() => alert('Work in progress')}
    >
      <Text style={styles.whiteText}>Start route</Text>
    </TouchableOpacity>
  )
}

function BackToOverview() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.backButton}
      onPress={() => navigation.navigate('RouteOverview')}
    >
      <Image
        source={require('../assets/back_button.png')}
      />
    </TouchableOpacity>
  );
};

export default class CreateRouteScreen extends React.Component {
  constructor(props){
    super(props)
    this.state={
        stops:[],
    };
  };

  renderItem = ({ item }) => {
    return (
      <View style={styles.stopInList}>
        <Text style={styles.listItem}>{item.name}</Text>
        <TouchableOpacity
          style={styles.deleteIcon}
          onPress={() => this.removeStop(item)}
        >
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
            <Text style={styles.endPoint}>Vertrekpunt</Text>
            <FlatList
              data={stops}
              renderItem={this.renderItem}
              keyExtractor={(item) => item.tid}
            />
            <AddStopComponent />
            <Text style={styles.endPoint}>Eindpunt</Text>
            <View style={styles.tweedeContainer}>
              <StartRoute />
            </View>
            <BackToOverview />
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
  backButton: {
    backgroundColor: '#00a51e',
    position: 'absolute',
    top: 55,
    left: 20,
  },
  endPoint: {
    marginLeft: 10,
    fontSize: 12,
    marginTop: 10,
    marginBottom: 10,
  },
  addStop: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  addStopText: {
    marginTop: 3,
    marginLeft: 10,
  },
  stopInList: {
    flexDirection: 'row',
    marginLeft: 30,
  },
  deleteIcon: {
    marginLeft: 20,
  },
  whiteText: {
    color: '#ffffff',
    fontSize: 18,
    marginTop: 5,
  },
  tweedeContainer:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent:'center',
  },
});
