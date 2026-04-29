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
let user = 'message'
let messagechange = 'message2'

function helloWorld(){
  console.log("Running helloWorld()");
  firebase.database().ref('/').set(
    {
      game1: {
        users: {
          message: 'message1'
        }
      }
    }
  );
}

function message2() {
  console.log("Running message2");
  firebase.database().ref('/game1/users/' + user).set(
    messagechange
  );
}

function readData(){
  console.log("reading data");
  firebase.database().ref('/game1/users/message').once('value', displayRead, fb_readError);
  console.log('readData() complete');
}

function dataListener() {
  console.log("update detected")
  firebase.database().ref('/').on('value', displayRead, fb_readError);
  console.log("dataListener() completed")
}

function displayRead(snapshot){
  var dbData = snapshot.val();
  if (dbData == null) {
    console.log("there was no data when attempting read")
  } else {  
    console.log("displaying read: " + snapshot.val());
  }
  //HTML_OUTPUT.innerHTML = snapshot.val();
}

function fb_readError(error){
  console.log("there was an error reading the message");
  console.log(error);
}