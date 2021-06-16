import React from 'react';
import { StyleSheet, FlatList, View, Text, Image, TouchableOpacity } from 'react-native';

/*
DIT MOET EEN API CALL WORDEN OM ALLE SERIES OP TE HALEN
*/


const Serie = ({ item, openDetailsSeries }) => {
    return (
        <TouchableOpacity onPress={() => openDetailsSeries(item)} style={styles.SerieInList}>
            <Image 
                source={{uri: 'http://yoovit.site/' + item.field_posterserie}} 
                style={styles.image}/>
            <Text style={styles.title}> {item.field_copyright_posterserie} </Text>
        </TouchableOpacity>
     );
};

export default class SeriesOverview extends React.Component {
    
    constructor(props){
        super(props)
        this.state={
            dataSeries:[]
        }
    }

    componentDidMount() {
        fetch('http://yoovit.site/api/series')
          .then((apiresponse) => apiresponse.json())
          .then((json) => {
            this.setState({ dataSeries: json });
          })
          .catch((error) => console.error(error));
      }

    renderItem = ({ item }) => {
        return (
            <Serie 
                item={item}
                openDetailsSeries={this.props.openDetailsSeries}
            />
        );
    };
  
    render () {
        const { dataSeries } = this.state;
        return(
            <View style={styles.container}>
                <FlatList
                    data={dataSeries}
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
  SerieInList: {
    marginHorizontal: 10,
  },
});
