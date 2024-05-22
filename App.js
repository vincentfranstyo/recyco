import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LogoPage from './pages/Logo.jsx';
import IntroPage from './pages/Intro.jsx';
import Intro2Page from './pages/Intro2.jsx';
import LoginPage from './pages/Login.jsx';
import RegistrationPage from './pages/Register.jsx';
import ForgetPassword from './pages/ForgetPassword.jsx';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Intro" screenOptions={{headerShown: false}}>
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
                <Stack.Screen
                    name="Intro2Page"
                    component={Intro2Page}
                    options={{title: "Intro 2"}}
                />
                <Stack.Screen
                    name={"LoginPage"}
                    component={LoginPage}
                    options={{title: "Login"}}
                />
                <Stack.Screen
                    name={"RegistrationPage"}
                    component={RegistrationPage}
                    options={{title: "Registration"}}
                />
                <Stack.Screen
                    name={"ForgetPasswordPage"}
                    component={ForgetPassword}
                    options={{title: "Forget Password"}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
