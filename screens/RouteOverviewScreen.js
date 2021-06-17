import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import MainStatusBar from '../components/MainStatusBar';
import MainHeader from '../components/MainHeader';
import { useNavigation } from '@react-navigation/native';

function GoToCreatRoute() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("CreateRoute")}>
      <Text style={styles.buttontext}>Maak een route</Text>
    </TouchableOpacity>
  )
}

const GoToRouteDetails = ({item}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate("RouteDetails", {selectedRoute: item})}>
        <View style={styles.listElementContainer}>
          <View>
            <Text style={styles.textRoute}> {item.title}</Text> 
            <Text style={styles.textLengte}>{item.field_lengteroute}</Text>
          </View>
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
              <View style={styles.tweedeContainer}>
                <GoToCreatRoute />
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
  tweedeContainer:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent:'center',
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
  listElementContainer: {
    display: 'flex',
  },
  textRoute: {
    textAlign: "left",
    marginTop: 50,
    marginBottom:0,
    marginLeft:30,
    fontSize:15,
  },
  textLengte: {
    textAlign: "right",
    color:"#00A51E",
    marginRight:30,
    marginTop: 0,
    fontSize:12,
  }
});
