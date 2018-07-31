window.onload =()=>{
    firebase.auth().onAuthStateChanged((user)=>{
        if(user){
            //si resta,mps logeados 
            loggedOut.style.display = "none";
            loggedIn.style.display ="block";
            console.log("User >"+ JSON.stringify(user));
            alert("hola, ya puedes difrutar de esta red social");
        }else{
            //si no estamos logeados
            loggedOut.style.display ="block";
            loggedIn.style.display ="none";
        }
    });
}
window.register =() => {
    const emailValue = email.value;
    const passwordValue = password.value;
    firebase.auth().createUserWithEmailAndPassword(emailValue,passwordValue)
    .then(() =>{
        alert("Bienvenidx tu registro fue exitoso comencemos 💕");
    })
    .catch((error)=>{
        console.log("error de firebase >" +error.code);
        console.log("errorfirebase,mensaje >" +error.message);
        alert("Usuarix ya esta registrado")
    });
}
window.login=()=>{
    const emailValue = email.value;
    const passwordValue = password.value;
    firebase.auth().signInWithEmailAndPassword(emailValue,passwordValue)
    .then(()=>{
        console.log("usuario con login exitoso")
    })
    .catch((error)=>{
        console.log("error de firebase >"+ error.code);
        console.log("error de firebase ,mensaje >" +error.message);
        alert("Aun no estas registradx ¿que esperas comienza a registrarte y veras todos los beneficios; o quizas tu contraseña no es correcta 😨");    })
}

logout=()=>{
    firebase.auth().signOut()
    .then(()=>{
        alert("Esperamos que vuelvas pronto");

    })
    .cath();
}
loginFacebook=()=>{
    const provider = new firebase.auth.FacebookAuthProvider();
    //provider.addScope("user_birthday");tiene que pedirle permiso a facebook
    provider.setCustomParameters({
        'display': 'popup'

    });
    firebase.auth().signInWithPopup(provider)
    .then(()=>{
       console.log("login con facebook");
    })
    .catch((error)=>{
        console.log("error de firebase >"+ error.code);
        console.log("error de firebase ,mensaje >" +error.message);
    });
}