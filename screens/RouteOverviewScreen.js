import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import MainStatusBar from '../components/MainStatusBar';
import MainHeader from '../components/MainHeader';
import { useNavigation } from '@react-navigation/native';

function GoToCreatRoute() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("CreateRoute")}>
      <Text>Maak een route</Text>
    </TouchableOpacity>
  )
}

const GoToRouteDetails = ({item}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate("RouteDetails", {selectedRoute: item})}>
        <View style={styles.listElementContainer}>
          <Text>{item.title}</Text>
          <Text>{item.field_lengteroute}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default class RouteOverviewScreen extends React.Component {
  constructor(props){
    super(props)
    this.state={
        routes:[],
    }
  };

  componentDidMount() {
    fetch('http://yoovit.site/api/routes')
      .then((response) => response.json())
      .then((json) => {
        this.setState({ 
          routes: json,
        });
      })
      .catch((error) => console.error(error));
  };

  renderItem = ({ item }) => {
    return (
      <View>
        <GoToRouteDetails item={item}/>
      </View>
    );
  };

  render () {
      const { routes } = this.state;

      return (
        <View style={styles.container}>
            <MainHeader/>
            <MainStatusBar/>
            <Text style={styles.titel}>Voorgestelde routes</Text>
            <FlatList
              data={routes}
              renderItem={this.renderItem}
              keyExtractor={(item) => item.nid}
            />
            <GoToCreatRoute />
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
  listElementContainer: {
    display: 'flex',
  },
});