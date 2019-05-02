import React from "react";
import {Text, View, Image, ScrollView, StyleSheet, Dimensions} from "react-native";
import {Ratings} from "./Movie.js";
const screen = Dimensions.get("window");

export default class DetailsScreen extends React.Component {
  state = {
    Movie : {}
  }
  /** navigation.state.index is undefined
      Therefore used routeName
  **/
  static navigationOptions = ({ navigation }) => {
  navigationOptions = {
    title: navigation.getParam('Title', 'Info Unavialable'),
  };
  if (navigation.state.routeName === "Details") {
    navigationOptions.tabBarVisible = false;
  }
  return navigationOptions;
};

  componentDidMount () {
    // Object Destructuring
    const { navigation } = this.props;
    const ID = navigation.getParam("imdbID", "404");
    console.log(`\x1b[36mits fucked ${ID}\x1b[0m`);
    //iife
    (async ID => {
    try {
      const response = await fetch(`http://www.omdbapi.com/?apikey=ecf1805b&i=${ID}&plot=full`);
      const results = await response.json();
      this.setState({Movie : results});
      this.props.navigation.setParams({Title : results.Title});
    }
    catch(e) {
      console.log(`\x1b[36mits fucked ${e}\x1b[0m`);
    }
  })(ID);
}

  render() {
    return (
      <ScrollView>
        <Image source={{ uri : `${this.state.Movie.Poster}`}} style={styles.Poster}/>
        <View style={styles.container}>
          <View style={{flexDirection : "row", justifyContent: "flex-start", flex : 1, alignItems : "center", paddingTop : 5}}>
            <Text style={styles.Title}>{this.state.Movie.Title}</Text>
            <Text>  ({this.state.Movie.Year})</Text>
          </View>
          <Text>{this.state.Movie.Rated},  {this.state.Movie.Runtime}</Text>
          <Text style={styles.Plot}>{this.state.Movie.Plot}</Text>
        </View>
        <Ratings ratings={this.state.Movie.Ratings}/>
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft : 8,
  },
  Plot : { fontStyle : "italic", fontWeight : '400', fontSize : 18, marginLeft : 5, marginRight : 8, marginTop : 8},
  Poster: {
    width : screen.width,
    height : screen.height,
    resizeMode : "stretch"
  },
  Title : { fontWeight : "bold", fontSize : 20}
});
/** Junck
// <View style={styles.container}>
//   <Text style={styles.Title}>dsalsdjfhal</Text>
// </View>
 **/
