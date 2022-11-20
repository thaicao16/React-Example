import React, { useMemo, useState } from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { View, StyleSheet, Image, ScrollView } from 'react-native';
import { useTheme, TextInput, Text } from 'react-native-paper';
// import createStyles from './LoginScreen.style'
// import { LightTheme } from "../../theme/theme";
import dimen from '../../constants/dimens';
import fonts from "../../theme/fonts";
import dimens from "../../constants/dimens";

interface LoginScreenProps { }


const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: dimen.paddingNormal,
    },
    logoContainer: {
        justifyContent: 'center',
        alignItems: 'center',        
    },
    logoStyle: {
        width: 100,
        height: 100,
    },
    mainContainer: {
        justifyContent: "center",
        alignContent:'center',
        flex: 1,
        
    },
    textInputStyle: {
        fontFamily: fonts.sharpSans.bold,
        fontSize: dimens.textTitle,
        marginTop:25,
    },
    forgotPassword: {
        fontFamily: fonts.sharpSans.regular,
        fontSize: dimens.textTitle,
        textAlign:'right',
        marginTop: 15
    }
});

const LoginScreen: React.FC<LoginScreenProps> = () => {

    // const theme = useTheme();
    // const { colors } = theme;
    // const style = useMemo(() => createStyles(), [LightTheme])

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [secureTextEntry, setSecureTextEntry] = useState(true);


    return (
        <SafeAreaView style={style.container} >
            <ScrollView >
                <View style={style.mainContainer}>
                    {/* <Image source={require('../../assets/images/ic_logo.webp')} style={style.logoStyle} /> */}

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

                    {/* <TextInput
                        label="Password"
                        value={password}
                        mode='outlined'
                        style={style.textInputStyle}
                        placeholder='Please input password'
                        onChangeText={text => setPassword(text)}
                        right={<TextInput.Icon icon="eye" onPress={() => {
                            setSecureTextEntry(!secureTextEntry);
                            return false;
                          }} />}
                        secureTextEntry={true} 
                        returnKeyType='go'

                    /> */}

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

                    <Text  style={style.forgotPassword}>Forgot password</Text>
                </View>
            </ScrollView>

        </SafeAreaView>
    )
}

export default LoginScreen;