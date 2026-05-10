/**************************************************************
 **************************************************************
 **                                                          **
 ** script.js is where you will write most of your code.     **
 **                                                          **
 **************************************************************
 **************************************************************/

const HTML_OUTPUT = document.getElementById("databaseOutput");

fb_login();
/**************************************************************/
// helloWorld()
// Demonstrate a minimal write to firebase
// This function replaces the entire database with the message "Hello World"
// 
// This uses the set() operation to write the key:value pair "message":"Hello World"
// The ref('/') part tells the operation to write to the base level of the database "/"
// This means it replaces the whole database with message:Hello World
/**************************************************************/
let userInput

function getFormInput() {
  userInput = document.getElementById("formName");
  sendUserData();
}

function helloWorld() {
  console.log("Running helloWorld()");
  firebase.database().ref('/game1/userdata/message/').set('helloWorld()');
}

function sendUserData() {
  console.log("Running message2");
  firebase.database().ref('/game1/userdata/usermessage/').set(' '+userInput);
}

function readData() {
  console.log("reading data");
  firebase.database().ref('/game1/userdata/scores').orderByValue().once('value', fb_readUserScores, fb_readError);
  console.log('readData() complete');
}

function dataListener() {
  console.log("update detected")
  firebase.database().ref('/').on('value', displayRead, fb_readError);
  console.log("dataListener() completed")
}

function displayRead(snapshot) {
  var dbData = snapshot.val();
  if (dbData == null) {
    console.log("there was no data when attempting read");
  } else {
    console.log(dbData);
  }
  //HTML_OUTPUT.innerHTML = snapshot.val();
}

function fb_readUserScores(snapshot){
  console.log("fb_readUserScores");
  snapshot.forEach(fb_showOneScore)
  /*
  let userData = snapshot.val();
  let messages = Object.keys(userData)
  for(i=0; i < messages.length; i++) {
    let key =  messages[i];
    console.log(i+ " is for " +key+ "." +userData[key])
  
  }
  */
  console.log("fb_readUserData complete")
}

function fb_showOneScore(child){
  console.log(child.key+" got "+child.val()+" points");
}

function fb_readError(error) {
  console.log("there was an error reading the message");
  console.log(error);
}