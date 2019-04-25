import React from 'react';
import { StyleSheet } from 'react-native';
import {createStackNavigator, createAppContainer} from "react-navigation";
import {createMaterialBottomTabNavigator} from "react-navigation-material-bottom-tabs";
import HomeScreen from "./screens/HomeScreen.js";
import DetailsScreen from "./screens/DetailsScreen.js";
import SettingsPage from "./SettingsPage.js";

const StackNavigator = createStackNavigator({
  Home : HomeScreen,
  Details : DetailsScreen
}, {initialRouteName : "Home", navigationOptions : {headerStyle : {backgroundColor : "#f4511e"}}});

const TabNavigator = createMaterialBottomTabNavigator({
  Tab1 : StackNavigator,
  Tab2 : SettingsPage
}, {activeColor : "green"});

const AppContainer = createAppContainer(TabNavigator);

export default class App extends React.Component {
  render() {
    return (
      <AppContainer/>
    );
  }
}
