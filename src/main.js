window.register = () => {
	const emailRegister = emailRegister.value;
	const nameRegister = nameRegister.value;
	const userRegister = userRegister;
	const passwordRegister = passwordRegister.value;
	if( nameRegister && emailRegister && userRegister && passwordRegister !== ""){
		const filtro = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i ;
		if(!filtro.test(emailRegister) && passwordRegister.length < 7){
			alert ("Ingrese un e-mail y contraseña válidx")
		}
		else{
			firebase.auth().createUserWithEmailAndPassword(emailValue,passwordValue)
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
window.login = () => {
	const emailValue = email.value;
	const passwordValue = password.value;
	if (emailValue && passwordValue !== ""){
		const filtro = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i ;
		if(!filtro.test(emailValue)){
			alert("Por favor digite un e-mail valido")
		}
		else{
			firebase.auth().signInWithEmailAndPassword(emailValue, passwordValue)
		.then(() => {
			console.log("usuario con login exitoso")
		})
		.catch((error) => {
			console.log("error de firebase >" + error.code);
			console.log("error de firebase ,mensaje >" + error.message);
			alert("Aun no estas registradx ¿que esperas comienza a registrarte y veras todos los beneficios; o quizas tu contraseña no es correcta 😨");
		})
		}
	}
	else if(emailValue || passwordValue == ""){
		alert("Ingrese e-mail y contraseña válida")
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