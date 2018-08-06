// Funcion LogOut = Cerrar Sesion
logout = () => {
	firebase.auth().signOut()
		.then(() => {
			window.location.assign("login.html");
		})
		.cath();
}