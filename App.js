import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LogoPage from './pages/Logo.jsx';
import IntroPage from './pages/Intro.jsx';
import Intro2Page from './pages/Intro2.jsx';
import LoginPage from './pages/Login.jsx';
import RegistrationPage from './pages/Register.jsx';
import ForgetPassword from './pages/ForgetPassword.jsx';
import HomePage from './pages/Home.jsx';
import OrderPage from './pages/Order.jsx';
import InfoDetailPage from './pages/InfoDetail.jsx';
import HistoryDetailPage from "./pages/HistoryDetail";
import HistoryPage from "./pages/History";
import ProfilePage from "./pages/Profile";

const Stack = createStackNavigator();

const StackNavigator = () => (
    <Stack.Navigator initialRouteName={"LogoPage"} screenOptions={{headerShown: false}}>
        <Stack.Screen name="LogoPage" component={LogoPage} options={{title: "Logo"}}/>
        <Stack.Screen name="IntroPage" component={IntroPage} options={{title: "Intro"}}/>
        <Stack.Screen name="Intro2Page" component={Intro2Page} options={{title: "Intro 2"}}/>
        <Stack.Screen name="LoginPage" component={LoginPage} options={{title: "Login"}}/>
        <Stack.Screen name="RegistrationPage" component={RegistrationPage} options={{title: "Registration"}}/>
        <Stack.Screen name={"HomePage"} component={HomePage} options={{title: "Home"}}/>
        <Stack.Screen name="ForgetPasswordPage" component={ForgetPassword} options={{title: "Forget Password"}}/>
        <Stack.Screen name="OrderPage" component={OrderPage} options={{title: 'Order'}}/>
        <Stack.Screen name="InfoDetailPage" component={InfoDetailPage} options={{title: 'Info Detail'}}/>
        <Stack.Screen name="HistoryDetailPage" component={HistoryDetailPage} options={{title: 'History Detail'}}/>
        <Stack.Screen name="HistoryPage" component={HistoryPage} options={{title: 'History'}}/>
        <Stack.Screen name="ProfilePage" component={ProfilePage} options={{title: 'Profile'}}/>
    </Stack.Navigator>
);

const App = () => (
    <NavigationContainer>
        <StackNavigator/>
    </NavigationContainer>
);

export default App;

