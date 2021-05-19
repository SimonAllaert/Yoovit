import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

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
            <Text>{this.state.film.title_1}</Text>
            <Image 
                source={{uri: this.state.film.field_poster}}
                style={styles.image}
            />
            <Text>Beschrijving ding</Text>
        </View>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 200,
    width: 200,
},
});
