import React from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';
import MainStatusBar from '../components/MainStatusBar';
import MainHeader from '../components/MainHeader';

export default class SerieDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            series: props.series,
        }
    }

    componentWillUpdate(nextProps, nextState) {
        nextState.series = nextProps.series;
    }

  render () {
    return (
        <View style={styles.container}>
            <MainHeader/>
            <MainStatusBar/>
            <Text style={styles.title}>{this.state.series.title_1}</Text>
            <Image 
                source={{uri: 'http://yoovit.site/' + this.state.series.field_posterserie}}
                style={styles.image}
            />
            <Text style={styles.bodyText}>
              {this.state.series.body}
            </Text>
        </View>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
  },
  image: {
    height: 200,
    width: 200,
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
    left: 10,
    right: 10,
  },
});
