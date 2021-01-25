
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
        apiKey: "AIzaSyAZxYezZ7mYsqWkHHA5WJIOK9D3DyH4x5c",
    authDomain: "mcccricket-43e59.firebaseapp.com",
    projectId: "mcccricket-43e59",
    storageBucket: "mcccricket-43e59.appspot.com",
    messagingSenderId: "6672166977",
    appId: "1:6672166977:web:81001615c7e9cec5a9d6c0",
    measurementId: "G-5BZ5MHW3PH"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
// Reference messages collection
var messagesRef = firebase.database().ref('Messages');

//listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);
function submitForm(e) {
    e.preventDefault();

    //get values from form 
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;
    var message = document.getElementById("message").value;

    // Save message
    saveMessage(name, email, address, message);

    // Show alert
    document.getElementById("alertd").style.display = 'block';

    // Hide alert after 3 seconds
    setTimeout(function () {
        document.getElementById("alertd").style.display = 'none';
    }, 3000);

    // Clear form
    document.getElementById('contactForm').reset();
}

// Save message to firebase
function saveMessage(name, email, address, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        Username: name,
        Mailling: email,
        Address: address,
        Queries: message
    });
}