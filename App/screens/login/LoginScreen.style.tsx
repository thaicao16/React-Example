// import { ExtendedTheme } from "react-native-paper";
import { DefaultTheme } from "react-native-paper";
// import { LightTheme } from "../../theme/theme";
import { ViewStyle, TextStyle, StyleSheet } from "react-native";
import dimen from '../../constants/dimens';
import fonts from "../../theme/fonts";
import dimens from "../../constants/dimens";

import { useTheme } from 'react-native-paper';


interface Style {
    container: ViewStyle,
    logoContainer: ViewStyle,
    logoStyle: ViewStyle,
    mainContainer: ViewStyle,
    textInputStyle: ViewStyle,
    forgotPassword: ViewStyle,
}

export default (theme: DefaultTheme) => {
// export default () => {
    // const theme = useTheme();

    const {colors}  = theme;
    return StyleSheet.create<Style>({
        container: {
            flex: 1,
            padding: dimen.paddingNormal,
            backgroundColor: colors.background,
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
            backgroundColor: colors.borderColor,
            justifyContent: "center",
            alignContent:'center',
            flex: 1,
        },
        textInputStyle: {
            // fontFamily: fonts.sharpSans.bold,
            fontFamily: theme.fonts.bold,
            fontSize: dimens.textTitle,
            marginTop:25
        },
        forgotPassword: {
            fontFamily: fonts.sharpSans.bold,
            fontSize: dimens.textTitle,
            color: colors.greenColor,
            textAlign:'right',
            marginTop: 15
        }
    });
}