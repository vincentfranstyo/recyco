import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {onAuthStateChanged} from 'firebase/auth';
import {FIREBASE_AUTH} from "./FirebaseConfig";
import {FontProvider} from "./contexts/FontContext";
import {getUserByUid} from "./api/users";

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


const Stack = createStackNavigator();

const App = () => {
    const [user, setUser] = useState(null);
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, (user) => {
            setUser(user);
        });
        return () => unsubscribe();
    }, []);

    useEffect(() => {
        const fetchUserData = async () => {
            if (user) {
                try {
                    const data = await getUserByUid(user.uid);
                    // console.log('data', data);
                    setCurrentUser(data);
                } catch (e) {
                    console.error("error fetching user: " + e);
                }
            }
        };
        fetchUserData();
    }, [user]);

    // console.log('currentUser', currentUser)
    return (
        <FontProvider>
            <NavigationContainer>
                {currentUser ? (
                    <Stack.Navigator initialRouteName={"HomePage"} screenOptions={{headerShown: false}}>
                        <Stack.Screen name={"HomePage"} component={HomePage} options={{title: "Home"}} initialParams={{currentUser: currentUser}}/>
                        <Stack.Screen name="OrderPage" component={OrderPage} options={{title: 'Order'}}/>
                        <Stack.Screen name={"OrderConfirmationPage"} component={OrderConfirmationPage}
                                      options={{title: 'Order Confirmation'}}/>
                        <Stack.Screen name="InfoDetailPage" component={InfoDetailPage}
                                      options={{title: 'Info Detail'}}/>
                        <Stack.Screen name="HistoryDetailPage" component={HistoryDetailPage}
                                      options={{title: 'History Detail'}}/>
                        <Stack.Screen name="HistoryPage" component={HistoryPage} options={{title: 'History'}}/>
                        <Stack.Screen name="ProfilePage" component={ProfilePage} options={{title: 'Profile'}}/>
                        <Stack.Screen name={"NotFoundPage"} component={NotFoundPage} options={{title: 'Not Found'}}/>
                    </Stack.Navigator>
                ) : (
                    <Stack.Navigator initialRouteName={"LogoPage"} screenOptions={{headerShown: false}}>
                        <Stack.Screen name="LogoPage" component={LogoPage} options={{title: "Logo"}}/>
                        <Stack.Screen name="IntroPage" component={IntroPage} options={{title: "Intro"}}/>
                        <Stack.Screen name="Intro2Page" component={Intro2Page} options={{title: "Intro 2"}}/>
                        <Stack.Screen name="LoginPage" component={LoginPage} options={{title: "Login"}}/>
                        <Stack.Screen name="RegistrationPage" component={RegistrationPage}
                                      options={{title: "Registration"}}/>
                        <Stack.Screen name="ForgetPasswordPage" component={ForgetPassword}
                                      options={{title: "Forget Password"}}/>
                        <Stack.Screen name={"NotFoundPage"} component={NotFoundPage} options={{title: 'Not Found'}}/>
                    </Stack.Navigator>
                )}
            </NavigationContainer>
        </FontProvider>
    );
}


export default App;

