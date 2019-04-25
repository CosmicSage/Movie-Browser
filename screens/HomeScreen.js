import React from "react";
import {Text, View, SectionList, TextInput, StyleSheet, Button} from "react-native";
import {Constants} from "expo";
import Movie from "./Movie.js";
export default class HomeScreen extends React.Component {
  state = {
    Movies : []
  }
  static navigationOptions = {header : null}

  search = async name => {
    try {
      let result = [];
      for (var i = 1; i < 3; i++) {
        const response = await fetch(`http://www.omdbapi.com/?apikey=ecf1805b&s=${name}&page=${i}`);
        this.setState({ Movies : ["Loading..."]});
        // Object destructuring leads to retrival of only the value inside the key 'Search' of the response that arrives from the api
        let {Search} = await response.json();
        if (typeof Search === "undefined")
        {
          Search = [];
          result = [...result, ...Search];
          break;
        }
        else {
          result = [...result, ...Search];
        }
      }
      if (result.length < 1)  this.setState({ Movies : undefined }, () => {console.log("dick suck you")});
      else this.setState({ Movies : (result) });
    }
    catch (e) {
      console.log(`\x1b[36mits fucked ${e}\x1b[0m`);
    }
  }


  renderSectionHeader = feed => {return (
    <View style={styles.header}>
        <Text style={styles.home}>{feed.section.title}</Text>
        <TextInput style={styles.box} placeholderTextColor="#006db0" inputStyle={styles.inputStyle} placeholder="Search" onChangeText={this.search}/>
    </View>
  )};

  renderItem = feed => { const Title = feed.item.Title || feed.item;
    return (<Movie Data={feed.item} function={this.navigate}/>);}

  render() {
    return (
      <View style={styles.container}>
        <SectionList renderItem={this.renderItem} renderSectionHeader={this.renderSectionHeader} stickySectionHeadersEnabled={true}
          sections={[
            {title : "Home",
            data : (this.state.Movies || ["/** SOme spooky library stuff /**"])}
          ]}/>
        <Button onPress={this.About} title="Details"/>
      </View>

    );
  }
  navigate = (ID) => {
    this.props.navigation.navigate("Details", {imdbID : ID});
  }
  About = () => {
    alert("Search Movies and Find its info");
  }
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  box : {
    borderWidth : 2,
    paddingLeft : 10,
  },
  home : {fontWeight: 'bold', fontSize : 20, paddingBottom : 10, paddingLeft : 15},
  header: {
    flex: 1,
    backgroundColor: 'lightgrey',
    paddingTop : 75,
  },
  inputStyle : {fontWeight : "bold", color:"blue"},
});
/** Junck
your key: ecf1805b
const stringToMakeYellow = "Congratulations";
console.log(`'\x1b[33m%s', ${stringToMakeYellow}\x1b[0m`);  //yellow
  console.log(`\x1b[36mits fucked ${e}\x1b[0m`);
    <div data-snack-id="@jhhayashi/project2-solution" data-snack-platform="ios" data-snack-preview="true" data-snack-theme="light" style="overflow:hidden;background:#fafafa;border:1px solid rgba(0,0,0,.08);border-radius:4px;height:505px;width:100%"></div>
<script async src="https://snack.expo.io/embed.js"></script>
onReachedEnd = {this.End}
End = () => {

}
**/

// this.setState({Movies : [...this.state.Movies, ...Search]}, () => {
