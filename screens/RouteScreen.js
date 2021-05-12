import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainStatusBar from '../components/MainStatusBar';
import { SearchBar } from 'react-native-elements';

export default class RouteScreen extends React.Component {
  state = {
  };

  render () {
      const { search } = this.state;

      return (
        <View style={styles.container}>
            <MainStatusBar/>
            <SearchBar
                placeholder="Zoek voor een locatie"
                lightTheme
            />
            <Text>Voorgestelde routes</Text>
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
