import {FIRESTORE} from "../FirebaseConfig";
import {getDocs, collection, addDoc, updateDoc, deleteDoc} from "firebase/firestore";

const getOrders = async () => {
    const orders = [];
    const querySnapshot = await getDocs(collection(FIRESTORE, 'orders'));
    querySnapshot.docs.map((doc) => {
        orders.push(doc.data());
    });
    return orders;
}

const getOrderById = async (id) => {
    const querySnapshot = await getDocs(collection(FIRESTORE, 'orders'));
    let orders = null;
    querySnapshot.forEach((doc) => {
        if (doc.id === id) {
            orders = doc.data();
        }
    });
    return orders;
}

const addOrder = async (data) => {
    await addDoc(collection(FIRESTORE, 'orders'), data)
        .then(() => {
            console.log('Order added successfully')
        })
        .catch((error) => {
            console.error('Error adding order: ', error)
        });
}

const updateOrder = async (id, data) => {
    const orderRef = collection(FIRESTORE, 'orders', id);
    await updateDoc(orderRef, data)
        .then(() => {
            console.log('Order updated successfully')
        })
        .catch((error) => {
            console.error('Error updating order: ', error)
        });
}

const deleteOrder = async (id) => {
    const orderRef = collection(FIRESTORE, 'orders', id);
    await deleteDoc(orderRef)
        .then(() => {
            console.log('Order deleted successfully')
        })
        .catch((error) => {
            console.error('Error deleting order: ', error)
        });
}
