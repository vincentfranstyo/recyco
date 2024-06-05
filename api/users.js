import {FIRESTORE} from "../FirebaseConfig";
import {addDoc, collection, getDocs, updateDoc, deleteDoc, query, where} from "firebase/firestore";

export const getUser = async () => {
    const users = [];
    const querySnapshot = await getDocs(collection(FIRESTORE, 'users'));
    querySnapshot.docs.map((doc) => {
        users.push(doc.data());
    });
    return users;
}

export const getUserByUid = async (uid) => {
    const q = query(collection(FIRESTORE, 'users'), where('uid', '==', uid));
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

export const updateUser = async (uid, data) => {
    const userRef = collection(FIRESTORE, 'users', uid);
    await updateDoc(userRef, data)
        .then(() => {
            console.log('User updated successfully')
        })
        .catch((error) => {
            console.error('Error updating user: ', error)
        });
}

export const deleteUser = async (uid) => {
    const userRef = collection(FIRESTORE, 'users', uid);
    await deleteDoc(userRef)
        .then(() => {
            console.log('User deleted successfully')
        })
        .catch((error) => {
            console.error('Error deleting user: ', error)
        });
}