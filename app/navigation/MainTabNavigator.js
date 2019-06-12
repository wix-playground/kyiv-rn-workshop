import React from 'react';
import {Platform} from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import MatchesScreen from '../screens/MatchesScreen';
import SettingsScreen from '../screens/SettingsScreen';
import MessagesScreen from '../screens/MessagesScreen';
import ProfileScreen from '../screens/ProfileScreen';

HomeScreen.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({focused}) => <TabBarIcon focused={focused} name="explore" />,
};

MessagesScreen.navigationOptions = {
  title: 'Messages',
};

MatchesScreen.navigationOptions = {
  title: 'Matches',
};

// TODO: [Navigation] 1. Uncomment to add MatchesScreen

// const MatchesStack = createStackNavigator({
//   Matches: MatchesScreen,
//   Profile: ProfileScreen,
// });
//
// MatchesStack.navigationOptions = {
//   tabBarLabel: 'Matches',
//   tabBarIcon: ({focused}) => <TabBarIcon focused={focused} name="heart" />,
// };

// TODO: [Navigation] 2. Add messages stack and navigationOptions
// TODO: [Navigation] 3. Add settings stack and navigationOptions

export default createBottomTabNavigator({
  HomeScreen,

  // TODO: [Navigation] 1. Uncomment to add MatchesScreen
  // MatchesStack,

  // TODO: [Navigation] 2. Add messages stack and navigationOptions
  // TODO: [Navigation] 3. Add settings stack and navigationOptions
});
