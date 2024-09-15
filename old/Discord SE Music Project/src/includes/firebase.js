import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBnkRTjy0YtJbh5mEABd2-ISUuwB65pln0",
  authDomain: "music-streaming-platform-ed8a6.firebaseapp.com",
  projectId: "music-streaming-platform-ed8a6",
  storageBucket: "music-streaming-platform-ed8a6.appspot.com",
  messagingSenderId: "600902701870",
  appId: "1:600902701870:web:894750c7f9e150f3aae0bf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
