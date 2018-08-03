const logOutButton = document.getElementById('btnLogout');
const userName = document.getElementById('user-name');
let saveButton = document.getElementById('saveButton');
saveButton = addEventListener('click', saveData());

firebase.initializeApp({
  apiKey: "AIzaSyC1K9LkUQyl4cVah4hXkQ6CINmg9Zd_kZI",
  authDomain: "warique-88140.firebaseapp.com",
  projectId: "warique-88140",
});

window.onload = () => {
  firebase.auth().onAuthStateChanged((user) => {
      if (user) {
          login.classList.remove('hiden');
          logout.classList.add('hiden');
          // console.log('inicio logueado')
      } else {
          login.classList.add('hiden');
          logout.classList.remove('hiden');
          // console.log('no está logueado');
      }
  });
}

// Initialize Cloud Firestore through Firebase
const cloudFire = firebase.firestore();

//agregar documentos
const saveData = () => {
  let name = document.getElementById('nombre').value
  let lastName = document.getElementById('apellido').value
  let born = document.getElementById('nacimiento').value
  cloudFire.collection("users").add({
    first: name,
    last: lastName,
    born: born
  })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
      document.getElementById('nombre').value = '';
      document.getElementById('apellido').value = '';
      document.getElementById('nacimiento').value = '';
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
};

//Leer documentos
let table = document.getElementById('table');
cloudFire.collection("users").onSnapshot((querySnapshot) => {
  table.innerHTML = '';
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data().first}`);
    table.innerHTML += `
        <tr>
        <th scope="row">${doc.id}</th>
        <td>${doc.data().first}</td>
        <td>${doc.data().last}</td>
        <td>${doc.data().born}</td>
        <td><button class='btn btn-danger' onclick='removePost("${doc.id}")'>Eliminar</button></td>
        <td><button class='btn btn-warning'>Editar</></td>
        </tr>
        `

  });
});

//borrar 
const removePost = (id) => {
  cloudFire.collection("users").doc(id).delete()
  .then(() => {
    console.log("Document successfully deleted!");
  })
  .catch((error) => {
    console.error("Error removing document: ", error);
  });
};

//LogOut button 
logOutButton.addEventListener('click', () => {
  firebase.auth().signOut().then(() => {
      console.log('Cierro sesion');
      login.classList.remove('hiden');
      logout.classList.add('hiden');
  }).catch((error) => {
      console.log('error al cerrar sesión');
  });
})