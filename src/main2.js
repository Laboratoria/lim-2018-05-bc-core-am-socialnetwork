//Inicializar nav-parte superior
/* document.addEventListener('DOMContentLoaded', function() {
	var elems = document.querySelectorAll('.sidenav');
	var instances = M.Sidenav.init(elems, options);
});
 */
const idUserInLine = localStorage.getItem('ID');
const emailUserInLine = localStorage.getItem('emaill')
console.log(idUserInLine);
console.log(emailUserInLine);

let userNow = {
	id: idUserInLine,
	email: emailUserInLine
}
console.log(userNow);


















/* Ejemplo de likes, se borrará , solo es prueba 
const clicks1 = 0;
clicks = () => { 
		clicks1 += 1;
		document.getElementById("clicks").innerHTML = clicks;
}; */
