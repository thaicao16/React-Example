import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native';

import colors from '../constants/colors';
import Constant from '../constants/Constants'

const style = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1
    },
    header: {
        flexDirection: 'row',
    },
    headerInfo: {
        margin: 10
    },
    avatar: {
        width: 130,
        height: 160,
        margin: 10
    },
    title: {
        color: colors.textTitle,
        fontSize: 17,
        fontWeight: '700'
    },
    headerText: {
        color: colors.textTitle,
        fontSize: 15,
        fontWeight: '400'
    },
    description: {
        margin: 10,
        fontSize: 14,
        fontWeight: '300',
        color: colors.darkBlue
    }
})


export default ScreenDetail = ({ navigation, route }) => {
    const movie = route.params.movieItem;
    return (
        <View style={[style.container]}>
            <View style={[style.header]}>
                <Image style={[style.avatar]} source={{uri: Constant.image_path + movie.poster_path}} />
                <View style={[style.headerInfo]}>
                    <Text style={[style.title]}>{movie.original_title}</Text>
                    <Text style={[style.headerText]}>Time: {movie.release_date}</Text>
                    <Text style={[style.headerText]}>Average: {movie.vote_average}</Text>
                    <Text style={[style.headerText]}>Vote count: {movie.vote_count}</Text>
                </View>
            </View>
            <Text style={[style.description]}>
            {movie.overview}
            </Text>
        </View>
    )
}