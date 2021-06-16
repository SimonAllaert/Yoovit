import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import MainStatusBar from '../components/MainStatusBar';
import MainHeader from '../components/MainHeader';
import FilmsOverview from '../components/FilmsOverview';
import FilmDetails from '../components/FilmDetails';
import SeriesOverview from '../components/SeriesOverview';
import SerieDetails from '../components/SerieDetails';

var defaultFilm = {
  nid: "",
  title_1: "Oops, something went wrong !",
  field_poster: "https://forums.codemasters.com/uploads/monthly_2020_03/image.png.f8c83b98a2250b117a112bcfb92ca287.png",
}
var defaultSeries = {
  nid: "",
  title_1: "Oops, something went wrong !",
  field_posterserie: "https://forums.codemasters.com/uploads/monthly_2020_03/image.png.f8c83b98a2250b117a112bcfb92ca287.png",
}

export default class HomeScreen extends React.Component {
  state = {
    film: defaultFilm,
    series: defaultSeries,
    selectedFilm: false,
    selectedSerie: false,
  };

  openDetails = (item) => {
    this.setState({
      film: item,
    }, () => 
      this.setState({
        selectedFilm: true,
      })
    );
  };

  openDetailsSeries = (item) => {
    this.setState({
      series: item,
    }, () => 
      this.setState({
        selectedSerie: true,
      })
    );
  };

  backToHome = () => {
    this.setState({
      selectedFilm: false,
      selectedSerie: false,
    });
  };

  render () {
      return (
        <View style={styles.container}>
          <View style={this.state.selectedFilm ? styles.container : styles.hiddenContainer}>
              <FilmDetails film={this.state.film}/>       
          </View>
          <View style={this.state.selectedSerie ? styles.container : styles.hiddenContainer}>
            <SerieDetails series={this.state.series}/>        
          </View>
          <TouchableOpacity 
            style={(this.state.selectedFilm  || this.state.selectedSerie) ? styles.backButton : styles.hiddenContainer}
            onPress={this.backToHome}
          >
              <Image
                source={require('../assets/back_button.png')}
              />
            </TouchableOpacity>
          <View style={(this.state.selectedFilm  || this.state.selectedSerie) ? styles.hiddenContainer : styles.container}>
            <MainHeader/>
            <MainStatusBar  style={(this.state.selectedFilm  || this.state.selectedSerie) ? styles.hiddenContainer : styles.container}/>
            <Text style={styles.titel}>Films</Text>
            <FilmsOverview openDetails={this.openDetails}/>
            <Text style={styles.titel}>Series</Text>
            <SeriesOverview openDetailsSeries={this.openDetailsSeries}/>
          </View>
        </View>
      );
  };
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    alignItems: 'flex-start',
    backgroundColor: "#ffffff"
    
  },
  titel: {
    color:'#006E3E',
    fontSize: 22,
    marginTop: 5,
    fontWeight:'bold',
    marginLeft: 30, 
  },
  backButton: {
    backgroundColor: '#00a51e',
    position: 'absolute',
    top: 30,
    left: 20,
  },
  hiddenContainer: {
    display: 'none',
  }
});
