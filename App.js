/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment, Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ActivityIndicator,
  Dimensions,
  Image,
  FlatList,
  Animated
} from 'react-native';
import { Container, Content, Button } from 'native-base';
import Modal from 'react-native-modal';

// import LinearGradient from "react-native-linear-gradient";
import axios from 'axios';

import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Fade,
  Loader,
  Shine,
  ShineOverlay,
} from 'rn-placeholder';

import StepIndicator from 'react-native-step-indicator';

const { height, width } = Dimensions.get("window");
const heightRatio = height / 667;
const widthRatio = width / 375;
const deviceWidth = Dimensions.get('window').width;
var deviceHeight = Dimensions.get('window').height;
var thumbWidth = deviceWidth / 2;
var thumbHeight = deviceHeight / 2 - 20;

const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: "#00ff00",
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: "#00ff00",
  stepStrokeUnFinishedColor: "#aaaaaa",
  separatorFinishedColor: "#00ff00",
  separatorUnFinishedColor: "#aaaaaa",
  stepIndicatorFinishedColor: "#00ff00",
  stepIndicatorUnFinishedColor: "#ffffff",
  stepIndicatorCurrentColor: "#ffffff",
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: "#00ff00",
  stepIndicatorLabelFinishedColor: "#ffffff",
  stepIndicatorLabelUnFinishedColor: "#aaaaaa",
  labelColor: "#999999",
  labelSize: 13,
  currentStepLabelColor: "#00ff00",
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPosition: 2
    };
  }

  render() {
    const labels = ['Placed', 'Shipped', 'OutforDelivery', 'Delivered'];
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <StepIndicator
          customStyles={customStyles}
          currentPosition={this.state.currentPosition}
          stepCount={4}
          labels={labels}
        />
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  contentView: {
    height: thumbHeight,
    width: thumbWidth,
  },
  view1: {
    flex: 1,
    flexDirection: "row",
    paddingLeft: 5 * widthRatio,
    width: thumbWidth
  },
  view2: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    width: thumbWidth,
    marginTop: 2 * heightRatio
  },
  brandText: {
    fontSize: 13 * heightRatio,
    fontWeight: "300",
    color: "#555"
  },
  icon: {
    color: "#696D79",
    fontSize: 24 * heightRatio,
    marginTop: -20 * heightRatio,
    marginRight: 4 * widthRatio
  },
  beforeDiscountText: {
    fontSize: 13 * heightRatio,
    fontWeight: "500",
    color: "#555"
  },
  lineThroughText: {
    fontSize: 11 * heightRatio,
    fontWeight: "300",
    color: "#888",
    marginLeft: 2 * widthRatio,
    textDecorationLine: "line-through"
  },
  afterDiscountText: {
    fontSize: 11 * heightRatio,
    fontWeight: "300",
    color: "#7468C5",
    marginLeft: 2 * widthRatio
  },
  descriptionText: {
    fontSize: 11 * heightRatio,
    fontWeight: "300",
    color: "#888",
    marginBottom: 4 * heightRatio
  }
});

{
  /*
<Placeholder Animation={Fade} Left={PlaceholderMedia}>

                <PlaceholderLine width={80} />
                <PlaceholderLine />

              <PlaceholderLine width={30} />
            </Placeholder>

*/
}
