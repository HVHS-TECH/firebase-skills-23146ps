/**************************************************************/
// fb_initialise()
// Initialize firebase, connect to the Firebase project.
// 
// Find the config data in the Firebase console. Cog wheel > Project Settings > General > Your Apps > SDK setup and configuration > Config
//
// Input:  n/a
// Return: n/a
/**************************************************************/
const firebaseConfig = {
  apiKey: "AIzaSyAMHNLA93MQ3z7LIENSBQ33XImNSRXxK1g",
  authDomain: "pasha-stepura-12comp.firebaseapp.com",
  databaseURL: "https://pasha-stepura-12comp-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "pasha-stepura-12comp",
  storageBucket: "pasha-stepura-12comp.firebasestorage.app",
  messagingSenderId: "1030985723397",
  appId: "1:1030985723397:web:d733afa5d1a6f5cbf9f66c"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // This log prints the firebase object to the console to show that it is working.
  // As soon as you have the script working, delete this log.
  console.log("Firebase initialize finished:");
  console.log(firebase);
