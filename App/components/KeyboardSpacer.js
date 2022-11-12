import React, { useEffect, useState } from "react";
import {View, Keyboard, Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        left: 0,
        right: 0,
        bottom: 0
    }
});

export const KeyboardSpacer = ({ style, onToggle = () => null }) => {

    const [KeyboardSpace, setKeyboardSpace] = useState(0);
    useEffect(() => {
        const showListener = Keyboard.addListener('keyboardDidShow', event => {
            const endY = event.endCoordinates.screenY;
            const screenHeight = Dimensions.get("window").height;
            const newKeyboardSpace  = screenHeight - endY;
            setKeyboardSpace(newKeyboardSpace);
            onToggle(true, newKeyboardSpace);
        });
        const hideListener = Keyboard.addListener('keyboardDidHide', () => {
            setKeyboardSpace(0);
            onToggle(false, 0);
        });

        return () =>{
            showListener.remove();
            hideListener.remove();
        }
    });

    return <View style={[styles.container, {height: KeyboardSpace}, style]} />
}