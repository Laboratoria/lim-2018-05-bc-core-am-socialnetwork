window.onload = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      //Si está registrado,entonces iniciará sesión
      loginUser.style.display = "none";
      registerUser.style.display = "none";
      alert("Hola, ya puedes difrutar de esta red social");
    } else {
      //si no estamos logeados
      loginUser.style.display = "block";
      registerUser.style.display = "none";
    }
  });
  window.creatCount = (user) => {
    loginUser.style.display = "none";
    registerUser.style.display = "block";
  }
}
window.back = () => {
  loginUser.style.display = "block";
  registerUser.style.display = "none";
}