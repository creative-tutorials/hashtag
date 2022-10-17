/* Importing the functions from the firebase/storage package. */
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes } from "firebase/storage";

/* The configuration for the Firebase App. */
const firebaseConfig = {
  apiKey: "API KEY CHANGED",
  authDomain: "hashtag-app-c523b.firebaseapp.com",
  projectId: "hashtag-app-c523b",
  storageBucket: "hashtag-app-c523b.appspot.com",
  messagingSenderId: "408478971989",
  appId: "1:408478971989:web:e8be7bdfd2321885457cdc",
  measurementId: "G-Q8H2J0QNMR"
};

/* Initializing the Firebase App and then getting the storage from the app. */
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);


/**
 * This function uploads a file to Firebase Storage, and then returns a promise that resolves when the
 * upload is complete.
 * @param {any}  - FileObjectFromFileAPI - This is the file object that you get from the File API.
 * @returns A React Component
 */
export const FirebaseStorageFunction = (FileObjectFromFileAPI:any, getFileNameFromFileAPI:any) => {
  const storageRef = ref(storage, 'uploads/' + getFileNameFromFileAPI);
  // 'file' comes from the Blob or File API
  uploadBytes(storageRef, FileObjectFromFileAPI).then((snapshot) => {
  console.log('Uploaded a blob or file!');
  });
  console.log("Firebase Storage Function Loaded");
  return <></>;
};
