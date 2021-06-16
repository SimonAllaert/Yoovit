import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './Tabs';
import LoginNavigation from './screens/LoginNavigation'


export default class MainNavigation extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            isSignIn: false,
        }
    };

    Login() {
        this.setState({
          isSignIn: true,
        });
    };
    LogOut() {
        this.setState({
          isSignIn: false,
        })
    };
    
  render (){
      const{isSignIn}= this.state;
    return (
      <NavigationContainer>
          {isSignIn ? (
            <Tabs />
          ): (
            <LoginNavigation Login={this.Login}/>
          )}
      </NavigationContainer>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
