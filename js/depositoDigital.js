const user = [{ email: 'benjaminrojas.tap@gmail.com', monto: 1000000000 }];

const monto = document.querySelector("#monto");
monto.innerHTML = user[0].monto;

function depositar(event) {
    event.preventDefault();
    const deposito = document.querySelector("#depositAmount").value;
    user[0].monto -= parseInt(deposito);  // Resta el monto depositado al monto total
    monto.innerHTML = user[0].monto;
}
