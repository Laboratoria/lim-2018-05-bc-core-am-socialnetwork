window.onload = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      //Si está registrado,entonces iniciará sesión
      const loggedIn = document.getElementById('loggedIn');
      window.location.assign('home.html');
      loginUser.style.display = "none";
      registerUser.style.display ="none";
    } else {
      //si no estamos logeados
      loginUser.style.display = "block";
      registerUser.style.display ="none";
      //loggedIn.style.display="none";
    }
  });
  window.createAccount = (user) => {
    loginUser.style.display = "none";
    registerUser.style.display = "block";
  }
}
<<<<<<< HEAD
window.register = () => {
	let nameRegister = nombreR.value;
	const emailRegister = emailR.value;
	const passwordRegister = passwordR.value;
	if( nameRegister && emailRegister && passwordRegister !== ""){
		const filtro = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i ;
		if(!filtro.test(emailRegister)){
			alert ("Ingrese un e-mail y contraseña válidx")
		}
		else{
			firebase.auth().createUserWithEmailAndPassword(emailRegister,passwordRegister)
    .then(() =>{
        alert("Bienvenidx tu registro fue exitoso comencemos 💕");
    })
    .catch((error)=>{
        console.log("error de firebase >" +error.code);
        console.log("errorfirebase,mensaje >" +error.message);
        //alert("Usuarix ya esta registrado")
    });
		}
	}
	else{
		alert("Ingrese todos los campos con información válida")
	}
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
=======
window.back = () => {
  loginUser.style.display = "block";
  registerUser.style.display = "none";
}
>>>>>>> master
