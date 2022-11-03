/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {View, Text, StyleSheet, Image, Button} from 'react-native';
 
 const App =() => {
   return (
     <View style = {styleApp.container}>
       <HeaderApp />
       <HowWasYourDay />
       <SevenDaysChallenge />
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
        <Button title='Click Me'>e</Button>
       </View>
     </View>
 
   );
 }
 ``
 const HeaderApp =() => {
   return(
     <View style= {styleApp.flexRow}>
       <Image style = {styleApp.backButton} source={require('./assets/images/left-arrow.png')}/>
       <Text style ={styleApp.header} title="AMCNC">
        
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
         <Image style = {styleApp.howWasDayImage} source={require('./assets/images/ic_win.jpeg')}/>
         <Image style = {styleApp.howWasDayImage} source={require('./assets/images/ic_win.jpeg')}/>
         <Image style = {styleApp.howWasDayImage} source={require('./assets/images/ic_win.jpeg')}/>
       </View>
       <View style= {[ styleApp.marginTopDefault, styleApp.alignCenterDefaul, styleApp.styleLoginBtn]}>
        <Button style={[styleApp.buttonStyle]} color={"#F31801"} title='Click Me'>e</Button>
       </View>
       <View style={[ styleApp.flexRow, styleApp.marginTopDefault, styleApp.alignCenterDefaul]}>
          <View style={[styleApp.childFlex]} >
            <Button title="Save" onPress={() => {}}></Button>
          </View>
          <View style={[styleApp.childFlex]} >
            <Button title="Cancel" onPress={() => {}}></Button>
          </View>
          <Button style={[styleApp.childFlex]} title="Cancel 2"></Button>
          <View style={[styleApp.flex]} >
            <Button title="Submit" onPress={() => {}}></Button>
          </View>
      </View>
      <View
         style= {[ styleApp.marginTopDefault, styleApp.alignCenterDefaul, styleApp.styleLoginBtn]}>
         <Button
         title={"Sign Up"}
         color={"#F31801"}/>
      </View>
      <Button style={[styleApp.buttonStyle]}  title='Click Me'>e</Button>
     </View>
   )
 }


 const SevenDaysChallenge =() => {
  return (
    <View>
      <View style={[styleApp.flexRow]}>
        <View style={[styleApp.containerChild, styleApp.marginRightDefault, styleApp.alignCenterDefaul, styleApp.flexColumn, {alignItems: 'center',}]}>
          <Image style = {styleApp.howWasDayImage} source={require('./assets/images/ic_win.jpeg')}/>
          <Text>Day 1</Text>
        </View>
        <View style={[styleApp.containerChild, styleApp.alignCenterDefaul]}>
          <Image style = {styleApp.howWasDayImage} source={require('./assets/images/ic_win.jpeg')}/>
          <Text>Day 2</Text>
        </View>
      </View>
      <View style={[ styleApp.flexRow, styleApp.marginTopDefault, styleApp.alignCenterDefaul]}>
          <View style={[styleApp.childFlex, styleApp.containerChild]} >
            <Text title="Save" onPress={() => {}}>Hello</Text>
          </View>
          <View style={[styleApp.childFlex]} >
            <Button title="Cancel" onPress={() => {}}></Button>
          </View>
          <View style={[styleApp.flex]} >
            <Button title="Submit" onPress={() => {}}></Button>
          </View>
      </View>
    </View>
  )
 }

 
 const styleApp = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: "#E8F7FE"
   },
   containerChild: {
    flex: 1,
    backgroundColor: "#FFFFFF"
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
   marginRightDefault: {
      marginRight: 20
   },
   alignCenterDefaul: {
     justifyContent: 'center'
   },
   buttonStyle: {
    backgroundColor: "#666CCC",
    borderRadius: 20,
    color: "#000fff",
    fontSize: 25
   },
   styleLoginBtn: {
    marginTop: 30,
    marginLeft: 50,
    marginRight: 50,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "#3c3c3c", //button background/border color
    overflow: "hidden",
    marginBottom: 10,
  },
  childFlex: {
    flex: 1,
    marginRight: 10
  },
  flex: {
    flex: 1
  }
 })
 
 export default App;
 