
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import RoutesScreen from './screens/RouteScreen';
import LocationsScreen from './screens/LocationsScreen';
import ProfileScreen from './screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                inactiveBackgroundColor: "#00a51e",
                activeBackgroundColor: "#ffffff",
                inactiveTintColor:  "#ffffff",
                activeTintColor: "#00a51e",
            }}
        >
            <Tab.Screen 
                name='Home' 
                component={HomeScreen} 
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <Image source={require('./assets/homescreen_icon.png')} style={{tintColor: color}} size={size}/>
                    )
                }}
            />
            <Tab.Screen 
                name='Routes' 
                component={RoutesScreen}
                options={{
                    tabBarLabel: 'Routes',
                    tabBarIcon: ({ color, size }) => (
                        <Image source={require('./assets/routes_icon.png')} style={{tintColor: color}} size={size}/>
                    )
                }} 
            />
            <Tab.Screen
                name='Map'
                component={MapScreen}
                options={{
                    tabBarLabel: 'Map',
                    tabBarIcon: ({ color, size }) => (
                        <Image source={require('./assets/map_icon.png')} style={{tintColor: color}} size={size}/>
                    )
                }}
            />
            <Tab.Screen
                name='Locations'
                component={LocationsScreen}
                options={{
                    tabBarLabel: 'Locations',
                    tabBarIcon: ({ color, size }) => (
                        <Image source={require('./assets/locations_icon.png')} style={{tintColor: color}} size={size}/>
                    )
                }}
            />
            <Tab.Screen
                name='Profile'
                component={ProfileScreen}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                        <Image source={require('./assets/profile_icon.png')} style={{tintColor: color}} size={size}/>
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default Tabs;
