// Firebase modüllerini içe aktar
import { createSlice } from '@reduxjs/toolkit';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9Dvp9DUdCFYsE2lhNTuapBHM-fidcKQg",
  authDomain: "react-ecom-cc7fe.firebaseapp.com",
  projectId: "react-ecom-cc7fe",
  storageBucket: "react-ecom-cc7fe.appspot.com",
  messagingSenderId: "51948876911",
  appId: "1:51948876911:web:d663303c38a2bd7ba1899a",
  measurementId: "G-G9Q40PHF8R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const RegisterData = createSlice({
  name: 'RegisterItem',
  initialState: {
    formDatam: [],
  },
  reducers: {
    submitFormData: (state, action) => {
      state.formDatam = action.payload;

      // Firebase'e kullanıcı kaydı yap
      try {
        const auth = getAuth(app);
        const { email, password, firstName, lastName, phone } = action.payload;

        // Kullanıcıyı Firebase Authentication ile oluştur
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Başarılı kayıt işlemi
            const user = userCredential.user;
            console.log('Firebase kullanıcı kaydı başarılı:', user);

            // Ek bilgileri Firestore'a kaydet
            const db = getFirestore(app);
            const userDocRef = doc(db, 'users', user.uid);
            setDoc(userDocRef, {
              firstName: firstName,
              lastName: lastName,
              phone: phone,
            });
          })
          .catch((error) => {
            // Kayıt işlemi sırasında hata
            console.error('Firebase kullanıcı kaydı hatası:', error.message);
          });
      } catch (error) {
        console.error('Firebase kullanıcı kaydı hatası:', error.message);
      }
    },
  },
});

export const { submitFormData } = RegisterData.actions;
export default RegisterData.reducer;