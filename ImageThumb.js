import React, { Component, PropTypes } from "react";
import { Animated, View, Image } from "react-native";

class ImageThumb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: new Animated.Value(0),
      thumbnailOpacity: new Animated.Value(0)
    };
  }

  onLoaded = () => {
    Animated.timing(this.state.thumbnailOpacity, {
      toValue: 1,
      duration: 250,
    }).start();
  };
  onLoad = () => {
    console.log('inside onload');
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 250,
    }).start();
  };

  render() {
    return (
      <Animated.Image
        style={{
          height: 250,
          width: 179,
          opacity: this.state.thumbnailOpacity,
          position: "absolute",
          backgroundColor: '#f5fffa',
        }}
        source={this.props.image}
        // resizeMethod="resize"
        // resizeMode="contain"
        onLoad={e => this.onLoaded(e)}
      />
    );
  }
}

export default ImageThumb;
