logout=()=>{
	firebase.auth().signOut()
	.then(()=>{
			alert("Esperamos que vuelvas pronto");
			window.location.assign("login.html");
	})
	.cath();
}

//Inicializar nav-parte superior
document.addEventListener('DOMContentLoaded', function() {
	var elems = document.querySelectorAll('.sidenav');
	var instances = M.Sidenav.init(elems, options);
});

