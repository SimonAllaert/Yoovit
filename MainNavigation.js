import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './Tabs';
import LoginNavigation from './screens/LoginNavigation'

export default class MainNavigation extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isSignIn: true,
        }
    };

    LoginNav = () => {
      console.log(this.state.isSignIn);
      this.setState({
        isSignIn: true,
      });
    };

    LogoutNav = () => {
      this.setState({
        isSignIn: false,
      });
    };

  render (){
    console.log(this.state.isSignIn);
      const{isSignIn}= this.state;
    return (
      <NavigationContainer>
          {isSignIn ? (
            <Tabs LogoutNav={this.LogoutNav}/>
          ): (
            <LoginNavigation LoginNav={this.LoginNav}/>
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
