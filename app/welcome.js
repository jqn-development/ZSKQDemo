/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  NativeModules,
  Image,
  ScrollView
} from 'react-native';

let RNManager = NativeModules.RNManager;
let token = RNManager.token;
let splash = require('../img/splash_logo.png');

export default class Welcome extends Component {

  onPressFeed(){
    RNManager.showMessage("jump to feed");
    this.props.navigator.push({name: 'feed'});
  }

  onPressNavbar(){
    RNManager.showMessage("jump to navbar");
    this.props.navigator.push({name: 'navbar'});
  }

  onPressNavigator(){
    RNManager.showMessage("jump to navigator");
    this.props.navigator.push({name: 'navigator'});
  }

  onPressAnimatable(){
    RNManager.showMessage("jump to animatable");
    this.props.navigator.push({name: 'animatable'});
  }

  onPressBaidu(){
    RNManager.showMessage("jump to bdmapview");
    this.props.navigator.push({name: 'bdmapview'});
  }

  onPressCalendar(){
    RNManager.showMessage("jump to bdmapview");
    this.props.navigator.push({name: 'calendar'});
  }

  onPressRNManager(){
    RNManager.showMessage(token);
  }

  showIndeterminate(){
    RNManager.showIndeterminate();
  }

  showLabelIndeterminate(){
    RNManager.showLabelIndeterminate("please wait hh");
  }

  showDetailIndeterminate(){
    RNManager.showDetailIndeterminate("please wait hh", "Downloading data");
  }

  showDeterminate(){
    RNManager.showDeterminate("please wait hh");
  }

  showAnnularDeterminate(){
    RNManager.showAnnularDeterminate("please wait hh","Downloading data");
  }

  showBarDeterminate(){
    RNManager.showBarDeterminate("please wait hh");
  }

  showCustomView(){
    RNManager.showCustomView("please wait hh");
  }

  showDimBackgroud(){
    RNManager.showDimBackgroud(0.5);
  }

  showCustomColorAnimate(){
    RNManager.showCustomColorAnimate(2);
  }

  render() {
    return (
      <ScrollView style={styles.container}>

      <Image style={styles.searchIcon} source={splash}/>

        <Text style={styles.welcome} onPress={this.onPressFeed.bind(this)}>
          jump to feed
        </Text>

        <Text style={styles.welcome} onPress={this.onPressNavbar.bind(this)}>
          jump to navbar
        </Text>

        <Text style={styles.welcome} onPress={this.onPressNavigator.bind(this)}>
          jump to navigator
        </Text>

        <Text style={styles.welcome} onPress={this.onPressAnimatable.bind(this)}>
          jump to animatable
        </Text>

        <Text style={styles.welcome} onPress={this.onPressBaidu.bind(this)}>
          jump to baidu
        </Text>

        <Text style={styles.welcome} onPress={this.onPressCalendar.bind(this)}>
          jump to calendar
        </Text>

        <Text style={styles.welcome}  onPress={this.onPressRNManager.bind(this)}>
          RNManager Test
        </Text>

        <Text style={styles.welcome} onPress={this.showIndeterminate.bind(this)}>
          showIndeterminate
        </Text>

        <Text style={styles.welcome} onPress={this.showLabelIndeterminate.bind(this)}>
          showLabelIndeterminate
        </Text>

        <Text style={styles.welcome} onPress={this.showDetailIndeterminate.bind(this)}>
          showDetailIndeterminate
        </Text>

        <Text style={styles.welcome} onPress={this.showDeterminate.bind(this)}>
          showDeterminate
        </Text>

        <Text style={styles.welcome} onPress={this.showAnnularDeterminate.bind(this)}>
          showAnnularDeterminate
        </Text>

        <Text style={styles.welcome} onPress={this.showBarDeterminate.bind(this)}>
          showBarDeterminate
        </Text>

        <Text style={styles.welcome} onPress={this.showCustomView.bind(this)}>
          showCustomView
        </Text>

        <Text style={styles.welcome} onPress={this.showDimBackgroud.bind(this)}>
          showDimBackgroud
        </Text>

        <Text style={styles.welcome} onPress={this.showCustomColorAnimate.bind(this)}>
          showCustomColorAnimate
        </Text>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  searchIcon:{
    width: 100,
    height:100,
  },
});
