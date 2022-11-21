import React, { useMemo, useState, Component } from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { View, StyleSheet, Image, ScrollView, TouchableOpacity, Button } from 'react-native';
import { useTheme, TextInput, Text, DefaultTheme, ExtendedTheme } from 'react-native-paper';
import createStyles from './LoginScreen.style'
import { LightTheme } from "../../theme/theme";
// import ApiService from '../../network/apiservice';
import ApiService from '../../network/serviceApi';

interface LoginScreenProps { }

// const theme = LightTheme;
// const style = useMemo(() => createStyles(theme), [theme])
// function login () => {

//     apiService.postLogin("brian@pizzahut.io","112358@Anz")
//         .then(res => {
//             console.log(res.data)
//         })
//         .catch(error => {
//             console.log("there was an error: " + error);
//             if (error.response) {
//                 // When response status code is out of 2xxx range
//                 console.log(error.response.data);
//                 console.log(error.response.status);
//                 console.log(error.response.headers);
//             } else if (error.request) {
//                 //When no response was received after request was made
//                 console.log(error.request);
//             } else {
//                 // Error
//                 console.log(error.message);
//             }
//         })
//   }

// const login = () => {
//     console.log('login test')
//     apiService.postLogin("brian@pizzahut.io","112358@Anz")
//         .then(res => {
//             console.log(res.data)
//         })
//         .catch(error => {
//             console.log("there was an error: " + error);
//             if (error.response) {
//                 // When response status code is out of 2xxx range
//                 console.log(error.response.data);
//                 console.log(error.response.status);
//                 console.log(error.response.headers);
//             } else if (error.request) {
//                 //When no response was received after request was made
//                 console.log(error.request);
//             } else {
//                 // Error
//                 console.log(error.message);
//             }
//         })
//   }

// const [email, setEmail] = React.useState("");
// const [password, setPassword] = React.useState("");
// const [secureTextEntry, setSecureTextEntry] = useState(true);
// const theme = LightTheme;
// const style = useMemo(() => createStyles(theme), [theme])

const LoginScreen: React.FC = () => {
    // class LoginScreen extends Component {

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const theme = LightTheme;
    const style = useMemo(() => createStyles(theme), [theme])

    const login = () => {

        var data = {
            email: "brian@pizzahut.io",
            password: "112358@Anz"
        };
        console.log('login test: ' + data);
        ApiService.postLoginUser(data)
            .then((response: any) => {
                console.log(response)
            })
            .catch((e: Error) => {
                console.log(e);
            });
    }

    return (
        <SafeAreaView style={style.container} >
            <ScrollView >
                <View style={style.mainContainer}>

                    <View style={style.logoContainer}>
                        <Image source={require('../../assets/images/ic_logo.webp')} style={style.logoStyle} />
                    </View>

                    <TextInput
                        label="Email"
                        value={email}
                        mode='outlined'
                        style={style.textInputStyle}
                        placeholder='Please input email'
                        onChangeText={text => setEmail(text)}
                    />

                    <TextInput
                        label="Password"
                        mode='outlined'
                        style={style.textInputStyle}
                        secureTextEntry={secureTextEntry}
                        onChangeText={text => setPassword(text)}
                        placeholder='Please input password'
                        right={
                            <TextInput.Icon
                                icon="eye"
                                onPress={() => {
                                    setSecureTextEntry(!secureTextEntry);
                                    return false;
                                }}
                            />
                        }
                    />

                    <Text style={style.forgotPassword}>Forgot password</Text>

                    {/* <Button onPress={() => {login}} mode= 'contained' style= {style.loginButton}>Login</Button> */}
                    <Button onPress={login} title="Login" />
                </View>
            </ScrollView>

        </SafeAreaView>
    )

    // const[email, setEmail] = React.useState("");
    // const[password, setPassword] = React.useState("");
    // const[secureTextEntry, setSecureTextEntry] = useState(true);
    // const theme = LightTheme;
    // const style = useMemo(() => createStyles(theme), [theme])

    // constructor(props: {} | Readonly<{}>) {
    //     super(props);
    //     this.state = {
    //         email: "",
    //         password: "",
    //         secureTextEntry: true,
    //     }
    // }

    // componentDidMount() {
    //     console.log(' HOME componentDidMount');
    //     this.login()
    // }

    // login = () => {
    //     apiService.postLogin("brian@pizzahut.io", "112358@Anz")
    //         .then(res => {
    //             console.log(res.data)
    //         })
    //         .catch(error => {
    //             console.log("there was an error: " + error);
    //             if (error.response) {
    //                 // When response status code is out of 2xxx range
    //                 console.log(error.response.data);
    //                 console.log(error.response.status);
    //                 console.log(error.response.headers);
    //             } else if (error.request) {
    //                 //When no response was received after request was made
    //                 console.log(error.request);
    //             } else {
    //                 // Error
    //                 console.log(error.message);
    //             }
    //         })
    // }


    // render() {
    //     return (
    //         <SafeAreaView >

    //             <TouchableOpacity onPress={() => {
    //                 console.log("helloMaster123")
    //             }} >
    //                 <Text >Login Login</Text>
    //             </TouchableOpacity>

    //             <Button mode='contained' onPress={() => this.login()}>Login 2</Button>

    //             {/* <ScrollView >
    //                 <View style={style.mainContainer}>

    //                     <View style={style.logoContainer}>
    //                         <Image source={require('../../assets/images/ic_logo.webp')} style={style.logoStyle} />
    //                     </View>

    //                     <TextInput
    //                         label="Email"
    //                         value={this.state.email}
    //                         mode='outlined'
    //                         style={style.textInputStyle}
    //                         placeholder='Please input email'
    //                         onChangeText={text => setEmail(text)}
    //                     />

    //                     <TextInput
    //                         label="Password"
    //                         mode='outlined'
    //                         style={style.textInputStyle}
    //                         secureTextEntry={secureTextEntry}
    //                         onChangeText={text => setPassword(text)}
    //                         placeholder='Please input password'
    //                         right={
    //                             <TextInput.Icon
    //                                 icon="eye"
    //                                 onPress={() => {
    //                                     setSecureTextEntry(!secureTextEntry);
    //                                     return false;
    //                                 }}
    //                             />
    //                         }
    //                     />

    //                     <Text style={style.forgotPassword}>Forgot password</Text>

    //                     <Button mode='contained' style={style.loginButton}>Login</Button>
    //                 </View>
    //             </ScrollView> */}

    //         </SafeAreaView>
    //     )
    // }


}

export default LoginScreen;