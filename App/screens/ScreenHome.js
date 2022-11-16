import React, { useEffect, useState, Component } from "react";
import { View, Text, StyleSheet, FlatList, SafeAreaView, Dimensions } from 'react-native';
// import axios from 'axios';
import axiosConfig from '../config/AxiosConfig';
import apiService from '../network/apiservice';
import colors from '../constants/colors';
// import Constant from '../constants/Constants'
import { MovieItem } from '../components/MovieItem';
import { ActivityIndicator } from "react-native-paper";
const dimensionScreen = Dimensions.get("window")


const styleApp = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1
    },
    statusBar: {
        backgroundColor: colors.darkBlue,
    },
    progress: {
        flex: 1,
        alignContent: 'center',
    },
    loadingView: {
        backgroundColor : colors.darkBlue,
        position: 'absolute',
        opacity: 0.5,
        width: dimensionScreen.width,
        height: dimensionScreen.height
    }
});

 class ScreenHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isLoading: false,
          movieResponse: Array(),
        }
      }
    
    //   static getDerivedStateFromProps(nextProps) {
    //     return {
    //       isLoading: nextProps.isLoading
    //     };
    //   }

      componentDidMount() {
        console.log(' HOME componentDidMount');
        this.getMovieNowPlaying()
      }

      getMovieNowPlaying = () => {
        this.setState({isLoading: true});
        apiService.getAllMovieNowPlaying()
            .then(res => {
                console.log(res.data)
                this.setState({movieResponse: res.data.results, isLoading: false})
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
      }
    
      render() {
        console.log(' HOME render');
        return (
            < SafeAreaView style={styleApp.container} >
            
            <FlatList
                data={this.state.movieResponse}
                renderItem={({ item }) => (
                    <MovieItem  movie= {item} onPress= { ()=> {this.props.navigation.navigate('Details', {movieItem: item, name: item.original_title})}}/>
                )}
                numColumns={2}
                keyExtractor={(item, index) => index}
            />

            {this.state.isLoading && 
                <View style={[styleApp.loadingView]}>
                    <ActivityIndicator size= 'large' style= {[styleApp.progress]} color={colors.red} />
                </View>
            }
            
         
        </SafeAreaView >
        )
      }
 }

 export default ScreenHome

// export default ScreenHome = ({navigation}) => {
//     const [movieResponse, setMovieResponse] = useState(Array());

//     console.log("Thai test start");
//     // const getAllPlaying = () => axiosConfig.get('/movie/now_playing')
//     // .then(response => console.log("Response: "+response))
//     // .catch(error =>{
//     //     console.log("Error: "+ error);
//     //     if(error.response){
//     //     // When response status code is out of 2xxx range
//     //     console.log(error.response.data);
//     //     console.log(error.response.status);
//     //     console.log(error.response.headers);
//     //     } else if (error.request){
//     //         //When no response was received after request was made
//     //         console.log(error.request);
//     //     } else {
//     //         // Error
//     //         console.log(error.message);
//     //     }
//     // })


//     useEffect(() => {
//         console.log("Thai test get api");
//         // getAllPlaying();
//         // axiosConfig.get('https://api.themoviedb.org/3//movie/now_playing')
//         //     .then(res => {

//         //         console.log(res.data)
//         //     })
//         //     .catch(error => {
//         //         console.log("there was an error: " + error);
//         //     })
//         apiService.getAllMovieNowPlaying()
//             .then(res => {
//                 console.log(res.data)
//                 setMovieResponse(res.data.results)
//             })
//             .catch(error => {
//                 console.log("there was an error: " + error);
//                 if (error.response) {
//                     // When response status code is out of 2xxx range
//                     console.log(error.response.data);
//                     console.log(error.response.status);
//                     console.log(error.response.headers);
//                 } else if (error.request) {
//                     //When no response was received after request was made
//                     console.log(error.request);
//                 } else {
//                     // Error
//                     console.log(error.message);
//                 }
//             })
//     }, []);

//     return (
//         // <FlatList
//         //     numColumns={2}
//         //     data={[{ name: 'a' }, { name: 'b' }, { name: 'a' }, { name: 'b' }]}
//         //     renderItem={
//         //         (item) => <MovieItem />
//         //     }
//         //     key={Math.random().toString()} />


//         < SafeAreaView style={styleApp.container} >
            
//             <FlatList
//                 data={movieResponse}
//                 renderItem={({ item }) => (
//                     <MovieItem  movie= {item} onPress= { ()=> {navigation.navigate('Details', {movieItem: item, name: item.original_title})}}/>
//                 )}
//                 numColumns={2}
//                 keyExtractor={(item, index) => index}
//             />

//             <View style={[styleApp.loadingView]}>
//                 <ActivityIndicator size= 'large' style= {[styleApp.progress]} color={colors.red} />
//             </View>
         
//         </SafeAreaView >
//     )
// }