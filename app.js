
var firebaseConfig = {
  apiKey: "AIzaSyBl9OIF6Y8mv58wJwccmY9hLOEQqqjXkT0",
  authDomain: "testing-44b69.firebaseapp.com",
  databaseURL: "https://testing-44b69.firebaseio.com",
  projectId: "testing-44b69",
  storageBucket: "testing-44b69.appspot.com",
  messagingSenderId: "1000296696936",
  appId: "1:1000296696936:web:8f5eb35049c30f06bf3fdd",
  measurementId: "G-9J9SLR7K20"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let inputName = '';

let database = firebase.database();

let parentData = database.ref();

$("#save-user").on("click", function(){
  inputName = $('#enteredUser').val().trim()
  initGame()
});

function initGame(){
  
}
