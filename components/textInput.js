import * as React from 'react';
import { TextInput, useTheme } from 'react-native-paper';
export default function MyTextInput({ style, ...rest }) {
    const theme = useTheme();
    return (
        <TextInput style={{
            ...style,
            marginBottom: theme.spacing.m_05,
        }}
            {...rest} />
    )
}