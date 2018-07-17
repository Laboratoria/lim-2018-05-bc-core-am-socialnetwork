// Validando contraseña segura
// *********************************
function validatePassword(password) {             
  // Do not show anything when the length of password is zero.
  if (password.length === 0) {
      document.getElementById("msg").innerHTML = "";
      return;
  }
  // Create an array and push all possible values that you want in password
  var matchedCase = new Array();
  matchedCase.push("[$@$!%*#?&]"); // Special Charector
  matchedCase.push("[A-Z]");      // Uppercase Alpabates
  matchedCase.push("[0-9]");      // Numbers
  matchedCase.push("[a-z]");     // Lowercase Alphabates
  // Check the conditions
  let ctr = 0;
  for (var i = 0; i < matchedCase.length; i++) {
      if (new RegExp(matchedCase[i]).test(password)) {
          ctr++;
      }
  }
  // Display it
  let color = "";
  let strength = "";
  switch (ctr) {
      case 0:
      case 1:
      case 2:
          strength = "contraseña muy debil";
          color = "red";
          break;
      case 3:
          strength = "contraseña segura";
          color = "orange";
          break;
      case 4:
          strength = "contraseña muy segura";
          color = "green";
          break;
  }
  document.getElementById("msg").innerHTML = strength;
  document.getElementById("msg").style.color = color;
}


// Validando email correcto al Registrar
// **************************************
document.getElementById('email').addEventListener('input', function() {
  campo = event.target;
  valido = document.getElementById('error-email');
      
  emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  //Se muestra un texto a modo de ejemplo, luego va a ser un icono
  if (emailRegex.test(campo.value)) {
    valido.innerText = "válido";
  } else {
    valido.innerText = "incorrecto";
  }
});


// Validando email correcto al Logearse
// **************************************
document.getElementById('email2').addEventListener('input', function() {
  campo = event.target;
  valido = document.getElementById('error-email2');
      
  emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  //Se muestra un texto a modo de ejemplo, luego va a ser un icono
  if (emailRegex.test(campo.value)) {
    // valido.innerText = "válido"; 
    return;
  } else {
    valido.innerText = "Ingrese un correo váido";
  }
});


