import React, { useState, useEffect } from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';

import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import styles from '../theme/OtpInput.style';

const CELL_COUNT = 6;

const UnderlineExample = ({ dataArg, setDataArg }: { dataArg: React.SetStateAction<string>, setDataArg: React.SetStateAction<any> }) => {
    const [value, setValue] = useState('');

    useEffect(() => {
        // @ts-ignore
        setValue(dataArg)
    }, [dataArg])

    useEffect(() => {
        setDataArg(value)
    }, [value, setDataArg])
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    return (
        <SafeAreaView style={styles.root}>
            <CodeField
                ref={ref}
                {...props}
                value={value}
                onChangeText={setValue}
                cellCount={CELL_COUNT}
                rootStyle={styles.codeFieldRoot}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                renderCell={({ index, symbol, isFocused }) => (
                    <View
                        // Make sure that you pass onLayout={getCellOnLayoutHandler(index)} prop to root component of "Cell"
                        onLayout={getCellOnLayoutHandler(index)}
                        key={index}
                        style={[styles.cellRoot, isFocused && styles.focusCell]}>
                        <Text style={styles.cellText}>
                            {symbol || (isFocused ? <Cursor /> : null)}
                        </Text>
                    </View>
                )}
            />
        </SafeAreaView>
    );
};

export default UnderlineExample;