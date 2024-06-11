import React, {useEffect} from 'react';
import {CommonActions, NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {FontProvider} from "./contexts/FontContext";
import {UserProvider, useUser} from "./contexts/UserContext";

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
import OrderConfirmationPage from "./pages/OrderConfirmation";
import NotFoundPage from "./pages/NotFound";
import LoadingScreen from "./components/LoadingScreen";

const Stack = createStackNavigator();

const AppNavigator = ({navigation}) => {
    const {currentUser, updateUser, isUserLoading} = useUser();
    const navigationRef = React.createRef();

    useEffect(() => {
        if (navigationRef.current && !isUserLoading) {
            if (currentUser) {
                navigationRef.current.dispatch(
                    CommonActions.reset({
                        index: 0,
                        routes: [{name: 'HomePage'}],
                    })
                );
            } else {
                navigationRef.current.dispatch(
                    CommonActions.reset({
                        index: 0,
                        routes: [{name: 'LogoPage'}],
                    })
                );
            }
        }
    }, [currentUser]);

    if (isUserLoading) {
        return(
<LoadingScreen/>            )
    }

    console.log('app', currentUser)
    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator initialRouteName={currentUser ? 'HomePage' : 'LogoPage'}
                             screenOptions={{headerShown: false}}>
                <Stack.Screen name="LogoPage" component={LogoPage} options={{title: 'Logo'}}/>
                <Stack.Screen name="IntroPage" component={IntroPage} options={{title: 'Intro'}}/>
                <Stack.Screen name="Intro2Page" component={Intro2Page} options={{title: 'Intro 2'}}/>
                <Stack.Screen name="LoginPage" component={LoginPage} options={{title: 'Login'}}/>
                <Stack.Screen name="RegistrationPage" component={RegistrationPage} options={{title: 'Registration'}}/>
                <Stack.Screen name="ForgetPasswordPage" component={ForgetPassword}
                              options={{title: 'Forget Password'}}/>
                <Stack.Screen name="NotFoundPage" component={NotFoundPage} options={{title: 'Not Found'}}/>
                <Stack.Screen name="HomePage" component={HomePage} options={{title: 'Home'}}/>
                <Stack.Screen name="OrderPage" component={OrderPage} options={{title: 'Order'}}/>
                <Stack.Screen name="OrderConfirmationPage" component={OrderConfirmationPage}
                              options={{title: 'Order Confirmation'}}/>
                <Stack.Screen name="InfoDetailPage" component={InfoDetailPage} options={{title: 'Info Detail'}}/>
                <Stack.Screen name="HistoryDetailPage" component={HistoryDetailPage}
                              options={{title: 'History Detail'}}/>
                <Stack.Screen name="HistoryPage" component={HistoryPage} options={{title: 'History'}}/>
                <Stack.Screen name="ProfilePage" component={ProfilePage} options={{title: 'Profile'}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const App = () => {
    return (
        <FontProvider>
            <UserProvider>
                <AppNavigator/>
            </UserProvider>
        </FontProvider>
    );
};

export default App;
