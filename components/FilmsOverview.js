import React from 'react';
import { StyleSheet, FlatList, View, Text, Image, TouchableOpacity } from 'react-native';

/*
DIT MOET EEN API CALL WORDEN OM ALLE FILMS OP TE HALEN
*/

const DATA = [
    {
        id: "1",
        title: 'FILM 1',
        img: 'https://www.kindpng.com/picc/m/773-7734668_clapperboard-png-image-file-film-clap-transparent-png.png',
    },
    {
        id: "2",
        title: 'FILM 2',
        img: 'https://www.kindpng.com/picc/m/773-7734668_clapperboard-png-image-file-film-clap-transparent-png.png',
    },
    {
        id: "3",
        title: 'FILM 3',
        img: 'https://www.kindpng.com/picc/m/773-7734668_clapperboard-png-image-file-film-clap-transparent-png.png',
    },
    {
        id: "4",
        title: 'FILM 4',
        img: 'https://www.kindpng.com/picc/m/773-7734668_clapperboard-png-image-file-film-clap-transparent-png.png',
    },
    {
        id: "5",
        title: 'FILM 5',
        img: 'https://www.kindpng.com/picc/m/773-7734668_clapperboard-png-image-file-film-clap-transparent-png.png',
    },
    {
        id: "6",
        title: 'FILM 6',
        img: 'https://www.kindpng.com/picc/m/773-7734668_clapperboard-png-image-file-film-clap-transparent-png.png',
    },
    {
        id: "7",
        title: 'FILM 7',
        img: 'https://www.kindpng.com/picc/m/773-7734668_clapperboard-png-image-file-film-clap-transparent-png.png',
    },
    {
        id: "8",
        title: 'FILM 8',
        img: 'https://www.kindpng.com/picc/m/773-7734668_clapperboard-png-image-file-film-clap-transparent-png.png',
    },
    {
        id: "9",
        title: 'FILM 9',
        img: 'https://www.kindpng.com/picc/m/773-7734668_clapperboard-png-image-file-film-clap-transparent-png.png',
    },
];

const Film = ({ item, onPress }) => {


    return (
    <TouchableOpacity onPress={onPress} style={styles.filmInList}>
        <Image 
            source={{uri: item.img}} 
            style={styles.image}/>
        <Text> {item.title} </Text>
    </TouchableOpacity>
    );
};

const FilmsOverview = () => {

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

export default FilmsOverview;
