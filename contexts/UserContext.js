import React, { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { getUserByUid, updateUser as updateUserData } from '../api/users';
import { FIREBASE_AUTH } from '../FirebaseConfig';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [currentUser, setCurrentUser] = useState(null);
    const [authChecked, setAuthChecked] = useState(false);
    const [isUserLoading, setIsUserLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, (user) => {
            setUser(user);
            setAuthChecked(true);
        });
        return () => unsubscribe();
    }, []);

    useEffect(() => {
        const fetchUserData = async () => {
            if (user) {
                try {
                    const data = await getUserByUid(user.uid);
                    setCurrentUser(data);
                } catch (e) {
                    console.error("error fetching user: " + e);
                }
            }
            setIsUserLoading(false);
        };
        if (authChecked) {
            fetchUserData();
        }
    }, [user, authChecked]);

    const updateUser = async (uid, data) => {
        try {
            await updateUserData(uid, data);
            const updatedUserData = await getUserByUid(uid);
            setCurrentUser(updatedUserData);
            return updatedUserData;
        } catch (error) {
            console.error('Error updating user: ', error);
            throw error;
        }
    };

    return (
        <UserContext.Provider value={{ currentUser, updateUser, isUserLoading, authChecked }}>
            {children}
        </UserContext.Provider>
    );
};
