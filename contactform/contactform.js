// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKfBLo-Rjsy5T9Yn_sKftRmLeUTxyoUGk",
  authDomain: "hellofirebase-b9e7f.firebaseapp.com",
  databaseURL: "https://hellofirebase-b9e7f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "hellofirebase-b9e7f",
  storageBucket: "hellofirebase-b9e7f.appspot.com",
  messagingSenderId: "300587045356",
  appId: "1:300587045356:web:a63a33b446db4c1b42f0c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db =  getDatabase(app);

document.getElementById("contactForm").addEventListener("submit",function(onclick){
    onclick.preventDefault();
    let name = document.getElementById("name").value;
    let Email = document.getElementById("email").value;
    let Subject = document.getElementById("subject").value;
    let Message = document.getElementById("message").value;
    

    set(ref(db),{
        username: name,
        Email: Email,
        Subject: Subject,
        Message: Message,
    });

})