
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import RoutesScreen from './screens/RouteScreen';
import LocationsScreen from './screens/LocationsScreen';
import ProfileScreen from './screens/ProfileScreen';
import LoginScreen from './screens/LoginScreen';


const Tab = createBottomTabNavigator();

export default class Tabs extends React.Component {
    constructor(props){
        super(props)
      };
    
      LogoutNav() {
        console.log('werkt')
        this.props.LogoutNav();
      };

    render () {
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
                    name='Kaart'
                    component={MapScreen}
                    options={{
                        tabBarLabel: 'Kaart',
                        tabBarIcon: ({ color, size }) => (
                            <Image source={require('./assets/map_icon.png')} style={{tintColor: color}} size={size}/>
                        )
                    }}
                />
                <Tab.Screen
                    name='Locatie'
                    component={LocationsScreen}
                    options={{
                        tabBarLabel: 'Locatie',
                        tabBarIcon: ({ color, size }) => (
                            <Image source={require('./assets/locations_icon.png')} style={{tintColor: color}} size={size}/>
                        )
                    }}
                />
                <Tab.Screen
                    name='Profiel'
                    component={ProfileScreen}
                    initialParams={{LogoutNav: this.LogoutNav}}
                    options={{
                        tabBarLabel: 'Profiel',
                        tabBarIcon: ({ color, size }) => (
                            <Image source={require('./assets/profile_icon.png')} style={{tintColor: color}} size={size}/>
                        )
                    }}
                />
            </Tab.Navigator>
        )
    }

}
