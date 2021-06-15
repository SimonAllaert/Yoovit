import React from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';
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
  image: {
    height: 200,
    width: 200,
    justifyContent:'center',
    left: 10,
  },
  title: {
    color:'#006E3E',
    fontSize: 22,
    marginTop: 25,
    fontWeight:'bold',
    marginLeft: 30,
  },
  bodyText: {
    left: 10,
    right: 10,
  },
});
