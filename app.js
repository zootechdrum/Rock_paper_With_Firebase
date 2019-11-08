//Firebase configuration

let player1 = '';
let player2 = '';

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

let database = firebase.database();

let connectionsRef = database.ref("/connections");

let players = database.ref('/players')

// '.info/connected' is a special location provided by Firebase that is updated every time
// the client's connection state changes.
// '.info/connected' is a boolean value, true if the client is connected and false if they are not.


//Writes player data into firebase
function writePlayerData(userName,player) {
  firebase.database().ref('users/'+ player).set({
    name: '' || userName,
    wins: 0,
    message: '',
    choice: ''
  })
}

let playerdb = database.ref("users")

let connectedRef = database.ref(".info/connected");

// When the client's connection state changes...
connectedRef.on("value", function(snap) {

  // If they are connected..
  if (snap.val()) {

    // Add user to the connections list.
    var con = connectionsRef.push(true);

    // Remove user from the connection list when they disconnect.
    con.onDisconnect().remove();
  }
});

// When first loaded or when the connections list changes...
connectionsRef.on("value", function(snapshot) {

  // if(snapshot.numChildren() === 1){
  //   writePlayerData('player1',undefined)
  
  // }else{
  //   writePlayerData('player2',undefined)
  // }
});

//Testing only
function test() {
  if( player1 === ""){
    return firebase.database().ref('users').once('value').then(function(snapshot) {
       player1 = snapshot.val().player1.name
      console.log(player1)
    }) 
  }else {
    return firebase.database().ref('users').once('value').then(function(snapshot) {
       player2 = snapshot.val().player1.name
      console.log(player1)
    }) 
  }

}




//Text will change if player1 and player2 are already set
$("#enterNameBtn").on('click', function(){
  if (player1 !== '' && player2 !== ''){
    $('#modal-content').html("<h4>User names have been set</h4>")
  }
})
// set the values for player1 and player2
$("#save-user").on('click', function(){
  if(player1 !== '') {
    value = $('input').val().trim();
    writePlayerData(value,'player2')  
    $('#exampleModalLabel').text('Player 2 Username')
  }else{
  value = $('input').val().trim();
  writePlayerData(value,'player1')
  test()
  }
});
