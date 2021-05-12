
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import RoutesScreen from './screens/RouteScreen';
import LocationsScreen from './screens/LocationsScreen';
import ProfileScreen from './screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name='Home' component={HomeScreen} />
            <Tab.Screen name='Routes' component={RoutesScreen} />
            <Tab.Screen name='Map' component={MapScreen} />
            <Tab.Screen name='Locations' component={LocationsScreen} />
            <Tab.Screen name='Profile' component={ProfileScreen} />
        </Tab.Navigator>
    )
}

export default Tabs;
