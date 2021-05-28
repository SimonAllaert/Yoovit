import React,{ Component } from 'react';
import { StyleSheet, FlatList, View, Text, Image, TouchableOpacity, ActivityIndicator } from 'react-native';

const Film = ({ item, openDetails }) => {
    return (
    <TouchableOpacity onPress={() => openDetails(item)} style={styles.filmInList}>
        <Image 
            source={{uri: 'http://yoovit.site/' + item.field_poster}}  /* Url + json item field_poster koppelen */ 
            style={styles.image}/>
        <Text style={styles.title}> {item.title_1} {/* Hier komt de kopie right te staan*/}</Text> 
    </TouchableOpacity>
    );
};

export default class FilmsOverview extends React.Component {

    constructor(props){
        super(props)
        this.state={
            data:[]
        }
    }

    componentDidMount() {
        fetch('http://yoovit.site/api/films')
          .then((response) => response.json())
          .then((json) => {
            this.setState({ data: json });
          })
          .catch((error) => console.error(error));
      }

  renderItem = ({ item }) => {
      return (
        <Film 
            item={item}
            openDetails={this.props.openDetails}
        />
      );
  };

  render () {
    const { data } = this.state;
    return (
        <View style={styles.container}>
            <FlatList
                data={data}
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
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  image: {
      height: 200,
      width: 200,
      marginLeft: 20, /* margin geven*/ 
  },
  title: {
    textAlign: 'right',
  },
  filmInList: {
      marginHorizontal: 10,
  },
});
