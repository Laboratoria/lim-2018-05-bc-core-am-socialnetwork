//Creating a function to show the users in fireBase
window.writeUserData = (userId, name, email, imageURL) => {
    firebase.database().ref('users/' + userId).set({
        username: name,
        email: email,
        profile_picture: imageURL,
    });
}

window.signUp = (email, password, cb) => {
    firebase.auth().createUserWithEmailAndPassword(emailSignUp.value, passwordSignUp.value)
        .then((result) => {
            cb(null, result);
        })
        .catch((error) => {
            cb(error);
        })
}

window.signIn = (email, password, cb) => {
    firebase.auth().signInWithEmailAndPassword(emailSignIn.value, passwordSignIn.value)
        .then((result) => {
            cb(null, result);
        })
        .catch((error) => {
            cb(error);
        });
}

window.signInGoogle = (provider, cb) => {
    provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({
        'display': 'popup'
    });
    firebase.auth().signInWithPopup(provider)
        .then((result) => {
            cb(null, result);
        })
        .catch((error) => {
            cb(error);
        })
};

window.signInFacebook = (provider, cb) => {
    provider = new firebase.auth.FacebookAuthProvider();
    provider.setCustomParameters({
        'display': 'popup'
    });
    firebase.auth().signInWithPopup(provider)
        .then((result) => {
            cb(null, result);
        })
        .catch((error) => {
            cb(error);
        })
};


// //Function to confirm the password
// const passwordConfirm = () => {
//     let password = document.getElementById('new-password');
//     if (password === passwordValidation) {
//         let
//     }
// }

let config = {
    apiKey: 'AIzaSyC1K9LkUQyl4cVah4hXkQ6CINmg9Zd_kZI',
    authDomain: 'warique-88140.firebaseapp.com',
    databaseURL: 'https://warique-88140.firebaseio.com',
    projectId: 'warique-88140',
    storageBucket: 'warique-88140.appspot.com',
    messagingSenderId: '399831724179'
};
firebase.initializeApp(config);
