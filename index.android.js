/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import {
  AppRegistry,
　　View,
　　Navigator,
　　Text,
　　BackAndroid,
　　StyleSheet
} from 'react-native';
import Welcome from './app/welcome.js';
import Feed from './app/feed.js';
import NavBar from './app/navigation/NavBar.js';
import NavigationBarSample from './app/NavigationBarSample.js';
import ExampleView from './app/ExampleView.js';
import BDMapView from './app/MapView.js';
import CalendarDemo from './app/CalendarDemo.js';
import CameraDemo from './app/CameraDemo.js';
import ModalDemo from './app/ModalDemo.js';
import PhotoBrowserExample from './app/PhotoBrowserExample.js';

let _navigator;

class AwesomeProject extends Component {

  configureScene(route){
    return Navigator.SceneConfigs.FadeAndroid;
  }

  renderScene(router, navigator){

    console.log("router.name---",router.name);
    _navigator = navigator;
    var Component = null;
    switch(router.name){
      case "welcome":
        Component = Welcome;
        console.log("Component Welcome---",router.name);
        break;
      case "feed":
        Component = Feed;
        console.log("Component Feed---",router.name);
        break;
      case "navigator":
        Component = NavigationBarSample;
        console.log("Component navigator---",router.name);
        break;
      case "navbar":
        Component = NavBar;
        console.log("Component navbar---",router.name);
        break;
      case "animatable":
        Component = ExampleView;
        break;
      case "bdmapview":
        Component = BDMapView;
        break;
      case "calendar":
        Component = CalendarDemo;
        break;
      case "camera":
        Component = CameraDemo;
        break;
      case "modal":
        Component = ModalDemo;
        break;
      case "browser":
        Component = PhotoBrowserExample;
    }
    return <Component navigator={navigator} />
  }

  componentDidMount(){
    var navigator = _navigator;
    BackAndroid.addEventListener('hardwareBackPress', function() {
        if (navigator && navigator.getCurrentRoutes().length > 1) {
          navigator.pop();
          return true;
        }
        return false;
    });
  }

  componentWillUnmount() {
      BackAndroid.removeEventListener('hardwareBackPress');
    }

    render() {
            return (
                <Navigator
                    initialRoute={{name: 'welcome'}}
                    configureScene={this.configureScene}
                    renderScene={this.renderScene} />
            );
        }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
