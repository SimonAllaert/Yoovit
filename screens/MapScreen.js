import React from 'react';
import { StyleSheet, View } from 'react-native';
import MainStatusBar from '../components/MainStatusBar';
import MainHeader from '../components/MainHeader';
import { SearchBar } from 'react-native-elements';
import Map from '../components/Map';

export default class MapScreen extends React.Component {
  state = {
  };

  render () {
      const { search } = this.state;

      return (
        <View style={styles.container}>
            <MainHeader/>
            <MainStatusBar/>
            <SearchBar
                placeholder="Zoek voor een locatie"
                lightTheme
            />
            <Map/>
        </View>
      );
    };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
