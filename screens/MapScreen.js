import React from 'react';
import { StyleSheet, View } from 'react-native';
import MainStatusBar from '../components/MainStatusBar';
import MainHeader from '../components/MainHeader';
import MapView, { Marker } from 'react-native-maps';
//import DIRECTIONS_API_KEY from '../ApiKeys';

const initialRegion = {
  latitude: 51.02246,
  longitude: 4.48156,
  latitudeDelta: 0.90,
  longitudeDelta: 0.90,
}

export default class MapScreen extends React.Component {
  constructor(props){
    super(props)
    this.state={
        locaties:[],
        routeIsActive: false,
        initialRegion,
    }
};

  componentDidMount() {
    if (!this.state.routeIsActive) {
      fetch('http://yoovit.site/api/alle_locaties')
        .then((response) => response.json())
        .then((json) => {
          this.setState({ 
            locaties: json,
            initialRegion: initialRegion,
          });
        })
        .catch((error) => console.error(error));
    }
  };

  mapMarkers = () => {
    return this.state.locaties.map((locatie) => <Marker
      key={locatie.tid}
      coordinate={{
        latitude: parseFloat(locatie.field_locatie_latitude),
        longitude: parseFloat(locatie.field_locatie_longitude),
      }}
      title={locatie.name}
      description={locatie.description__value}
      image={require('../assets/marker.png')}
    ></Marker>)
  };

  mapPolylines = () => {
    if (this.state.routeIsActive) {
      const mode = 'walking'
      const origin = this.state.locaties[0].field_locatie_latitude + "%2C" + this.state.locaties[0].field_locatie_longitude;
      const destination = this.state.locaties[0].field_locatie_latitude + "%2C" + this.state.locaties[0].field_locatie_longitude;
      //const APIKEY = DIRECTIONS_API_KEY;
      const waypoints = this.state.locaties[1].field_locatie_latitude + "%2C" + this.state.locaties[1].field_locatie_longitude + "%7C" + this.state.locaties[2].field_locatie_latitude + "%2C" + this.state.locaties[2].field_locatie_longitude;
      const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=${APIKEY}&mode=${mode}&waypoints=${waypoints}`;
    };
  };

  activateRoute(newRoute) {
      this.setState({
        locaties: newRoute.tussenstops,
        routeIsActive: true,
        initialRegion: 
          {
            latitude: parseFloat(newRoute.tussenstops[0].field_locatie_latitude),
            longitude: parseFloat(newRoute.tussenstops[0].field_locatie_longitude),
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          },
      });
  };

  render () {
    const {initialRegion} = this.state;
    const {route} = this.props;
    if (typeof route.params !== 'undefined' && !this.state.routeIsActive) {
      this.activateRoute(route.params.selectedRoute);
    };

    return (
      <View style={styles.container}>
          <MainHeader/>
          <MainStatusBar/>
          <MapView 
            style={styles.map}
            initialRegion={initialRegion}
          >
            {this.mapMarkers()}
            {/*this.mapPolylines()*/}
          </MapView>
      </View>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  map: {
    height: '100%',
  }
});
