import React from 'react';
import { StyleSheet, View, Text, Image, Button, FlatList } from 'react-native';
import MainStatusBar from '../components/MainStatusBar';
import MainHeader from '../components/MainHeader';

export default class FilmDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            film: props.film,
        }
    }

    componentWillUpdate(nextProps, nextState) {
        nextState.film = nextProps.film;
    }

  render () {
    return (
        <View style={styles.container}>
          <MainHeader/>
          <MainStatusBar/>
            <Text style={styles.title}>{this.state.film.title_1}</Text>
            <Image 
                source={{uri: 'http://yoovit.site/' + this.state.film.field_poster}}
                style={styles.image}
            />
            <Text style={styles.bodyText}>
              {this.state.film.body}
            </Text>
            <View style={styles.tweedeContainer}>
            <Text style={styles.bodyText}>{this.state.film.field_locatie} </Text>
            </View>
        </View>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
   tweedeContainer:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent:'center',
  },
  image: {
    height: 200,
    width:400,
    justifyContent:'center',
  },
  title: {
    color:'#006E3E',
    fontSize: 22,
    marginTop: 25,
    fontWeight:'bold',
    marginLeft: 30,
  },
  bodyText: {
    marginLeft: 40,
    right: 10,
    width: 300,
    marginTop:40,
  },
});
