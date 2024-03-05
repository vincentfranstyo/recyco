import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LogoPage from './pages/Logo.jsx';
import IntroPage from './pages/Intro.jsx';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="LogoPage" screenOptions={{ headerShown: false }}>
                <Stack.Screen
                    name="LogoPage"
                    component={LogoPage}
                    options={{title: "Logo"}}
                />
                <Stack.Screen
                    name="IntroPage"
                    component={IntroPage}
                    options={{title: "Intro"}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
