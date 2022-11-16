import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';
// import axios from 'axios';
import axiosConfig from '../config/AxiosConfig';
import apiService from '../network/apiservice';
import colors from '../constants/colors';
// import Constant from '../constants/Constants'
import { MovieItem } from '../components/MovieItem';



const styleApp = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1
    },
    statusBar: {
        backgroundColor: colors.darkBlue,
    },
});



export default ScreenHome = () => {
    const [movieResponse, setMovieResponse] = useState(Array());
    console.log("Thai test start");
    // const getAllPlaying = () => axiosConfig.get('/movie/now_playing')
    // .then(response => console.log("Response: "+response))
    // .catch(error =>{
    //     console.log("Error: "+ error);
    //     if(error.response){
    //     // When response status code is out of 2xxx range
    //     console.log(error.response.data);
    //     console.log(error.response.status);
    //     console.log(error.response.headers);
    //     } else if (error.request){
    //         //When no response was received after request was made
    //         console.log(error.request);
    //     } else {
    //         // Error
    //         console.log(error.message);
    //     }
    // })


    useEffect(() => {
        console.log("Thai test get api");
        // getAllPlaying();
        // axiosConfig.get('https://api.themoviedb.org/3//movie/now_playing')
        //     .then(res => {

        //         console.log(res.data)
        //     })
        //     .catch(error => {
        //         console.log("there was an error: " + error);
        //     })
        apiService.getAllMovieNowPlaying()
            .then(res => {
                console.log(res.data)
                setMovieResponse(res.data.results)
            })
            .catch(error => {
                console.log("there was an error: " + error);
                if (error.response) {
                    // When response status code is out of 2xxx range
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    //When no response was received after request was made
                    console.log(error.request);
                } else {
                    // Error
                    console.log(error.message);
                }
            })
    }, []);

    return (
        // <FlatList
        //     numColumns={2}
        //     data={[{ name: 'a' }, { name: 'b' }, { name: 'a' }, { name: 'b' }]}
        //     renderItem={
        //         (item) => <MovieItem />
        //     }
        //     key={Math.random().toString()} />


        < SafeAreaView style={styleApp.container} >
            <FlatList
                data={movieResponse}
                renderItem={({ item }) => (
                    <MovieItem  movie= {item}/>
                )}
                numColumns={2}
                keyExtractor={(item, index) => index}
            />
        </SafeAreaView >
    )
}