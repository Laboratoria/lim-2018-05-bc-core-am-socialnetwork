window.onload =()=>{
    firebase.auth().onAuthStateChanged((user)=>{
        if(user){
            //Si está registrado,entonces iniciará sesión
            const loggedIn = document.getElementById('loggedIn');
            window.location.assign('home.html');
            loginUser.style.display = "none";
            registerUser.style.display ="none";
            alert("Hola, ya puedes difrutar de esta red social");
        }else{
            //si no estamos logeados
            loginUser.style.display = "block";
            registerUser.style.display ="none";
            //loggedIn.style.display="none";
        }
    });
  window.createAccount=(user) => { // 
        loginUser.style.display = "none";
        registerUser.style.display ="block";
        // loggedIn.style.display="none";
    }
  }

  window.back = () => {
    loginUser.style.display = "block";
    registerUser.style.display ="none";
    loggedIn.style.display="none";
}

  window.login = () => {
    const emailValue = document.getElementById('emailLogin').value;
    const passwordValue = document.getElementById('passwordLogin').value;
    const cb = (error, result) => {
        if(error) {
            console.log("error de firebase >" +error.code);
            console.log("errorfirebase,mensaje >" +error.message);
            //alert("Usuarix ya esta registrado")
        } else {
            alert("Bienvenidx tu registro fue exitoso comencemos 💕");
            console.log(result)
        }
    }
    app.login(emailValue, passwordValue, cb)
  }
  window.register=()=>{
    const nameValueR= document.getElementById('nameRegister').value;
    const emailValueR =document.getElementById('emailRegister').value;
    const passwordValueR =document.getElementById('passwordRegister').value;
    cb= (error,result) => {
        if(error){
            console.log("error de firebase >"+ error.code);
            console.log("error de firebase ,mensaje >" +error.message);
            alert("Aun no estas registradx ¿que esperas comienza a registrarte y veras todos los beneficios; o quizas tu contraseña no es correcta 😨");
        } else{
            console.log("usuario con login exitoso");
            window.location.assign("home.html");
        }
    }
    app.register(nameValueR, emailValueR, passwordValueR, cb)
  } 
  logout=()=>{
    firebase.auth().signOut()
    .then(()=>{
        alert("Esperamos que vuelvas pronto");
        window.location.assign("login.html");
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