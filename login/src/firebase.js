import { initializeApp } from 'firebase/app';
import { getAuth} from 'firebase/auth';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  //...
    apiKey: "AIzaSyAx2oBpDiSwqs8792buEMjgYX6-UYCnvQ0",
    authDomain: "mobile-auth-7e21b.firebaseapp.com",
    projectId: "mobile-auth-7e21b",
    storageBucket: "mobile-auth-7e21b.appspot.com",
    messagingSenderId: "831668648771",
    appId: "1:831668648771:web:6fb1e8c6fb1e3d1d9d0df6"
};

const app = initializeApp(firebaseConfig);

export const  auth=getAuth(app);