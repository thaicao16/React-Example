import React , { useState, useEffect } from 'react';
import { View, StyleSheet, StatusBar, SafeAreaView, Text, Image, Dimensions, Keyboard, TextInput, ScrollView } from 'react-native';
import colors from "../constants/colors"
import { ConversionInput } from "../components/ConversionInput"
import { format } from "date-fns"
import { Button } from "../components/ButtonCustom"
import {KeyboardSpacer} from "../components/KeyboardSpacer"

const dimensionScreen = Dimensions.get("window")


const styleApp = StyleSheet.create({
    container: {
        backgroundColor: colors.darkBlue,
        flex: 1
    },
    content: {
        paddingTop: dimensionScreen.height * 0.25
    },
    statusBar: {
        backgroundColor: colors.darkBlue,
    },
    logoContainer: {
        alignItems: "center",
        justifyContent: "center"

    },
    logoBackground: {
        width: dimensionScreen.width * 0.45,
        height: dimensionScreen.width * 0.45
    },
    logo: {
        position: "absolute",
        width: dimensionScreen.width * 0.25,
        height: dimensionScreen.width * 0.25
    },
    center: {
        justifyContent: "center",
        flex: 1,
    },
    textHeader: {
        textAlign: "center",
        fontSize: 23,
        fontWeight: "bold",
        color: colors.white,
        margin: 10
    },
    textDescription: {
        marrgin: 10,
        color: colors.white,
        fontSize: 15,
        textAlign: "center"
    }
});

const baseCurrency = "USD";
const quoteCurrency = "GBP";
const conversionRate = "0.89824";
const date = "2020-03-23";
// const [scrollEnabled, setScrollEnabled] = useState(false);

// useEffect(() => {
//     const showListener = Keyboard.addListener('keyboardDidShow', () =>{
//         setScrollEnabled(true);
//     });

//     return () => {
//         showListener.remove();
//     }
// }, []);



const mainApp = () => {
// export default () => {

const [scrollEnabled, setScrollEnabled] = useState(false)

useEffect(() => {
  const showListener = Keyboard.addListener("keyboardDidShow", () =>
    setScrollEnabled(true)
  )
  const hideListener = Keyboard.addListener("keyboardDidHide", () =>
    setScrollEnabled(false)
  )

  return () => {
    showListener.remove()
    hideListener.remove()
  }
}, [])

    return (
        <SafeAreaView style={[styleApp.container]}>
            <ScrollView scrollEnabled={scrollEnabled}>
                <View style={[styleApp.content]}>
                    <StatusBar barStyle="dark-content" backgroundColor={colors.darkBlue} />

                    <View style={[styleApp.center]}>

                        <View style={[styleApp.logoContainer]}>

                            <Image source={require('../assets/images/background.png')} style={[styleApp.logoBackground]} />

                            <Image source={require('../assets/images/logo.png')} style={[styleApp.logo]} />

                        </View>

                        <Text style={[styleApp.textHeader]}>Currency Converter</Text>

                        <ConversionInput
                            text={baseCurrency}
                            defaultValue="123"
                            autoFocus={true}
                            keyboardType="numeric"
                            onButtonPress={() => alert('ToDO')}
                            onChangeText={text => console.log("Text: ", text)}
                        />

                        <ConversionInput
                            text={quoteCurrency}
                            defaultValue="123"
                            onButtonPress={() => alert('ToDO')}
                            keyboardType="numeric"
                            onChangeText={text => console.log("Text: ", text)}
                        />

                        <ConversionInput
                            text="GBP"
                            value="123"
                            editable={false}
                            onButtonPress={() => alert("todo!")}
                        />

                        {/* <Text style={[styleApp.textDescription]}>1 {baseCurrency} = 0.835 {quoteCurrency} as of {format(new Date(date), "MMM dd, yyyy")}</Text> */}
                        <Text style={[styleApp.textDescription]}>1 {baseCurrency} = 0.835 {quoteCurrency} as of</Text>

                        {/* <Button title='test'>Button</Button> */}
                        <Button text="Change Data" onPress={() => alert('TODO')} />
                        <Button text="Reverse Currencies" onPress={() => alert("todo!")} />
                    </View>

                    <KeyboardSpacer onToggle={visible => setScrollEnabled(visible)} />
                </View>
            </ScrollView>

        </SafeAreaView>
    )
}

export default mainApp