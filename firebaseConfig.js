import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBoo_mFsv449XqesF-fklRqAIhjLytwk30",
  authDomain: "recyco-ppam.firebaseapp.com",
  projectId: "recyco-ppam",
  storageBucket: "recyco-ppam.appspot.com",
  messagingSenderId: "865396782019 ",
  appId: "1:865396782019:android:0f244060365df497434376"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
