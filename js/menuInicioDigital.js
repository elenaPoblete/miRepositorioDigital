// Luego de que el usuario haya iniciado sesión con éxito
const usuario = {
  email: "benjaminrojas.tap@gmail.com",
  saldo: 1000000000000,
};

// Guarda la información del usuario en el almacenamiento local
localStorage.setItem('usuario', JSON.stringify(usuario));

// Recupera la información del usuario del almacenamiento local
const usuarioGuardado = localStorage.getItem('usuario');

if (usuarioGuardado) {
  const usuario = JSON.parse(usuarioGuardado);
  const emailElemento = document.querySelector("#email");
  const saldoElemento = document.querySelector("#saldo");
  
  // Actualiza el contenido del menú con la información del usuario
  emailElemento.textContent = usuario.email;
  saldoElemento.textContent = usuario.saldo;
}


function menuItem() {
  const email = document.querySelector("#email");
  const saldo = document.querySelector("#saldo");
  email.innerHTML = users[0].email;
  saldo.innerHTML = users[0].saldo;
}

const labels = ['2018', '2019', '2020', '2021', '2022', '2023', '2024'];
const data = {
  labels: labels,
  datasets: [{
    label: 'D!P! Rendimientos',
    data: [66, 89, 41, 51, 64, 75, 84],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  }]
};

const config = {
  type: 'line',
  data: data,
};

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, config);

