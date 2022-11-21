import React, { useState } from 'react';
import { Text, View, Image, SafeAreaView, Button } from 'react-native';
import OtpInput from '../../components/OtpInputs'
import style from './LoginOtp.style';
import ApiService from '../../network/serviceApi';

interface LoginScreenProps {
    uuid: string,
}



// class LoginOtpScreen extends React.Component {


//     constructor(props: any){
//         super(props);
//         console.log('LoginOtpScreen: ' + props.route.params.uuid);
//     }

//     // const[otpCode, setOTPCode] = useState("");
//     // const[isPinReady, setIsPinReady] = useState(false);
//     // const maximumCodeLength = 4;
//     // const[dt, setDt] = useState('');

//     loginOtp = (otp: string) => {

//         var data = {
//             uuid: this.props.route.params.uuid,
//             otp: otp
//         };
//         console.log('login test: ' + data);
//         ApiService.postLoginOTP(data)
//             .then((response: any) => {
//                 console.log(response)

//             })
//             .catch((e: Error) => {
//                 console.log(e);
//             });
//     }

//     render() {
//         return (
//             <SafeAreaView style={style.container}>
//                 <View style={style.mainContainer}>
//                     <Image source={require('../../assets/images/ic_logo.webp')} style={style.logoStyle} />
//                 </View>

//                 {/* <OtpInput dataArg={dt} setDataArg={setDt} />

//                 <Button onPress={() => { this.loginOtp(dt) }} title="Verify" /> */}
//             </SafeAreaView>
//         )
//     }
// }

const LoginOtpScreen = ({ navigation, route }) => {
    const uuid = route.params.uuid;
    console.log('uuid: ' + uuid);
    const [otpCode, setOTPCode] = useState("");
    const [isPinReady, setIsPinReady] = useState(false);
    const maximumCodeLength = 4;
    const [dt, setDt] = useState('');

    const loginOtp = (otp: string) => {

        var data = {
            uuid: route.params.uuid,
            otp: otp
        };
        console.log('login test: ' + route.params.uuid +' ---- otp= '+ otp);
        ApiService.postLoginOTP(data)
            .then((response: any) => {
                console.log(response)

            })
            .catch((e: Error) => {
                console.log('OTP -- ' +e);
            });
    }

    return (
        <SafeAreaView style={style.container}>
            <View style={style.mainContainer}>
                <Image source={require('../../assets/images/ic_logo.webp')} style={style.logoStyle} />
            </View>

            <OtpInput dataArg={dt} setDataArg={setDt} />

            <Button onPress={() => { loginOtp(dt) }} title="Verify" />
        </SafeAreaView>
    )
}

export default LoginOtpScreen