import React from "react";
import { SafeAreaView, TouchableOpacity, View, Text, StyleSheet } from "react-native";
import colors from "../constants/colors";
import dimen from "../constants/dimen";
import textsize from "../constants/textsize";
// import { Entypo } from "@expo/vector-icons"


const MainView = () => {
    return (
        <SafeAreaView style={[styleApp.container]}>
            <TouchableOpacity style={[styleApp.rowChild]} onPress={() => alert("Themes")}>
               <Text style={[styleApp.textTitle]}>Themes Config</Text>
               <Image source={require('./assets/images/ic_win.jpeg')} style={[styleApp.icon]}/>
            </TouchableOpacity>

            <View style={[styleApp.separator]}/>

            <TouchableOpacity style={[styleApp.rowChild]}>
                <Text style={[styleApp.textTitle]}>React Native Basic</Text>
            </TouchableOpacity>

            <View style={[styleApp.separator]}/>

            <TouchableOpacity style={[styleApp.rowChild]}>
                <Text style={[styleApp.textTitle]}>React Native by Example</Text>
            </TouchableOpacity>

            <View style={[styleApp.separator]}/>
        </SafeAreaView>
    )
}


const styleApp = StyleSheet.create({
    container: {
        backgroundColor: colors.primaryColor,
        flex: 1
    },
    textTitle: {
        color: colors.textTitle,
        fontSize: textsize.title,
        fontWeight: "700"
    },
    rowChild: {
        paddingHorizontal: dimen.marginNormal,
        paddingVertical: dimen.marginMedium,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    separator : {
        backgroundColor: colors.gray,
        height: StyleSheet.hairlineWidth,
        marginHorizontal: dimen.marginNormal
    },
    icon: {
        width: 24,
        height: 24,
        alignItems:"flex-end"
    }
});

export default MainView