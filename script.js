/**************************************************************
 **************************************************************
 **                                                          **
 ** script.js is where you will write most of your code.     **
 **                                                          **
 **************************************************************
 **************************************************************/

const HTML_OUTPUT = document.getElementById("databaseOutput");

/**************************************************************/
// helloWorld()
// Demonstrate a minimal write to firebase
// This function replaces the entire database with the message "Hello World"
// 
// This uses the set() operation to write the key:value pair "message":"Hello World"
// The ref('/') part tells the operation to write to the base level of the database "/"
// This means it replaces the whole database with message:Hello World
/**************************************************************/
function helloWorld(){
  console.log("Running helloWorld()");
  firebase.database().ref('/').set(
    {
      message: 'new message'
    }
  );
}

function readData(){
  console.log("reading data");
  firebase.database().ref('/message').once('value', displayRead, fb_readError);
  console.log('readData() complete');
}

function displayRead(snapshot){
  var dbData = snapshot.val();
  if (dbData == null) {
    console.log("there was no data when attempting read")
  } else {  
    console.log("displaying read: " + snapshot.val());
  }
  HTML_OUTPUT.innerHTML = snapshot.val();
}

function fb_readError(error){
  console.log("there was an error reading the message");
  console.log(error);
}