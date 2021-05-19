import React from 'react';
import { StyleSheet, FlatList, View, Text, Image, TouchableOpacity } from 'react-native';

/*
DIT MOET EEN API CALL WORDEN OM ALLE FILMS OP TE HALEN
*/

const DATA = [
    {
        nid: "1",
        title_1: 'FILM 1',
        field_poster: 'https://www.kindpng.com/picc/m/773-7734668_clapperboard-png-image-file-film-clap-transparent-png.png',
    },
    {
        nid: "2",
        title_1: 'FILM 2',
        field_poster: 'https://www.kindpng.com/picc/m/773-7734668_clapperboard-png-image-file-film-clap-transparent-png.png',
    },
    {
        nid: "3",
        title_1: 'FILM 3',
        field_poster: 'https://www.kindpng.com/picc/m/773-7734668_clapperboard-png-image-file-film-clap-transparent-png.png',
    },
    {
        nid: "4",
        title_1: 'FILM 4',
        field_poster: 'https://www.kindpng.com/picc/m/773-7734668_clapperboard-png-image-file-film-clap-transparent-png.png',
    },
    {
        nid: "5",
        title_1: 'FILM 5',
        field_poster: 'https://www.kindpng.com/picc/m/773-7734668_clapperboard-png-image-file-film-clap-transparent-png.png',
    },
    {
        nid: "6",
        title_1: 'FILM 6',
        field_poster: 'https://www.kindpng.com/picc/m/773-7734668_clapperboard-png-image-file-film-clap-transparent-png.png',
    },
    {
        nid: "7",
        title_1: 'FILM 7',
        field_poster: 'https://www.kindpng.com/picc/m/773-7734668_clapperboard-png-image-file-film-clap-transparent-png.png',
    },
    {
        nid: "8",
        title_1: 'FILM 8',
        field_poster: 'https://www.kindpng.com/picc/m/773-7734668_clapperboard-png-image-file-film-clap-transparent-png.png',
    },
    {
        nid: "9",
        title_1: 'FILM 9',
        field_poster: 'https://www.kindpng.com/picc/m/773-7734668_clapperboard-png-image-file-film-clap-transparent-png.png',
    },
];

const Film = ({ item, openDetails }) => {

    return (
    <TouchableOpacity onPress={() => openDetails(item)} style={styles.filmInList}>
        <Image 
            source={{uri: item.field_poster}} 
            style={styles.image}/>
        <Text> {item.title_1} </Text>
    </TouchableOpacity>
    );
};

export default class FilmsOverview extends React.Component {

  renderItem = ({ item }) => {
      return (
        <Film 
            item={item}
            openDetails={this.props.openDetails}
        />
      );
  };

  
  render () {
    return (
        <View style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={this.renderItem}
                keyExtractor={(item) => item.nid}
                horizontal={true}
            />
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
  filmInList: {
      marginHorizontal: 10,
  },
});
