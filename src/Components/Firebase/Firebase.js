
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getStorage} from "firebase/storage"
import { collection,getDocs,getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAjdGJSLP_lpFn3dmtQvWzR5APxSdm_Pr4",
  authDomain: "olx-clone-2bd8b.firebaseapp.com",
  projectId: "olx-clone-2bd8b",
  storageBucket: "olx-clone-2bd8b.firebasestorage.app",
  messagingSenderId: "774300310831",
  appId: "1:774300310831:web:7fb156b1ff8f808e3b15da"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
const storage = getStorage()
const fireStore = getFirestore();


const fetchFromFirestore = async()=>{
    try {
        const productsCollection = collection(fireStore,'products')
        const productSnapshot = await getDocs(productsCollection)
        const productList = productSnapshot.docs.map(doc=>({
            id:doc.id,
            ...doc.data()
        }))
        console.log('Fetched products from firestore', productList);
        return productList
        
    } catch (error) {
        console.error('Error fetching products from firestore:',error)
        return []
    }
}


export{
    auth,
    provider,
    storage,
    fireStore,
    fetchFromFirestore
}