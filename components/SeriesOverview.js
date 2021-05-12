import React from 'react';
import { StyleSheet, FlatList, View, Text, Image, TouchableOpacity } from 'react-native';

/*
DIT MOET EEN API CALL WORDEN OM ALLE SERIES OP TE HALEN
*/

const DATA = [
    {
        id: "1",
        title: 'SERIES 1',
        img: 'https://www.kindpng.com/picc/m/773-7734668_clapperboard-png-image-file-film-clap-transparent-png.png',
    },
    {
        id: "2",
        title: 'SERIES 2',
        img: 'https://www.kindpng.com/picc/m/773-7734668_clapperboard-png-image-file-film-clap-transparent-png.png',
    },
    {
        id: "3",
        title: 'SERIES 3',
        img: 'https://www.kindpng.com/picc/m/773-7734668_clapperboard-png-image-file-film-clap-transparent-png.png',
    },
    {
        id: "4",
        title: 'SERIES 4',
        img: 'https://www.kindpng.com/picc/m/773-7734668_clapperboard-png-image-file-film-clap-transparent-png.png',
    },
    {
        id: "5",
        title: 'SERIES 5',
        img: 'https://www.kindpng.com/picc/m/773-7734668_clapperboard-png-image-file-film-clap-transparent-png.png',
    },
    {
        id: "6",
        title: 'SERIES 6',
        img: 'https://www.kindpng.com/picc/m/773-7734668_clapperboard-png-image-file-film-clap-transparent-png.png',
    },
    {
        id: "7",
        title: 'SERIES 7',
        img: 'https://www.kindpng.com/picc/m/773-7734668_clapperboard-png-image-file-film-clap-transparent-png.png',
    },
    {
        id: "8",
        title: 'SERIES 8',
        img: 'https://www.kindpng.com/picc/m/773-7734668_clapperboard-png-image-file-film-clap-transparent-png.png',
    },
    {
        id: "9",
        title: 'SERIES 9',
        img: 'https://www.kindpng.com/picc/m/773-7734668_clapperboard-png-image-file-film-clap-transparent-png.png',
    },
];

const Film = ({ item, onPress }) => (
    <TouchableOpacity onPress={onPress} style={styles.filmInList}>
        <Image 
            source={{uri: item.img}} 
            style={styles.image}/>
        <Text> {item.title} </Text>
    </TouchableOpacity>
);

const SeriesOverview = () => {

  const renderItem = ({ item }) => {
      return (
        <Film 
            item={item}
            onPress={() => {return;}}
        />
      );
  };
  
  return (
    <View style={styles.container}>
        <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            horizontal={true}
        />
    </View>
  );
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

export default SeriesOverview;
