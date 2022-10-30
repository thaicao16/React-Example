/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const App =() => {
  return (
    <View style = {styleApp.container}>
      <HeaderApp />
      <HowWasYourDay />
      <View style= {{
        width: 100,
        height: 100,
        backgroundColor: 'red'
      }}>
        <Text style ={{
          color: '#ffffff',
          fontSize: 19,
          fontWeight: 'bold'
        }}>
          Hello. I'm Thái
        </Text>
      </View>
    </View>

  );
}
``
const HeaderApp =() => {
  return(
    <View style= {styleApp.flexRow}>
      <Image style = {styleApp.backButton} source={require('./view/images/left-arrow.png')}/>
      <Text style ={styleApp.header}>
        This is Header
      </Text>
    </View>
  )
}

const HowWasYourDay =() => {
  return(
    <View style={[styleApp.boxContainer]}>
      <Text>
        How was your day?
      </Text>
      <View style= {[styleApp.flexRow, styleApp.marginTopDefault, styleApp.alignCenterDefaul]}>
        <Image style = {styleApp.howWasDayImage} source={require('./view/images/ic_win.jpeg')}/>
        <Image style = {styleApp.howWasDayImage} source={require('./view/images/ic_win.jpeg')}/>
        <Image style = {styleApp.howWasDayImage} source={require('./view/images/ic_win.jpeg')}/>
        <Image style = {styleApp.howWasDayImage} source={require('./view/images/ic_win.jpeg')}/>
        <Image style = {styleApp.howWasDayImage} source={require('./view/images/ic_win.jpeg')}/>
      </View>
    </View>
  )
}

const styleApp = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8F7FE"
  },
  header: {
    margin: 20,
    fontSize: 24,
    color: "#273439"
  },
  backButton: {
    width: 24,
    height: 24,
    marginTop: 24,
    marginLeft: 20
  },
  boxContainer: {
    backgroundColor: "white",
    borderRadius: 5,
    shadowColor: "#3c3c3c",
    shadowRadius:5,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    minWidth: "90%",
    margin: 20,
    padding: 20,
    elevation: 5
  },
  bodyTitle: {
    color: "#273439",
    fontSize: 19
  },
  howWasDayImage: {
    minWidth: "15%",
    width: 50,
    height: 50
  },
  flexRow: {
    flexDirection: 'row'
  },
  flexColumn: {
    flexDirection: 'column'
  },
  marginTopDefault: {
    marginTop: 20
  },
  alignCenterDefaul: {
    justifyContent: 'center'
  }
})

export default App;
