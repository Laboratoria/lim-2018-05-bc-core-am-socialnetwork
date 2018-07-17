const emailButton = document.getElementById('emailButton');
const faceButton = document.getElementById('faceButton');
const googleButton = document.getElementById('googleButton');
const registerButton = document.getElementById('register');
const loginButton = document.getElementById('loginButton');
const formButton = document.getElementById('formButton');
const formRegister = document.getElementById('formRegister');
const formSesion = document.getElementById('formSesion');
const errorEmail = document.getElementById('error-email');
const errorEmail2 =  document.getElementById('error-email2');
const errorPassword = document.getElementById('error-password');
const errorPassword2 = document.getElementById('error-password2');
const optionEmail = document.getElementById('optionEmail');
const rButton = document.getElementById('optionR');
const sButton = document.getElementById('optionS');
const outButton = document.getElementById('signOut');
const formTimeline = document.getElementById('formTimeline');


rButton.addEventListener('click', () => {
  formRegister.classList.replace('hidden','show');
  formButton.classList.replace('show','hidden');
})

registerButton.addEventListener('click', () => {
  let nameUser = document.getElementById('nameUser').value;
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  let confirPassword = document.getElementById('confirPassword').value;
  
  if (email == '') {
    errorEmail.textContent = "Ingrese Correo";
    alert('Debe ingresar su correo');

  }else if (nameUser == ''){
    errorEmail.textContent = "Ingrese Correo";
    alert('Debe ingresar su nombre');

  }else if (password == ''){
    errorPassword.textContent = "IngresePassword";
    alert('Debe ingresar su contraseña');

  }else if (confirPassword == ''){
    errorPassword.textContent = "Por favor confirmar Password";
    alert('Debe confirmar su contraseña');

  }else if (password != confirPassword){
    alert('Las contraseñas no coinciden');  

  } else if (errorEmail == 'incorrecto'){
    alert('por favor ingrese un email válido'); 
    
  } else {
    let newsUser = registerNew(email, password);
    alert('Tu usuario ha sido registrado! \nConfirma el mensaje de verificación en tu correo y seguidamente puedes Iniciar Sesión')
    console.log(email);
    console.log(password);
    formRegister.style.display = 'none';
    formButton.style.display = 'block';  
  }  
});

loginButton.addEventListener('click', () => {
  let email2 = document.getElementById('email2').value;
  let password2 = document.getElementById('password2').value;
  let userLogin = login(email2, password2);

  if (email2==''){
    errorEmail2.textContent = "Ingrese su Correo";
    // alert('Ingrese su email');

  }else if (password2 == ''){
    errorPassword2.textContent = "Ingrese su Password";
  //  alert('Ingrese su contraseña');

  }else if (email2 != '' && password2 != '') {
    validation();
  }   

});

googleButton.addEventListener('click', (e) => {
  if (e.target) {
    loginGoogle()
  }
});

faceButton.addEventListener('click', (e) => {
  if (e.target) {
    loginFacebook()
  }
});

outButton.addEventListener('click', () => {
  signOut();
  window.location.href = 'index.html';
  formTimeline.style.display = 'none';
  formRegister.style.display = 'none';
  formButton.style.display = 'block'; 
});
