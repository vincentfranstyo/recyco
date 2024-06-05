import {FIRESTORE} from '../FirebaseConfig'
import {getDocs, collection, addDoc, updateDoc, deleteDoc} from 'firebase/firestore'

export const getHistories = async () => {
    const histories = [];
    const querySnapshot = await getDocs(collection(FIRESTORE, 'history'));
    querySnapshot.docs.map((doc) => {
        histories.push(doc.data());
    });
}

export const getHistoryById = async (id) => {
    const querySnapshot = await getDocs(collection(FIRESTORE, 'history'));
    let histories = null;
    querySnapshot.forEach((doc) => {
        if (doc.id === id) {
            histories = doc.data();
        }
    });
    return histories;
}

export const addHistory = async (data) => {
    await addDoc(collection(FIRESTORE, 'history'), data)
        .then(() => {
            console.log('History added successfully')
        })
        .catch((error) => {
            console.error('Error adding history: ', error)
        });
}

export const updateHistory = async (id, data) => {
    const historyRef = collection(FIRESTORE, 'history', id);
    await updateDoc(historyRef, data)
        .then(() => {
            console.log('History updated successfully')
        })
        .catch((error) => {
            console.error('Error updating history: ', error)
        });
}

export const deleteHistory = async (id) => {
    const historyRef = collection(FIRESTORE, 'history', id);
    await deleteDoc(historyRef)
        .then(() => {
            console.log('History deleted successfully')
        })
        .catch((error) => {
            console.error('Error deleting history: ', error)
        });
}