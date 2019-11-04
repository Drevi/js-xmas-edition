function validarNombre(nombre) {
    if (nombre.length === 0) {
        return "El campo nombre debe tener al menos 1 caracter";
    }
    if (nombre.length >= 50) {
        return "El campo nombre debe tener menos de 50 caracteres";
    }
    if (!/^[a-z]+$/i.test(nombre)) {
        return "El campo nombre solo puede contener letras";
    } else {
        return "";
    }
}

function validarCiudad(ciudad) {
    if (ciudad === "") {
        return "El campo ciudad no puede estar vacio";
    }
    return "";
}

function validarRegalo(descripcionRegalo) {
    if (descripcionRegalo.length >= 100) {
        return "El campo descripcion regalo debe tener menos de 100 caracteres";
    }
    if (descripcionRegalo.length === 0) {
        return "El campo descripcion regalo no puede estar vacio";
    }
    if (!/^[a-z0-9]+$/i.test(descripcionRegalo)) {
        return "El campo descripcion regalo solo puede contener letras y numeros";
    }
    return "";
}

function validarFormulario(event) {
    const errorNombre = validarNombre(formulario.nombre.value);
    const errorCiudad = validarCiudad(formulario.ciudad.value);
    const errorRegalo = validarRegalo(formulario["descripcion-regalo"].value);

    const errores = {
        nombre: errorNombre,
        ciudad: errorCiudad,
        "descripcion-regalo": errorRegalo
    };
    const esExito = manejarErrores(errores) === 0;

    if (esExito) {
        $form.className = "oculto";
        document.querySelector("#exito").className = "";
        setTimeout(() => {
            location.href = "wishlist.html";
        }, 5000);
    }
    event.preventDefault();
}

function manejarErrores(errores) {
    const keys = Object.keys(errores);
    const $errores = document.querySelector("#errores");
    let contadorErrores = 0;

    while ($errores.hasChildNodes()) {
        $errores.removeChild($errores.firstChild);
    }

    keys.forEach(function (key) {
        const error = errores[key];
        if (error) {
            contadorErrores++;
            $form[key].className = "error";
            const $error = document.createElement("li")
            $error.id = `error-${key}`
            $error.innerText = error
            $errores.appendChild($error)
        } else {
            $form[key].className = "";
        }
    });
    return contadorErrores;
}

const $form = document.querySelector("#carta-a-santa");
$form.onsubmit = validarFormulario;