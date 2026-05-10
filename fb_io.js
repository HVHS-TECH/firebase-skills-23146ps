/**************************************************************
 **************************************************************
 **                                                          **
 ** fb_io.js is where you will put common firebase functions **
 ** used throughout your code.                               **
 **                                                          **
 **************************************************************
 **************************************************************/
var GLOBAL_user;

function fb_login(){
    firebase.auth().onAuthStateChanged(fb_handleLogin);
}

function fb_handleLogin(_user) {
    if (_user) {
        console.log("User has logged in")
        GLOBAL_user = _user;
        console.log(GLOBAL_user)
    } else {
        console.log("User is NOT logged in - Starting popup process")
        fb_popupLogin();
    }
}

function fb_popupLogin() {
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider).then((result) => {
        GLOBAL_user = result.user;
        console.log("User has logged in")
    });
}