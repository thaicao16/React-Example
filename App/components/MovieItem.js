import React from 'react';

import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Constant from '../constants/Constants'

import colors from '../constants/colors'

const style = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        shadowColor: colors.black,
        shadowOffset: {
            width: 3,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        elevation: 13,
        elevation: 5,
        flex: 1,
        borderRadius: 5,
        margin: 7,
    },
    image: {
        height: 160,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        margin:0.1
    },
    text: {
        color: colors.textTitle,
        fontSize:17,
        fontWeight: '500',
        margin: 10
    }
});

export const MovieItem = ({movie, onPress}) => {
    console.log('MovieIte = '+ movie);
    return (
        <TouchableOpacity onPress={onPress} style={[style.container]}>
            <Image style={[style.image]} source={{uri: Constant.image_path + movie.poster_path}} />
            <Text style={[style.text]} multiline ={true} numberOfLines={2}> {movie.original_title}</Text>
        </TouchableOpacity>
    )
}
// http://image.tmdb.org/t/p/w500/9Rj8l6gElLpRL7Kj17iZhrT5Zuw.jpg