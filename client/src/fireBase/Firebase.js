import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
} from "firebase/auth";
import { findOrCreate } from "../redux/actions";

const firebaseConfig = {
  apiKey: "AIzaSyDImDA2Ya23IN-8cJ3qZZyNTqDaUTepRyQ",
  authDomain: "hotelbooking-81504.firebaseapp.com",
  projectId: "hotelbooking-81504",
  storageBucket: "hotelbooking-81504.firebasestorage.app",
  messagingSenderId: "438505637549",
  appId: "1:438505637549:web:574654c9c3fffb87ede824",
  measurementId: "G-9W4VT7HEDG"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();
const providerFacebook = new FacebookAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      let data = {
        email: result.user.email,
        name: result.user.displayName,
        img: result.user.photoURL,
      };
      findOrCreate(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const signedWithFacebook = () => {
  signInWithPopup(auth, providerFacebook)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
};
