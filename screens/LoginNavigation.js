import React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegisterScreen from './RegisterScreen';
import RegisterOptiesScreen from './RegisterOptiesScreen';
import LoginScreen from './LoginScreen';

const Stack = createStackNavigator();

export default class LoginNavigation extends React.Component {

  constructor(props){
    super(props)
  };

  LoginNav() {
    console.log('werkt')
    this.props.LoginNav;
  };

  render() {
    return (
        <Stack.Navigator initialRouteName="LoginUser">
          <Stack.Screen 
            name="LoginUser"
            component={LoginScreen}
            headerMode={null}
            initialParams={{LoginNav: this.LoginNav}} 
            options={{
              headerShown: false,
              animationEnabled: false,
            }}
          />
          <Stack.Screen 
            name="RegisterUser"
            component={RegisterScreen}
            headerMode={null}
            options={{
              headerShown: false,
              animationEnabled: false,
            }}
          />
          <Stack.Screen 
            name="RegisterUserOpties"
            component={RegisterOptiesScreen}
            headerMode={null}
            options={{
              headerShown: false,
              animationEnabled: false,
            }}
          />
        </Stack.Navigator>
    )
  };
};
