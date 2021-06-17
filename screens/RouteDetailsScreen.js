import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import MainStatusBar from '../components/MainStatusBar';
import MainHeader from '../components/MainHeader';
import { useNavigation } from '@react-navigation/native';

const StartRoute = ({item}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Map', {selectedRoute: item})}>
      <Text>Start route</Text>
    </TouchableOpacity>
  );
};

const DUMMY_ROUTE = 
{
  nid: "9",
  title: "Torpedo Route",
  body: "Torpedo is voornamelijk gefilmd geweest in de provincie Antwerpen. De route die er kan gevolgd worden wanneer er op Start route gedrukt kan er de plaatsen bezocht worden die gebruikt zijn om torpedo te filmen.",
  field_lengteroute: "43,6 km",
  tussenstops:
    [
      {
        tid: "1",
        name: "Geeneinde 54, 2381 Ravels",
        description__value: "Torpedo",
        field_locatie_latitude: "51.3983000000",
        field_locatie_longitude: "4.9603300000",
        quiz_vraag: 'Wat werd op deze locatie opgenomen?',
        quiz_antwoorden:
          [
            {
              ant1: 'De buitenkant v/d duikboot',
              ant2: 'De interieur opnames v/d duikboot',
              ant3: 'Geen van beide',
            },
          ],
        sfeerbeelden:
          [
            '/sites/default/files/2021-06/torpedo1.jpeg',
            '/sites/default/files/2021-06/torpedo2.jpeg',
            '/sites/default/files/2021-06/torpedo3.jpeg',
            '/sites/default/files/2021-06/torpedo4.jpeg',
          ],
      },
      {
        tid: "2",
        name: "Waaiberg 1, 2460 Kasterlee",
        description__value: "Torpedo",
        field_locatie_latitude: "51.2339000000",
        field_locatie_longitude: "4.9732500000",
        quiz_vraag: '',
        quiz_antwoorden:
          [
            {
              ant1: '',
              ant2: '',
              ant3: '',
            },
          ],
          sfeerbeelden:
            [
            ],
      },
      {
        tid: "3",
        name: "Riststraat 20, 2300 Turnhout",
        description__value: "Torpedo",
        field_locatie_latitude: "51.3529000000",
        field_locatie_longitude: "4.9657100000",
        quiz_vraag: '',
        quiz_antwoorden:
          [
            {
              ant1: '',
              ant2: '',
              ant3: '',
            },
          ],
          sfeerbeelden:
            [
            ],
      },
    ],
};

export default class RouteDetailsScreen extends React.Component {
  constructor(props){
    super(props)
    this.state={
      selectedRoute: DUMMY_ROUTE,
    };
  };

  render () {
      //const{route} = this.props;
      //const selectedRoute = route.params.selectedRoute;
      const {selectedRoute} = this.state;

      return (
        <View style={styles.container}>
            <MainHeader/>
            <MainStatusBar/>
            <Text style={styles.titel}>{selectedRoute.title}</Text>
            <Text>{selectedRoute.field_lengteroute}</Text>
            <Text>{selectedRoute.body}</Text>
            <StartRoute item={selectedRoute} />
        </View>
      );
    };

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  titel: {
    color:'#006E3E',
    fontSize: 22,
    marginLeft: 25,
    fontWeight:'bold',
    marginTop: 5,
  },
  button: {
    alignItems: 'center',
    color:'white',
    width: 300,
    height: 60,
    padding: 10,
    backgroundColor: '#00A51E',
    borderRadius: 40,
    marginBottom: 10,
    marginTop: 10,
    fontSize: 18,
  },
});