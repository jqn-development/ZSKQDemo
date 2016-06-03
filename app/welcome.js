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
const Device = require('react-native-device-detection');
import './Storage';


export default class Welcome extends Component {

  componentDidMount(){
    if(Device.isAndroid){
      console.log("-----android-----");
    }

    var userA = {
        name: 'A',
        age: 20,
        tags: [
            'geek',
            'nerd',
            'otaku'
        ]
    };

    Storage.save({
        key: 'user',  // Note: Do not use underscore("_") in key!
        id: '1001',   // Note: Do not use underscore("_") in id!
        rawData: userA,
        expires: 1000 * 60
    });

  }

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

  onPressCamera(){
    RNManager.showMessage("jump to camera");
    this.props.navigator.push({name: 'camera'});
  }

  onPressModal(){
    RNManager.showMessage("jump to modal");
    this.props.navigator.push({name: 'modal'});
  }

  onPressBrowser(){
    RNManager.showMessage("jump to browser");
    this.props.navigator.push({name: 'browser'});
  }

  onPressAreaPicker(){
    RNManager.showMessage("jump to AreaPicker");
    this.props.navigator.push({name: 'areapicker'});
  }

  onPressDatePicker(){
    RNManager.showMessage("jump to DatePicker");
    this.props.navigator.push({name: 'datepicker'});
  }

  onPressEstyleSheet(){
    RNManager.showMessage("jump to estylesheet");
    this.props.navigator.push({name: 'estylesheet'});
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
          jump to feed haha
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

        <Text style={styles.welcome} onPress={this.onPressCamera.bind(this)}>
          jump to camera
        </Text>

        <Text style={styles.welcome} onPress={this.onPressModal.bind(this)}>
          jump to modal
        </Text>

        <Text style={styles.welcome} onPress={this.onPressBrowser.bind(this)}>
          jump to browser
        </Text>

        <Text style={styles.welcome} onPress={this.onPressAreaPicker.bind(this)}>
          jump to area picker
        </Text>

        <Text style={styles.welcome} onPress={this.onPressDatePicker.bind(this)}>
          jump to date picker
        </Text>

        <Text style={styles.welcome} onPress={this.onPressEstyleSheet.bind(this)}>
          jump to estylesheet
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
