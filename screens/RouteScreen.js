import React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import RouteOverviewScreen from './RouteOverviewScreen';
import CreateRouteScreen from './CreateRouteScreen';
import StartRouteScreen from './StartRouteScreen';
import RouteDetailsScreen from './RouteDetailsScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default class RouteScreen extends React.Component {
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
            name="StartRoute" 
            component={StartRouteScreen}
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
