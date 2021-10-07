import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcHIxAWHniuTyvQChc13CYj5bysAcqwFw",
  authDomain: "my-virtual-shop-4b8f3.firebaseapp.com",
  databaseURL: "https://my-virtual-shop-4b8f3-default-rtdb.firebaseio.com",
  projectId: "my-virtual-shop-4b8f3",
  storageBucket: "my-virtual-shop-4b8f3.appspot.com",
  messagingSenderId: "917542701716",
  appId: "1:917542701716:web:d4db14ca11308e82828281",
  measurementId: "G-WYSC51E8V5",
};

const app = initializeApp(firebaseConfig);
export default getFirestore(app);
