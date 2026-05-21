 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-analytics.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyCcPqxsdjTPqJxqgiiAZrDw-EFewG2279I",
   authDomain: "perpustakaansman3muarateweh.firebaseapp.com",
   databaseURL: "https://perpustakaansman3muarateweh-default-rtdb.firebaseio.com",
   projectId: "perpustakaansman3muarateweh",
   storageBucket: "perpustakaansman3muarateweh.firebasestorage.app",
   messagingSenderId: "202384072752",
   appId: "1:202384072752:web:24e3448e91aa25fbf74df5",
   measurementId: "G-B4E84B6TYL"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);