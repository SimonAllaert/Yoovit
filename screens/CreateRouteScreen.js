import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import MainStatusBar from '../components/MainStatusBar';
import MainHeader from '../components/MainHeader';
import { withNavigation } from 'react-navigation';

class CreateRouteScreen extends React.Component {
  constructor(props){
    super(props)
    this.state={
        routes:[],
    }
  };


  renderItem = ({ item }) => {
    return (
      <View>
        <Text style={styles.listItem}>{item.name}</Text>
      </View>
    );
  };

  render () {
      const { routes } = this.state;

      return (
        <View style={styles.container}>
            <MainHeader/>
            <MainStatusBar/>
            <Text style={styles.titel}>Route maken</Text>
            <Text>Vertrekpunt</Text>
            <FlatList
              data={routes}
              renderItem={this.renderItem}
              keyExtractor={(item) => item.id}
            />
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

export default withNavigation(CreateRouteScreen);