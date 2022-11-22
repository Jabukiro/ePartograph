import { Home, Login, Register, RegisterPatient, Welcome } from './screens';
import { SafeAreaView, ScrollView, StatusBar, Platform, StyleSheet, Text, View } from 'react-native';
import { MD3LightTheme as DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#005abb",
    primaryOpacity1: "rgba(0, 90, 187, 0.1)",
    red: "#fd0103",
    red1: "#fc8888",
    red2: "#fc7474",
    red3: "rgb(252, 179, 179)",
    surfaceVariant: "#d7effb",
    elevation: {
      ...DefaultTheme.colors.elevation,
      level1: "#f2f6fc",
      level2: "#ebf2fa",
      level3: "#e3edf8",
      level4: "#e0ebf7",
      level5: "#dbe8f6",
    }
  },
  spacing: {
    m_05: 5,
    m_1: 10,
    m_2: 20,
    p_05: 5,
    p_1: 10,
    p_2: 20,
  }
};
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Welcome'>
          <Stack.Screen name="Welcome" options={{ title: 'ePartograph' }} component={Welcome} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" options={{ title: 'ePartograph' }} component={Home} />
          <Stack.Screen name="RegisterPatient" options={{ title: 'Register Patient' }} component={RegisterPatient} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
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
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
