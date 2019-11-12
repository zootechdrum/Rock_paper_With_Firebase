
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
let player1Wins;
let player1Losses;
let player2LWins
let player2Losses

let inputName = '';
let player = 0;
let player1Present;
let player2Present;

//Different paths set to firebase.
let database = firebase.database();
let parentData = database.ref();
let playerRef = database.ref('/player');
let currentTurn = database.ref('/turn');
let chatFeat = database.ref('/chat');




$("#save-user").on("click", function() {
  inputName = $('#enteredUser').val().trim()
  initGame()
  $('#myModal').modal('hide')
  $("#enteredUser").hide();
  $("#playerName").html("<h2>Already Entered Name</h2>");
});

//fires everytime a child is added to the player path in firebase
playerRef.on('value', function(snap) {

  player1Present = snap.child('1').exists()
  player2Present = snap.child('2').exists()

  if (player1Present) {
    $('#player1').text(snap.val()[1].userName)
  }
  if (player2Present) {
    $('#player2').text(snap.val()[2].userName)
  }
  if (!player1Present) {
    $('#player1').html("<h1>Player 1 Does not Exist</h1>")
  }
  if (!player2Present) {
    $('#player2').html("<h1>Player 2 Does not Exist</h1>")
  }
})

  //Chat functionality 
  $("#submitMessage").on("click", function (e) {
    e.preventDefault()
    let saveMessage = $(".message_input").val().trim()
    console.log(saveMessage)
    let message = database.ref('/chat/' + player);
    message.set({
      message: saveMessage
    });
  })


function initGame() {
  if (player < 2) {
    if (player1Present) {
      player = 2
    } else {
      player = 1
    }
  };

  let playerDet = database.ref('/player/' + player);
  playerDet.set({
    wins: 0,
    losses: 0,
    userName: inputName
  })

  //Write to the DOM

  playerDet.onDisconnect().remove();
}


