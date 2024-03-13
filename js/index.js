let users = [];

function signIn() {
  alert("1");
  const reg_email = document.querySelector("#email").value;
  const reg_password = document.querySelector("#password").value;
  console.log(reg_email, reg_password);
  users.push({ email: reg_email, password: reg_password });
  console.log(users);
}

document.getElementById("signIn").addEventListener("click", function(event) {
  event.preventDefault();
  signIn();
});

function login() {
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  let userFound = false;

  if (!email || !password) {
    alert("Por favor, complete todos los campos.");
    return;
  }

  // Verificar si hay usuarios registrados
  if (users.length === 0) {
    alert("No hay usuarios registrados. Por favor, regístrese primero.");
    return;
  }

  for (let i = 0; i < users.length; i++) {
    if (users[i].email === email && users[i].password === password) {
      userFound = true;
      break;
    }
  }

  if (userFound) {
    window.location.href = "menuInicioDigital.html";
  } else {
    alert("Correo o contraseña incorrectos. Por favor, inténtelo de nuevo.");
  }
}

document.getElementById("loginBtn").addEventListener("click", function(event) {
  event.preventDefault();
  login();
});

document.getElementById("contactButtonNavbar").addEventListener("click", function() {
  document.getElementById("formularioContainer").style.display = "block";
});
