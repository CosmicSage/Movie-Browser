import React from "react";
import {Text, Image, TouchableOpacity, View, Dimensions} from "react-native";

export const Ratings = props => {
  console.log(props.sources);
  const Array = props.sources.map(rating => (<Text>rating.Source</Text>));
  return Array;
}

const Movie = props => {
  return (
    <TouchableOpacity onPress={() => { props.function(props.Data.imdbID); }}>
    <View style={{flexDirection : "row", paddingTop : 10}}>
      <Image source={{ uri : `${props.Data.Poster}`}} style={{height : 100, width : 100, resizeMode : "center"}}/>
      <View style={{flexDirection : "column", justifyContent : "center", flex : 1}}>
        <Text style={{fontWeight : "bold", paddingLeft : 5, fontSize : 18}}>{props.Data.Title || props.Data}</Text>
          <Text style={{paddingLeft : 5, fontSize : 18}}>{props.Data.Year} ({props.Data.Type})</Text>
      </View>
    </View>
    </TouchableOpacity>
  );
}
export default Movie;
