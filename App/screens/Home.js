import React from 'react';
import { View, StyleSheet, StatusBar, SafeAreaView, Text, Image, Dimensions, Keyboard, TextInput } from 'react-native';
import colors from "../constants/colors"
import { ConversionInput } from "../components/ConversionInput"

const dimensionScreen = Dimensions.get("window")


const styleApp = StyleSheet.create({
    container: {
        backgroundColor: colors.darkBlue,
        flex: 1
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
    }
});

const mainApp = () => {
    return (
        <SafeAreaView style={[styleApp.container]}>

            <StatusBar barStyle="dark-content" backgroundColor={colors.darkBlue} />

            <View style={[styleApp.center]}>

                <View style={[styleApp.logoContainer]}>

                    <Image source={require('../assets/images/background.png')} style={[styleApp.logoBackground]} />

                    <Image source={require('../assets/images/logo.png')} style={[styleApp.logo]} />

                </View>

                <ConversionInput
                    text="User Name"
                    value="user name"
                    autoFocus={true}
                    keyboardType="numeric"
                    onButtonPress={() => alert('ToDO')}
                    onChangeText={text => console.log("Text: ", text)}
                />

                <ConversionInput
                    text="Password"
                    value="pass"
                    onButtonPress={() => alert('ToDO')}
                    keyboardType="numeric"
                    onChangeText={text => console.log("Text: ", text)}
                />

                <TextInput
                    placeholder='Click here…'
                    onSubmitEditing={Keyboard.dismiss}
                />

            </View>

        </SafeAreaView>
    )
}

export default mainApp