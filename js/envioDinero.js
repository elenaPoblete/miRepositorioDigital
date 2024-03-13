const contactos = [];

function agregarContacto() {
    const nombre = document.querySelector("#nombre").value;
    const cuenta = document.querySelector("#cuenta").value;
    const alias = document.querySelector("#alias").value;
    const banco = document.querySelector("#banco").value;

    // Agregar el nuevo contacto al array de contactos
    contactos.push({ nombre, cuenta, alias, banco });
    
    // Actualizar la lista desplegable
    actualizarListaDesplegable();

    console.log(contactos);
}

function actualizarListaDesplegable() {
    const selectContacto = document.querySelector("#contactoSelect");
    selectContacto.innerHTML = "";

    contactos.forEach(contacto => {
        const option = document.createElement("option");
        option.text = contacto.nombre;
        option.value = JSON.stringify(contacto); // Almacenar el contacto completo como valor del option
        selectContacto.add(option);
    });
}

