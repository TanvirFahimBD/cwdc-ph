import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAfcvWP5Uzn0-1qjo-vWcX0D8E9oNJ-Cc0",
  authDomain: "fir-test-6bd18.firebaseapp.com",
  projectId: "fir-test-6bd18",
  storageBucket: "fir-test-6bd18.appspot.com",
  messagingSenderId: "1085243970433",
  appId: "1:1085243970433:web:d1f8006634a0da282ace80",
};

const app = initializeApp(firebaseConfig);
export default app;

//   apiKey: process.env.REACT_APP_apiKey,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId,
