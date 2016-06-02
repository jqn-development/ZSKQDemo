import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  DeviceEventEmitter,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';

// component.js
import EStyleSheet from 'react-native-extended-stylesheet';

// calc styles
EStyleSheet.build({
  textColor: 'black'
});

const styles = EStyleSheet.create({
  column: {
    width: '80%'         // 80% of screen width
  },
  text: {
    color: '$textColor', // use variable $textColor
    fontSize: '1.5rem'   // use relative unit - CSS3 rem
  }
});

export default class EStyleSheetDemo extends React.Component {
  render() {
    return (
      // use styles as usual
      <View style={styles.column}>
        <Text style={styles.text}>Hello</Text>
      </View>
    );
  }
}
