import React from 'react';
import {Platform} from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import MatchesScreen from '../screens/MatchesScreen';
import SettingsScreen from '../screens/SettingsScreen';
import MessagesScreen from '../screens/MessagesScreen';
import ProfileScreen from '../screens/ProfileScreen';
import DemoScreen from '../screens/DemoScreen';

HomeScreen.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({focused}) => <TabBarIcon focused={focused} name="explore" />,
};

DemoScreen.navigationOptions = {
  tabBarLabel: 'Demo',
  tabBarIcon: ({focused}) => <TabBarIcon focused={focused} name="star" />,
};

MessagesScreen.navigationOptions = {
  title: 'Messages',
};

MatchesScreen.navigationOptions = {
  title: 'Matches',
};

const MatchesStack = createStackNavigator({
  Matches: MatchesScreen,
  Profile: ProfileScreen,
});

MatchesStack.navigationOptions = {
  tabBarLabel: 'Matches',
  tabBarIcon: ({focused}) => <TabBarIcon focused={focused} name="heart" />,
};

const MessagesStack = createStackNavigator({
  Messages: MessagesScreen,
});

MessagesStack.navigationOptions = {
  tabBarLabel: 'Messages',
  tabBarIcon: ({focused}) => <TabBarIcon focused={focused} name="chat" />,
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({focused}) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

export default createBottomTabNavigator({
  HomeScreen,
  MatchesStack,
  MessagesStack,
  SettingsStack,
  DemoScreen,
});
