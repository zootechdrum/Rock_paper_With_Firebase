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

var database = firebase.database();

  var connectionsRef = database.ref("/connections");

// '.info/connected' is a special location provided by Firebase that is updated every time
// the client's connection state changes.
// '.info/connected' is a boolean value, true if the client is connected and false if they are not.
var connectedRef = database.ref(".info/connected");

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
console.log(snapshot.numChildren())
});

$("#enterNameBtn").on('click', function(){
  if (player1 !== '' && player2 !== ''){
    $('#modal-content').html("<h4>User names have been set</h4>")
  }
})

$("#save-user").on('click', function(){
  value = $('input').val().trim();

  if(player1 === ''){
    player1 = value;
    console.log(player1);
  }else{
    player2 = value;
    console.log("pl2 " + player2)
  }
  $('#myModal').modal('hide')
});
