import React from 'react';
import { View, Image } from 'react-native';
import { Header } from 'react-native-elements';

export default class MainHeader extends React.Component {
  render () {
  return (
      <Header 
        backgroundColor='#00a51e' 
        containerStyle= {{
            height: 110,
        }}>
        <View/>
        <Image 
            source={require('../assets/header_logo.png')}
            style={{
                height: 35,
                width: 35,
            }}
        />
        <View/>
      </Header>
    )
  }
}
