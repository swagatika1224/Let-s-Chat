var firebaseConfig = {
      apiKey: "AIzaSyD8Msyw2ORNK81wgYFWlvNkoZjtcdVBe3s",
      authDomain: "kwitter-d7e9d.firebaseapp.com",
      databaseURL: "https://kwitter-d7e9d-default-rtdb.firebaseio.com",
      projectId: "kwitter-d7e9d",
      storageBucket: "kwitter-d7e9d.appspot.com",
      messagingSenderId: "491868464244",
      appId: "1:491868464244:web:2bcbd3b8a799c0c405dd21"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
