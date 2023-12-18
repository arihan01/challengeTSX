import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesom5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesom6 from 'react-native-vector-icons/FontAwesome6';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './screens/Home';
import ProfileScreen from './screens/Profile';
import LeaderboardScreen from './screens/Leaderboard';
import LeaguesScreen from './screens/Leagues';
import ResearchScreen from './screens/Research';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#6231AD',
          tabBarInactiveTintColor: '#B5C0C8',
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({color}) => (
              <FontAwesome name="home" color={color} size={28} />
            ),
          }}
        />

        <Tab.Screen
          name="Leagues"
          component={LeaguesScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({color}) => (
              <FontAwesom5 name="trophy" color={color} size={24} />
            ),
          }}
        />

        <Tab.Screen
          name="Research"
          component={ResearchScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({color}) => (
              <FontAwesom6 name="magnifying-glass" color={color} size={24} />
            ),
          }}
        />

        <Tab.Screen
          name="Leaderboard"
          component={LeaderboardScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({color}) => (
              <Entypo name="bar-graph" color={color} size={24} />
            ),
          }}
        />

        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({color}) => (
              <Ionicons name="person" color={color} size={24} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
