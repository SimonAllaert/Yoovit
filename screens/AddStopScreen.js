import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import MainStatusBar from '../components/MainStatusBar';
import MainHeader from '../components/MainHeader';
import { useNavigation } from '@react-navigation/native';

const AddStopAndGoBack = ({item}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('CreateRoute', {stopToAdd: item})}>
        <Text style={styles.listItem}>{item.name}</Text>
      </TouchableOpacity>
  );
};

export default class AddStopScreen extends React.Component {
  constructor(props){
    super(props)
    this.state={
        locaties:[],
    }
  };

  componentDidMount() {
    fetch('http://yoovit.site/api/alle_locaties')
      .then((response) => response.json())
      .then((json) => {
        this.setState({ 
          locaties: json
        });
      })
      .catch((error) => console.error(error));
  };

  renderItem = ({ item }) => {

    return (
      <View>
        <AddStopAndGoBack item={item}/>
      </View>
    );
};

  render () {
      const {locaties} = this.state;
      
      return (
        <View style={styles.container}>
            <MainHeader/>
            <MainStatusBar/>
            <Text style={styles.titel}>Voeg een locatie toe</Text>
            <FlatList
              style={styles.lijst}
              data={locaties}
              renderItem={this.renderItem}
              keyExtractor={(item) => item.tid}
            />
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
  lijst: {
    paddingLeft: 10,
    paddingRight: 10,
    marginRight: 25,
    marginLeft: 25,
    marginBottom: 25,
    marginTop: 25,
    borderWidth: 1,
    borderColor: '#005d35',
  },
  listItem: {
    marginTop: 20,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#005d35',
  },
});
