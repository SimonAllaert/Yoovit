import React from 'react';
import { StyleSheet, View } from 'react-native';
import MainStatusBar from '../components/MainStatusBar';
import MainHeader from '../components/MainHeader';
import MapView, { Marker } from 'react-native-maps';

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
        initialRegion,
    }
};

  componentDidMount() {
    fetch('http://yoovit.site/api/alle_locaties')
      .then((response) => response.json())
      .then((json) => {
        this.setState({ 
          locaties: json,
          initialRegion: initialRegion,
        });
      })
      .catch((error) => console.error(error));
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

  render () {
    const {initialRegion} = this.state;

    return (
      <View style={styles.container}>
          <MainHeader/>
          <MainStatusBar/>
          <MapView 
            style={styles.map}
            initialRegion={initialRegion}
          >
            {this.mapMarkers()}
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
