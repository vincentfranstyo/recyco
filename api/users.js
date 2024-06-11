import {FIREBASE_AUTH, FIRESTORE} from "../FirebaseConfig.js";
import {addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where} from "firebase/firestore";
import {useEffect, useState} from "react";
import {onAuthStateChanged} from "firebase/auth";

export const getUser = async () => {
    const users = [];
    const querySnapshot = await getDocs(collection(FIRESTORE, 'users'));
    querySnapshot.docs.map((doc) => {
        users.push(doc.data());
    });
    return users;
}

export const getUserByUid = async (uid) => {
    const userRef = collection(FIRESTORE, 'users');
    const q = query(userRef, where('uid', '==', uid));
    const querySnapshot = await getDocs(q);
    let user = null;
    querySnapshot.forEach((doc) => {
        user = doc.data();
    });

    return user;
}

export const addUser = async (data) => {
    const users = await getUser();
    const isUserExist = users.find((user) => user.email === data.email);
    if (isUserExist) {
        return 'User already exist';
    }
    await addDoc(collection(FIRESTORE, 'users'), data)
        .then(() => {
            console.log('User added successfully')
        })
        .catch((error) => {
            console.error('Error adding user: ', error)
        });
}

const getUserDocId = async (uid) => {
    try {
        const userRef = collection(FIRESTORE, 'users');
        const q = query(userRef, where('uid', '==', uid));
        const querySnapshot = await getDocs(q);
        let docId = null;
        querySnapshot.forEach((doc) => {
            docId = doc.id;
        });

        if (!docId) {
            throw new Error('User not found');
        }

        return docId;
    } catch (error) {
        console.error('Error getting user document ID: ', error);
        throw error;
    }
}

export const updateUser = async (uid, data) => {
    try {
        const id = await getUserDocId(uid);
        const userDocRef = doc(FIRESTORE, 'users', id);
        await updateDoc(userDocRef, data);
        console.log('User updated successfully');
    } catch (error) {
        console.error('Error updating user: ', error);
        throw error;
    }
}

export const deleteUser = async (uid) => {
    const id = await getUserDocId(uid);
    const userRef = doc(FIRESTORE, 'users', id);
    await deleteDoc(userRef)
        .then(() => {
            console.log('User deleted successfully')
        })
        .catch((error) => {
            console.error('Error deleting user: ', error)
        });
}