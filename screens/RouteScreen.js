import React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import RouteOverviewScreen from './RouteOverviewScreen';
import CreateRouteScreen from './CreateRouteScreen';
import RouteDetailsScreen from './RouteDetailsScreen';
import AddStopScreen from './AddStopScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default class RouteScreen extends React.Component {
  constructor(props){
    super(props)
    this.state={
    };
  };

  render() {
    return (
        <Stack.Navigator initialRouteName="RouteOverview">
          <Stack.Screen 
            name="RouteOverview" 
            component={RouteOverviewScreen}
            headerMode={null}
            options={{
              headerShown: false,
              animationEnabled: false,
            }}
          />
          <Stack.Screen 
            name="CreateRoute" 
            component={CreateRouteScreen}
            headerMode={null}
            options={{
              headerShown: false,
              animationEnabled: false,
            }}
          />
          <Stack.Screen 
            name="RouteDetails" 
            component={RouteDetailsScreen}
            headerMode={null}
            options={{
              headerShown: false,
              animationEnabled: false,
            }}
          />
          <Stack.Screen 
            name="AddStop" 
            component={AddStopScreen}
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
