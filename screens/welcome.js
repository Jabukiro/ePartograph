import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';


export default function Welcome({ navigation }) {
    return (
        <>
            <View style={styles.flexContainer}>
                <Button mode='container'
                    onPress={() => navigation.navigate('Login')}>Login</Button>
                <Button mode='container'
                    onPress={() => navigation.navigate('Register')}>Register</Button>
                <Button mode='container'
                    onPress={() => navigation.navigate('Home')}>Home</Button>
                <Button mode='container'
                    onPress={() => navigation.navigate('RegisterPatient')}>Register Patient</Button>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    appHeader: {
        backgroundColor: '#007DFF',
        top: 0,
        height: 50,
        width: "100%",
        flex: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    flexContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
