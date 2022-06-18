import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgPPuhE-gRcLm9JU-lJso1uX2xwGiTH70",
  authDomain: "learning-resource-tracker.firebaseapp.com",
  projectId: "learning-resource-tracker",
  storageBucket: "learning-resource-tracker.appspot.com",
  messagingSenderId: "40267264962",
  appId: "1:40267264962:web:b29c3063ad9d84cec0dc5b",
  measurementId: "G-SN8JZZ48Q0"
};

// Initialize Firebase
initializeApp(firebaseConfig);

getAnalytics();
const app = createApp(App);

app.use(router);

app.mount("#app");
