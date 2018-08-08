const saveComments = () => {
  console.log(boxPost.value);
  const firestore = firebase.firestore();
  const settings = {timestampsInSnapshots: true};
  firestore.settings(settings);
  const db = firebase.firestore();
  db.collection("comentarios").add({//con esta funcion hace que se cree una coleccion en firestore
    
    
    })
    .then((docRef)=>{
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((error)=> {
      console.error("Error adding document: ", error);
    });
}

const pintar =() =>{
  if (boxPost.value !== ""){
    saveComments();
  }
  else{
    alert("Ingrese texto en espacio")
  }

}
// saveComments();

logout = () => {
	firebase.auth().signOut()
		.then(() => {
			window.location.assign("login.html");
		})
		.cath();
}
