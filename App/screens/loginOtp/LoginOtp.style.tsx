import { StyleSheet } from 'react-native';
import colors from '../../constants/colors'

export default StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        backgroundColor: colors.white
    },
    logoStyle: {
        width: 100,
        height: 100,
        alignContent:'center',
    },
    mainContainer: {
        alignItems:'center',
        marginTop:30
    },
});