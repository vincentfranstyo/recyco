import {FIRESTORE} from "../FirebaseConfig";
import {getDocs, collection} from "firebase/firestore";

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
    await addDoc(collection(FIRESTORE, 'users'), data);
}