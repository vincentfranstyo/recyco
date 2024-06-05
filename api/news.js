import {FIRESTORE} from "../FirebaseConfig";
import {getDocs, collection} from "firebase/firestore";

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