import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Surface, Text, useTheme } from 'react-native-paper';
import { MainContainer, MyButton, MyTextInput } from '../components';

export default function Login() {
    const theme = useTheme();
    const [state, setState] = React.useState({ username: "", password: "" });
    const handleChange = (value, name) => {
        setState(prevState => (
            {
                ...prevState,
                [name]: value,
            }
        ));
    }
    return (
        <MainContainer full={true} style={{ flex: 0, justifyContent: "center" }}>
            <Text variant="headlineMedium" style={{ marginBottom: theme.spacing.m_2 }}>Login</Text>
            <View style={{ marginBottom: theme.spacing.m_1 }}>
                <MyTextInput label="Username" placeholder='Email or Phone Number'
                    onChangeText={text => handleChange(text, 'username')} />
                <MyTextInput label="Password"
                    onChangeText={text => handleChange(text, 'password')} />
            </View>
            <MyButton size="large" mode="contained">Login</MyButton>
        </MainContainer>
    )
}