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
  DeviceEventEmitter,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';
import moment from 'moment';
import queryString from 'query-string';
import * as Animatable from 'react-native-animatable';
import Button from 'react-native-button';
var I18n = require('react-native-i18n');

I18n.fallbacks = true;
I18n.translations = {
  en:{
    greeting: 'Hi!'
  },
  fr:{
    greeting:'Bonjour!'
  }
}


export default class Feed extends Component {

  constructor(props){
    super(props);
    this.state = {
      fontSize: 9,
    };
  }

  componentWillMount(){
    DeviceEventEmitter.addListener("SEND_EMITTER_TEST",(eventBody)=>{
      console.log(eventBody['arg1']+"--------");
    });
  }

  componentDidMount(){
    const now = moment();
    console.log("now----",now);
    console.log("a.format()" + moment().format('MMMM Do YYYY, h:mm:ss a'));
    console.log("parse----" + queryString.stringify({color: ['taupe', 'chartreuse'], id: '515'}));

    Storage.load({
        key: 'user',
        id: '1001'
    }).then(ret => {
        // found data goes to then()
        console.log("name===="+ret.name);
    }).catch(err => {
        // any exception including data not found
        // goes to catch()
        console.warn(err);
    });

  }

  _handlePress(event) {
    console.log('Pressed!');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          feed page!
        </Text>
        <Animatable.Text animation="zoomInUp">Zoom me up, Scotty</Animatable.Text>
        <Animatable.Text animation="slideInDown" iterationCount={5} direction="alternate">上下跳5秒</Animatable.Text>
        <Animatable.Text animation="slideInDown" iterationCount="infinite"  direction="alternate">无限上下跳</Animatable.Text>
        <Animatable.Text animation="pulse" easing="ease-out" iterationCount="infinite" style={{ textAlign: 'center' }}>❤️</Animatable.Text>

        <TouchableOpacity onPress={() => this.setState({fontSize: (this.state.fontSize || 10) + 5 })}>
          <Animatable.Text transition="fontSize" style={{fontSize: this.state.fontSize || 10}}>Size me up, Scotty</Animatable.Text>
        </TouchableOpacity>

        <TouchableWithoutFeedback
          onPress={() =>
            this.refs.view.bounce(800).
            then((endState) =>
            console.log(endState.finished ? 'bounce finished' : 'bounce cancelled'))
        }>
         <Animatable.View ref="view">
           <Text>Bounce me!</Text>
         </Animatable.View>
       </TouchableWithoutFeedback>

       <TouchableWithoutFeedback onPress={() => this.refs.text.transitionTo({opacity: 0.2})}>
        <Animatable.Text ref="text" style={styles.text}>Fade me!</Animatable.Text>
      </TouchableWithoutFeedback>

        <Button
           style={{fontSize: 20, color: 'green'}}
           styleDisabled={{color: 'red'}}
           onPress={this._handlePress} >
           Press Me!
         </Button>

         <Button containerStyle={{padding:10, height:45, overflow:'hidden', borderRadius:4, backgroundColor: 'white'}}
                  style={{fontSize: 20, color: 'green'}} >
           Press me!
         </Button>

         <Text>{I18n.t('greeting')}</Text>

      </View>
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
  text:{
    marginTop:10,
    fontSize:20,
  }
});
