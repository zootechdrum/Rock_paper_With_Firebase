
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

//Global Variables
let inputName = '';
let player1;
let player2;
let player1Present;

//Different paths set to firebase.
let database = firebase.database();
let parentData = database.ref();
let playerRef = database.ref('/player');




$("#save-user").on("click", function(){
  inputName = $('#enteredUser').val().trim()
  initGame()
  $('#myModal').modal('hide')
});

//fires everytime a child is added to the player path in firebase
playerRef.on('value', function (snap){
  if(snap.child('1').exists()){
    player1Present = true;
  }
})


function initGame(){
  if(player1Present){
    player = 2
  }else{
    player = 1
  }
  let playerDet = database.ref('/player/'+ player);
  playerDet.set({
  wins:0,
  losses: '',
  userName:inputName
  })

}
