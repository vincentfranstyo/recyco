import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LogoPage from './pages/Logo.jsx';
import IntroPage from './pages/Intro.jsx';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="LogoPage" headerMode="none">
                <Stack.Screen name="LogoPage" component={LogoPage}/>
                <Stack.Screen name="IntroPage" component={IntroPage}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
