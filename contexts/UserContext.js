import React, { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { getUserByUid, updateUser as updateUserData } from '../api/users'; // Ensure you have the updateUser function here
import { FIREBASE_AUTH } from '../FirebaseConfig';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
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
                    setCurrentUser(data);
                } catch (e) {
                    console.error("error fetching user: " + e);
                }
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
        <UserContext.Provider value={{ currentUser, updateUser }}>
            {children}
        </UserContext.Provider>
    );
};
