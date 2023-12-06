import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAuth, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyD9Dvp9DUdCFYsE2lhNTuapBHM-fidcKQg",
  authDomain: "react-ecom-cc7fe.firebaseapp.com",
  projectId: "react-ecom-cc7fe",
  storageBucket: "react-ecom-cc7fe.appspot.com",
  messagingSenderId: "51948876911",
  appId: "1:51948876911:web:d663303c38a2bd7ba1899a",
  measurementId: "G-G9Q40PHF8R"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// çıkış işlemi
export const logoutUser = createAsyncThunk(
  'LoginData/logoutUser',
  async (_, thunkAPI) => {
    try {
      const auth = getAuth(app);
      await signOut(auth);

      // Logout başarılı olduğunda Redux store'unda kullanıcı bilgilerini güncelle
      thunkAPI.dispatch(LoginData.actions.submitLoginData(null));
      thunkAPI.dispatch(LoginData.actions.setLoginSuccess(false)); // loginSuccess'i false yap

      console.log('Başarılı şekilde çıkış yapıldı');
    } catch (error) {
      console.error('Çıkış yaparken bir hata oluştu:', error);
      throw error;
    }
  }
);

export const loginUser = createAsyncThunk(
  'LoginData/loginUser',
  async ({ email, password }, thunkAPI) => {
    try {
      const auth = getAuth(app);
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const userInfo = { uid: user.uid, email: user.email };
      const userData = await getUserDataFromFirestore(user.uid);

      return { user: { ...userInfo, ...userData } };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const getUserDataFromFirestore = async (uid) => {
  const userDocRef = doc(db, 'users', uid);
  const userDocSnapshot = await getDoc(userDocRef);

  if (userDocSnapshot.exists()) {
    return userDocSnapshot.data();
  } else {
    throw new Error("User data not found in Firestore");
  }
};

const LoginData = createSlice({
  name: 'LoginData',
  initialState: {
    LoginDatam: { email: '', password: '', user: null },
    loginSuccess: false,
    error: null,
    loading: false,
  },
  reducers: {
    submitLoginData: (state, action) => {
      state.LoginDatam.user = action.payload;
    },
    setLoginSuccess: (state, action) => {
      state.loginSuccess = action.payload;
    },

  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.loginSuccess = true;
        state.error = null;
        state.LoginDatam.user = action.payload.user;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.loginSuccess = false;
        state.error = action.payload;
      });
  },
});

export const { submitLoginData } = LoginData.actions;
export default LoginData.reducer;
