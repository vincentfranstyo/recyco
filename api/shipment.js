import {FIRESTORE} from '../FirebaseConfig'
import {getDocs, collection, addDoc, updateDoc, deleteDoc} from 'firebase/firestore'

export const getShipments = async () => {
    const shipments = [];
    const querySnapshot = await getDocs(collection(FIRESTORE, 'shipment'));
    querySnapshot.docs.map((doc) => {
        shipments.push(doc.data());
    });

    return shipments;
}

export const getShipmentById = async (id) => {
    const querySnapshot = await getDocs(collection(FIRESTORE, 'shipment'));
    let shipments = null;
    querySnapshot.forEach((doc) => {
        if (doc.id === id) {
            shipments = doc.data();
        }
    });
    return shipments;
}

export const addShipment = async (data) => {
    await addDoc(collection(FIRESTORE, 'shipment'), data)
        .then(() => {
            console.log('Shipment added successfully')
        })
        .catch((error) => {
            console.error('Error adding shipment: ', error)
        });
}

export const updateShipment = async (id, data) => {
    const shipmentRef = collection(FIRESTORE, 'shipment', id);
    await updateDoc(shipmentRef, data)
        .then(() => {
            console.log('Shipment updated successfully')
        })
        .catch((error) => {
            console.error('Error updating shipment: ', error)
        });
}

export const deleteShipment = async (id) => {
    const shipmentRef = collection(FIRESTORE, 'shipment', id);
    await deleteDoc(shipmentRef)
        .then(() => {
            console.log('Shipment deleted successfully')
        })
        .catch((error) => {
            console.error('Error deleting shipment: ', error)
        });
}