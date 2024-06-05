import {FIRESTORE} from "../FirebaseConfig";
import {addDoc, collection, getDocs, updateDoc, deleteDoc} from "firebase/firestore";

export const getUser = async () => {
    const users = [];
    const querySnapshot = await getDocs(collection(FIRESTORE, 'users'));
    querySnapshot.docs.map((doc) => {
        users.push(doc.data());
    });
    return users;
}

export const getUserById = async (id) => {
    const querySnapshot = await getDocs(collection(FIRESTORE, 'users'));
    let users = null;
    querySnapshot.forEach((doc) => {
        if (doc.id === id) {
            users = doc.data();
        }
    });
    return users;
}

export const addUser = async (data) => {
    await addDoc(collection(FIRESTORE, 'users'), data)
        .then(() => {
            console.log('User added successfully')
        })
        .catch((error) => {
            console.error('Error adding user: ', error)
        });
}

export const updateUser = async (id, data) => {
    const userRef = collection(FIRESTORE, 'users', id);
    await updateDoc(userRef, data)
        .then(() => {
            console.log('User updated successfully')
        })
        .catch((error) => {
            console.error('Error updating user: ', error)
        });
}

export const deleteUser = async (id) => {
    const userRef = collection(FIRESTORE, 'users', id);
    await deleteDoc(userRef)
        .then(() => {
            console.log('User deleted successfully')
        })
        .catch((error) => {
            console.error('Error deleting user: ', error)
        });
}