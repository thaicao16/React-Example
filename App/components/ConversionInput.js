import React from 'react';
import { TextInput, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import colors from "../constants/colors"

const style = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        marginVertical: 10,
        marginHorizontal: 20,
        borderRadius: 5,
        flexDirection: "row"
    },
    button: {
        padding: 15,
        borderColor: colors.border,
        borderRightWidth: 1,
        borderTopLeftRadius:5,
        borderBottomLeftRadius: 5,
        backgroundColor: colors.primaryColor
    },
    buttonText: {
        fontSize: 18,
        color: colors.blue,
        fontWeight: "700"
    },
    input: {
        flex: 1,
        padding: 10,
        fontSize: 16,
        color: colors.textLight,
        backgroundColor: colors.red
    }
});

export const ConversionInput = ({text, onButtonPress, ...props}) => {
    return (
        <View style={[style.container]}>
            <TouchableOpacity onPress={onButtonPress} style={[style.button]}>
                <Text style={style.buttonText}>{text}</Text>
            </TouchableOpacity>
            <TextInput style={style.input}  {...props}/>
        </View>
    )
}