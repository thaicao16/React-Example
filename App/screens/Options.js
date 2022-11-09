import React from "react";
import { SafeAreaView, TouchableOpacity, View, Text, StyleSheet, Image, ScrollView, Linking, Alert } from "react-native";
import colors from "../constants/colors";
import dimen from "../constants/dimen";
import textsize from "../constants/textsize";


const openUrl = (url) => {
    Linking.openURL(url).catch( () => {
        Alert.alert('Something went wrong','Please try again')
    })
}


const MainView = () => {
    return (
        <SafeAreaView style={[styleApp.container]}>
            <ScrollView>
            <TouchableOpacity style={[styleApp.rowChild]} onPress={() => openUrl("https://reactnative.dev/")}>
               <Text style={[styleApp.textTitle]}>Themes Config</Text>
               <Image source={require('../assets/images/ic_win.jpeg')} style={[styleApp.icon]}/>
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

            <RowItem
                title="Thai test Row Item"
                onPress ={() => alert("thai test 1")} 
                rightIcon = {require('../assets/images/ic_win.jpeg')}
                />
            
            <RowSeparator />

            <RowItem
                title="Thai test Row Item 2"
                onPress ={() => alert("thai test 2")} 
                rightIcon = {require('../assets/images/left-arrow.png')}
                />
            
            <RowSeparator />

            <RowItem
                title="Thai test Row Item"
                onPress ={() => alert("thai test 1")} 
                rightIcon = {require('../assets/images/ic_win.jpeg')}
                />
            
            <RowSeparator />

            <RowItem
                title="Thai test Row Item 2"
                onPress ={() => alert("thai test 2")} 
                rightIcon = {require('../assets/images/left-arrow.png')}
                />
            
            <RowSeparator />

            <RowItem
                title="Thai test Row Item"
                onPress ={() => alert("thai test 1")} 
                rightIcon = {require('../assets/images/ic_win.jpeg')}
                />
            
            <RowSeparator />

            <RowItem
                title="Thai test Row Item 2"
                onPress ={() => alert("thai test 2")} 
                rightIcon = {require('../assets/images/left-arrow.png')}
                />
            
            <RowSeparator />

            <RowItem
                title="Thai test Row Item"
                onPress ={() => alert("thai test 1")} 
                rightIcon = {require('../assets/images/ic_win.jpeg')}
                />
            
            <RowSeparator />

            <RowItem
                title="Thai test Row Item 2"
                onPress ={() => alert("thai test 2")} 
                rightIcon = {require('../assets/images/left-arrow.png')}
                />
            
            <RowSeparator />

            <RowItem
                title="Thai test Row Item"
                onPress ={() => alert("thai test 1")} 
                rightIcon = {require('../assets/images/ic_win.jpeg')}
                />
            
            <RowSeparator />

            <RowItem
                title="Thai test Row Item 2"
                onPress ={() => alert("thai test 2")} 
                rightIcon = {require('../assets/images/left-arrow.png')}
                />
            
            <RowSeparator />

            <RowItem
                title="Thai test Row Item"
                onPress ={() => alert("thai test 1")} 
                rightIcon = {require('../assets/images/ic_win.jpeg')}
                />
            
            <RowSeparator />

            <RowItem
                title="Thai test Row Item 2"
                onPress ={() => alert("thai test 2")} 
                rightIcon = {require('../assets/images/left-arrow.png')}
                />
            
            <RowSeparator />

            <RowItem
                title="Thai test Row Item"
                onPress ={() => alert("thai test 1")} 
                rightIcon = {require('../assets/images/ic_win.jpeg')}
                />
            
            <RowSeparator />

            <RowItem
                title="Thai test Row Item 2"
                onPress ={() => alert("thai test 2")} 
                rightIcon = {require('../assets/images/left-arrow.png')}
                />
            
            <RowSeparator />

            <RowItem
                title="Thai test Row Item"
                onPress ={() => alert("thai test 1")} 
                rightIcon = {require('../assets/images/ic_win.jpeg')}
                />
            
            <RowSeparator />

            <RowItem
                title="Thai test Row Item 2"
                onPress ={() => alert("thai test 2")} 
                rightIcon = {require('../assets/images/left-arrow.png')}
                />
            
            <RowSeparator />

            </ScrollView>
        </SafeAreaView>
    )
}

export const RowItem = ({title, onPress, rightIcon}) => (
    <TouchableOpacity style={[styleApp.rowChild]} onPress={onPress}>
        <Text style={[styleApp.textTitle]}>{title}</Text>
        <Image source={rightIcon} style={[styleApp.icon]}/>
    </TouchableOpacity>
)

export const RowSeparator = () =>(
    <View style={[styleApp.separator]}/>
)


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