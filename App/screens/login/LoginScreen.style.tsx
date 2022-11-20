import { ExtendedTheme } from "react-native-paper";
import { ViewStyle, TextStyle, StyleSheet } from "react-native";
import dimen from '../../constants/dimens';
import fonts from "../../theme/fonts";
import dimens from "../../constants/dimens";
import {LightTheme} from "../../theme/theme";
// import colors from "../../constants/colors";
import {useAppTheme} from "../../theme/theme";

interface Style {
    container: ViewStyle,
    logoContainer: ViewStyle,
    logoStyle: ViewStyle,
    mainContainer: ViewStyle,
    textInputStyle: ViewStyle,
    forgotPassword: ViewStyle,
}

// export default (theme: ExtendedTheme) => {
export default () => {
// export default () => {
    const theme = useAppTheme();

    return StyleSheet.create<Style>({
        container: {
            flex: 1,
            padding: dimen.paddingNormal,
            backgroundColor: theme.colors.green
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
            color: theme.colors.red
        },
        forgotPassword: {
            fontFamily: fonts.sharpSans.regular,
            fontSize: dimens.textTitle,
            color: theme.colors.red,
            textAlign:'right',
            marginTop: 15
        }
    });
}