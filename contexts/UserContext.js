import React, { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { getUserByUid, updateUser as updateUserData } from '../api/users';
import { FIREBASE_AUTH } from '../FirebaseConfig';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [currentUser, setCurrentUser] = useState(null);
    const [isUserLoading, setIsUserLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, (user) => {
            setUser(user);
            setIsUserLoading(false);
        });
        return () => unsubscribe();
    }, []);

    useEffect(() => {
        const fetchUserData = async () => {
            if (user) {
                try {
                    setIsUserLoading(true);
                    const data = await getUserByUid(user.uid);
                    setCurrentUser(data);
                } catch (e) {
                    console.error("Error fetching user: " + e);
                } finally {
                    setIsUserLoading(false);
                }
            } else {
                setIsUserLoading(false);
            }
        };
        fetchUserData();
    }, [user]);

    const updateUser = async (uid, data) => {
        try {
            await updateUserData(uid, data);
            const updatedUserData = await getUserByUid(uid);
            setCurrentUser(updatedUserData);
            return updatedUserData; // Ensure the updated data is returned
        } catch (error) {
            console.error('Error updating user: ', error);
            throw error;
        }
    };

    return (
        <UserContext.Provider value={{ currentUser, updateUser, isUserLoading }}>
            {children}
        </UserContext.Provider>
    );
};
