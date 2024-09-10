import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getStorage , ref,uploadBytes,getDownloadURL   } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-storage.js";
import { getFirestore, collection, addDoc ,getDocs   } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyB8ljShkHH-w3KzKcINf0thTHBvz-YbbUU",
  authDomain: "products-add-776f8.firebaseapp.com",
  projectId: "products-add-776f8",
  storageBucket: "products-add-776f8.appspot.com",
  messagingSenderId: "22550675552",
  appId: "1:22550675552:web:0952abdb4c90c4a6c20305",
  measurementId: "G-24GNWY2TCE"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
export{getFirestore, collection, addDoc ,db ,storage,ref,uploadBytes,getDocs,getDownloadURL  };
