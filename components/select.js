import * as React from 'react';
import { Text, View } from 'react-native0;'
import { Surface, TextInput } from 'react-native-paper';
/**
 * 
 * @param {Array} valueList contains all the values that can be selected.
 * @param {Int} defaultIndex contains the index of the default value to be used from valueList
 * @returns 
 */
export default function Select({ valueList, defaultIndex, ...rest }) {
    const value = React.useState(valueList[defaultIndex]);
    return (
        <View>
            <TextInput {...rest} value={value} />
            <View style={{ flex: 1 }}>
                {valueList.map((value, index) => (<Text style={{ marginBottom: 10 }} key={index}>{value}</Text>))}
            </View>
        </View>
    );
}