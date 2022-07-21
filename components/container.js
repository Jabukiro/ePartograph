import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme } from 'react-native-paper';
export default function MainContainer({ children, full = true, style, ...rest }) {
    const theme = useTheme();
    return (
        <View style={{ ...style, backgroundColor: "#fff", paddingHorizontal: theme.spacing.p_1, paddingVertical: theme.spacing.p_2, height: full ? "100%" : undefined }} {...rest}>
            {children}
        </View>
    )
}