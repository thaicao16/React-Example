// import React from 'react';
// import { TextInput, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
// import colors from "../constants/colors"

// const style = StyleSheet.create({
//     container: {
//         backgroundColor: colors.white,
//         marginVertical: 10,
//         marginHorizontal: 20,
//         borderRadius: 5,
//         flexDirection: "row"
//     },
//     containerDisable: {
//         // backgroundColor: colors.offWhite,
//         backgroundColor: colors.gray,
//     },
//     button: {
//         padding: 15,
//         borderColor: colors.border,
//         borderRightWidth: 1,
//         borderTopLeftRadius:5,
//         borderBottomLeftRadius: 5,
//         backgroundColor: colors.primaryColor
//     },
//     buttonText: {
//         fontSize: 18,
//         color: colors.blue,
//         fontWeight: "700"
//     },
//     input: {
//         flex: 1,
//         padding: 10,
//         fontSize: 16,
//         color: colors.textLight,
//     }
// });

// export const ConversionInput = ({text, onButtonPress, ...props}) => {
//     const containerStyles = [style.container]
//     // if(props.editable === false) {
//     console.log("props.editable= "+ props.editable)
//     if(props.editable == false) {
//         console.log("containerStyles.push(style.containerDisable) ")
//         containerStyles.push(style.containerDisable)
//     }
//     return (
//         <View style={containerStyles}>
//             <TouchableOpacity onPress={onButtonPress} style={[style.button]}>
//                 <Text style={style.buttonText}>{text}</Text>
//             </TouchableOpacity>
//             <TextInput style={style.input}{...props}/>
//         </View>
//     )
// }