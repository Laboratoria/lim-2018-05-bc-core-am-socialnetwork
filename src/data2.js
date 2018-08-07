// Funcion LogOut = Cerrar Sesion
const saveComments = () => {
  const firestore = firebase.firestore();
  const settings = {timestampsInSnapshots: true};
  firestore.settings(settings);
  const db = firebase.firestore();//con esta funcion hace que se cree una coleccion en firestore
  db.collection("comentarios").add({
		commet:as,
		uid: user.iud,
    })
    .then((docRef)=>{
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((error)=> {
      console.error("Error adding document: ", error);
    });
}

logout = () => {
	firebase.auth().signOut()
		.then(() => {
			window.location.assign("login.html");
		})
		.cath();
}
