import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const Map = () => {
  
  return (
    <View style={styles.container}>
        <Text>HIER MOET IETS VOOR KAART</Text>
        <Image 
          source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
          style={styles.image}
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
    minWidth: '100%',
    maxWidth: '100%',
    height: '100%',
  },
});

export default Map;
