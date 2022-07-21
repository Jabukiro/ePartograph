import * as React from 'react';
import { Button } from 'react-native-paper';
export default function MyButton({ size, labelStyle, ...rest }) {
    return (
        <Button labelStyle={{ fontSize: setFontSize(size), ...labelStyle }} {...rest} />
    )
}
const setFontSize = (size) => {
    switch (size) {
        case 'large':
            return 18;
        default:
            return undefined
    }
}