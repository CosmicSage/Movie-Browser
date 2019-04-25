import React from "react";
import {Switch, Text, View, StyleSheet} from "react-native";

class SettingsPage extends React.Component {
  state = {
    bool : false,
  }
  Change = () => {
    this.setState(prevState => ({
      bool : !prevState.bool
    }));
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex : 1, flexDirection : "row" }}>
          <Text style={{paddingLeft : 10}}>10</Text>
        </View>
        <View style={{ flex : 1, flexDirection : "row" }}>
        <Switch
          value={this.state.hasRead}
          onValueChange={(value) => {
            this.setState({
              hasRead: value
            })
          }} />
          <Text style={{paddingLeft : 10}}>20</Text>
        </View>
        <View style={{ flex : 1, flexDirection : "row" }}>
        <Switch
          value={this.state.hasRead}
          onValueChange={(value) => {
            this.setState({
              hasRead: value
            })
          }} />
          <Text style={{paddingLeft : 10}}>30</Text>
        </View>
        <View style={{ flex : 1, flexDirection : "row" }}>
        <Switch
          value={this.state.hasRead}
          onValueChange={(value) => {
            this.setState({
              hasRead: value
            })
          }} />
          <Text style={{paddingLeft : 10}}>40</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
export default SettingsPage;
/**<View style={styles.container}>
  <View style={{ flex : 1, flexDirection : "row" }}>
    <Switch onValueChange={this.change}}/>
    <Text style={{paddingLeft : 10}}>10</Text>
  </View>
  <View style={{ flex : 1, flexDirection : "row" }}>
    <Switch onValueChange={this.change}}/>
    <Text style={{paddingLeft : 10}}>20</Text>
  </View>
  <View style={{ flex : 1, flexDirection : "row" }}>
    <Switch onValueChange={this.change}} />
    <Text style={{paddingLeft : 10}}>30</Text>
  </View>
  <View style={{ flex : 1, flexDirection : "row" }}>
    <Switch onValueChange={this.change}} />
    <Text style={{paddingLeft : 10}}>40</Text>
  </View>
</View>**/
