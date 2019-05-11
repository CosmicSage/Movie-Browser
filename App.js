import React from 'react';
import {createStackNavigator, createAppContainer} from "react-navigation";
import {createMaterialBottomTabNavigator} from "react-navigation-material-bottom-tabs";
import HomeScreen from "./screens/HomeScreen.js";
import DetailsScreen from "./screens/DetailsScreen.js";
import SettingsPage from "./SettingsPage.js";

const StackNavigator = createStackNavigator({
  Home : HomeScreen,
  Details : DetailsScreen
}, {initialRouteName : "Home", navigationOptions : {headerStyle : {backgroundColor : "#f4511e"}}});

StackNavigator.navigationOptions = ({ navigation }) => {
  const { state : { routes, index }} = navigation;
  let tabBarVisible = true;
  if (routes[index].routeName === "Details") {
    tabBarVisible = false;
  }
  return { tabBarVisible };
}

const TabNavigator = createMaterialBottomTabNavigator({
  Home : StackNavigator,
  SettingsPage : SettingsPage
}, {activeColor : "green"});

const AppContainer = createAppContainer(TabNavigator);

export default class App extends React.Component {
  render() {
    return (
      <AppContainer/>
    );
  }
}
