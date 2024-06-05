import {FIRESTORE} from "../FirebaseConfig";
import {getDocs, collection, addDoc, updateDoc, deleteDoc} from "firebase/firestore";

export const getNews = async () => {
    const news = [];
    const querySnapshot = await getDocs(collection(FIRESTORE, 'news'));
    querySnapshot.docs.map((doc) => {
        news.push(doc.data());
    });
    return news;
};

export const getNewsById = async (id) => {
    const querySnapshot = await getDocs(collection(FIRESTORE, 'news'));
    let news = null;
    querySnapshot.forEach((doc) => {
        if (doc.id === id) {
            news = doc.data();
        }
    });
    return news;
}

export const addNews = async (data) => {
    await addDoc(collection(FIRESTORE, 'news'), data)
        .then(() => {
            console.log('News added successfully')
        })
        .catch((error) => {
            console.error('Error adding news: ', error)
        });
}

export const updateNews = async (id, data) => {
    const newsRef = collection(FIRESTORE, 'news', id);
    await updateDoc(newsRef, data)
        .then(() => {
            console.log('News updated successfully')
        })
        .catch((error) => {
            console.error('Error updating news: ', error)
        });
}

export const deleteNews = async (id) => {
    const newsRef = collection(FIRESTORE, 'news', id);
    await deleteDoc(newsRef)
        .then(() => {
            console.log('News deleted successfully')
        })
        .catch((error) => {
            console.error('Error deleting news: ', error)
        });
}