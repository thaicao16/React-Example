import React from "react";
import {TouchableOpacity, Text, Image, StyleSheet} from "react-native";
import colors from "../constants/colors";

const style = StyleSheet.create({
    button: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent:"center",
        textAlign: "center",
        margin: 10,
        padding: 10,
        backgroundColor: colors.gray,
        borderRadius: 8
    },
    buttonIcon: {
        width: 20,
        height: 20
    },
    buttonText: {
        marginLeft:10,
        fontSize: 17,
        color: colors.white
    }
});

// export const Button = ({text, onPress}) =>{
//     return (
//         <TouchableOpacity style= {[style.button]} onPress ={onPress}>
//             <Image source={require("../assets/images/reverse.png")} style={[style.buttonIcon]}/>
//             <Text style={[style.buttonText]}>{text}</Text>
//         </TouchableOpacity>
//     );
// }

export const Button = ({ onPress, text }) => {
    return (
      <TouchableOpacity onPress={onPress} style={style.button}>
        <Image
          source={require("../assets/images/reverse.png")}
          style={style.buttonIcon}
          resizeMode="contain"
        />
        <Text style={style.buttonText}>{text}</Text>
      </TouchableOpacity>
    )
  }
  