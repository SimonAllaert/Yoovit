import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainStatusBar from '../components/MainStatusBar';
import MainHeader from '../components/MainHeader';
import FilmsOverview from '../components/FilmsOverview';
import FilmDetails from '../components/FilmDetails';
import SeriesOverview from '../components/SeriesOverview';

var defaultFilm = {
  nid: "",
  title_1: "Oops, something went wrong !",
  field_poster: "https://forums.codemasters.com/uploads/monthly_2020_03/image.png.f8c83b98a2250b117a112bcfb92ca287.png",
}

export default class HomeScreen extends React.Component {
  state = {
    film: defaultFilm,
    selected: false,
  };

  openDetails = (item) => {
    this.setState({
      film: item,
    }, () => 
      this.setState({
        selected: true,
      }
      ), () => alert(item.field_poster)
    );
  };

  render () {
      return (
        <View style={styles.container}>
          <View style={this.state.selected ? styles.container : styles.hiddenContainer}>
            <FilmDetails film={this.state.film}/>
          </View>
          <View style={this.state.selected ? styles.hiddenContainer : styles.container}>
            <MainHeader/>
            <MainStatusBar/>
            <Text>Films</Text>
            <FilmsOverview openDetails={this.openDetails}/>
            <Text>Series</Text>
            <SeriesOverview openDetails={this.openDetails}/>
          </View>
        </View>
      );
  };
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    alignItems: 'center',
  },
  hiddenContainer: {
    display: 'none',
  }
});
