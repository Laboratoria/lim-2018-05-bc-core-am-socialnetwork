logout=()=>{
	firebase.auth().signOut()
	.then(()=>{
			alert("Esperamos que vuelvas pronto");
			window.location.assign("login.html");
	})
	.cath();
}