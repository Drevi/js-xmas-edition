// FAMILIA

// Miembros

function agregarFamiliar(n) {
    const $div = document.createElement("div");
    $div.className = "familiar";
    const $label = document.createElement("label");
    $label.textContent = `Edad del familiar ${n + 1}:`;
    const $input = document.createElement("input");
    $input.id = `edad-${n + 1}`;
    $input.className = "edad";
    $input.name = `Edad del familiar ${n + 1}`;
    $input.type = "number";
    $div.appendChild($label);
    $div.appendChild($input);
    const $familia = document.querySelector("#familia");
    $familia.appendChild($div);
}

function borrarFamiliares() {
    const $familia = document.querySelector("#familia");
    while ($familia.hasChildNodes()) {
        $familia.removeChild($familia.childNodes[0]);
    }
}

function agregarFamiliares(n) {
    for (let i = 0; i < n; i++) {
        agregarFamiliar(i);
    }
}

// Edades

function manejarErroresEdad(edades) {
    const $infoEdades = document.querySelector("#info-edades");
    let errores = 0;
    edades.forEach(edad => {
        if (!validarEdades(edad.value)) {
            edad.classList.remove("error");
        } else {
            errores++;
            edad.classList.add("error");
            agregarElemento($infoEdades, "div", `${edad.name} ${validarEdades(edad.value)}`);
        }
    });
    return errores;
}

// Botones y reseteo

const $calcularEdades = document.querySelector("#calcular-edades");

$calcularEdades.onclick = function () {
    const $infoEdades = document.querySelector("#info-edades");
    const edades = document.querySelectorAll(".edad");
    while ($infoEdades.hasChildNodes()) {
        $infoEdades.removeChild($infoEdades.firstChild);
    }
    if (manejarErroresEdad(edades) === 0) {
        agregarElemento($infoEdades, "div", `La menor edad es ${(menor(edades))}`);
        agregarElemento($infoEdades, "div", `La mayor edad es ${mayor(edades)}`);
        agregarElemento($infoEdades, "div", `La edad promedio es ${redondear(promedio(edades))}`);
    }
    event.preventDefault();

}

const $resetear = document.querySelector("#resetear");

$resetear.onclick = function () {
    resetear();
}

function resetear() {
    document.getElementById("familiares").value = "";
    borrarFamiliares();
    ocultarBotones();
    return false;
}

function agregarElemento(parent, tipo, texto) {
    const $elemento = document.createElement(tipo);
    if (texto) {
        $elemento.innerText = texto;
    }
    parent.appendChild($elemento);
}

function mostrarBotones() {
    const $botones = document.querySelectorAll(".ocultar");
    for (let el of $botones) {
        el.className = "mostrar";
    }
}
function ocultarBotones() {
    const $botones = document.querySelectorAll(".mostrar");
    for (let el of $botones) {
        el.className = "ocultar";
    }
}

document.querySelector("#siguiente").onclick = function () {
    const $familia = document.querySelector("#familia");
    const $familiares = document.querySelector("#familiares");
    const cantidadFamiliares = Number($familiares.value);
    if (!validarFamiliares(cantidadFamiliares)) {
        borrarFamiliares();
        agregarFamiliares(cantidadFamiliares);
        mostrarBotones();
        $familiares.classList.remove("error");
    } else {
        const $div = document.createElement("div");
        $div.innerText = validarFamiliares(cantidadFamiliares);
        resetear();
        $familia.appendChild($div);
        $familiares.classList.add("error");

    }
    event.preventDefault();
}



// SUELDOS

// Botones

const $agregarSueldo = document.querySelector("#agregar-sueldo");

$agregarSueldo.onclick = function () {
    agregarSueldo();
    event.preventDefault();
}


const $quitarSueldo = document.querySelector("#quitar-sueldo");

$quitarSueldo.onclick = function () {
    quitarSueldo();
    event.preventDefault();
}


const $calcularSueldos = document.querySelector("#calcular-sueldos");

$calcularSueldos.onclick = function () {
    const $infoSueldos = document.querySelector("#info-sueldos");
    const sueldos = document.querySelectorAll(".sueldo");
    borrarInfoSueldos();
    if (manejarErroresSueldos(sueldos) === 0) {
        agregarElemento($infoSueldos, "div", `El menor sueldo anual es $${menor(sueldos)}`);
        agregarElemento($infoSueldos, "div", `El mayor sueldo anual es $${mayor(sueldos)}`);
        agregarElemento($infoSueldos, "div", `El sueldo anual promedio es $${redondear(promedio(sueldos))}`);
        agregarElemento($infoSueldos, "div", `El sueldo mensual promedio es $${redondear(promedio(sueldos) / 12)}`);
    }
    event.preventDefault();
}


// Funciones 


function agregarSueldo() {
    const $sueldos = document.querySelector("#sueldos");
    let contadorSueldos = ($sueldos.childNodes.length - 1) / 3;
    const label = document.createElement("label");
    const sueldoFamiliar = document.createTextNode(`Sueldo anual del familiar ${contadorSueldos + 1}:`);
    const input = document.createElement("input");
    input.type = "number";
    input.classList.add("sueldo");
    input.id = `sueldo-${contadorSueldos + 1}`;
    input.name = `Sueldo anual del familiar ${contadorSueldos + 1}`;
    const div = document.createElement("div");
    label.appendChild(sueldoFamiliar);
    $sueldos.appendChild(label);
    $sueldos.appendChild(input);
    $sueldos.appendChild(div);
    event.preventDefault();
}

function quitarSueldo() {
    const $sueldos = document.querySelector("#sueldos");
    if ($sueldos.childNodes.length > 1) {
        for (let i = 0; i < 3; i++) {
            $sueldos.removeChild($sueldos.lastChild);
        }
    }
}

function borrarInfoSueldos() {
    const $infoSueldos = document.querySelector("#info-sueldos");
    while ($infoSueldos.hasChildNodes()) {
        $infoSueldos.removeChild($infoSueldos.childNodes[0]);
    }
}

// Errores

function manejarErroresSueldos(sueldos) {
    const $infoSueldos = document.querySelector("#info-sueldos");
    let errores = 0;
    sueldos.forEach(sueldo => {
        if (!validarSueldo(sueldo.value)) {
            sueldo.classList.remove("error");
        } else {
            errores++;
            sueldo.classList.add("error");
            agregarElemento($infoSueldos, "div", `${sueldo.name} ${validarSueldo(sueldo.value)}`);

        }

    });
    return errores;
}

// CALCULOS 

function menor(lista) {
    let menor = Number(lista[0].value);
    lista.forEach(element => {
        if (Number(element.value < menor)) {
            menor = Number(element.value);
        }
    });
    return menor;
}

function mayor(lista) {
    let mayor = Number(lista[0].value);
    lista.forEach(element => {
        if (Number(element.value) > mayor) {
            mayor = Number(element.value);
        }
    });
    return mayor;
}

function promedio(lista) {
    let promedio = 0;
    lista.forEach(element => {
        promedio += Number(element.value);
    });
    return promedio / lista.length;
}

function redondear(num) {
    return +(Math.round(num + "e+2") + "e-2");
}

// VALIDACIONES

function validarFamiliares(input) {
    if (input === "") {
        return "Cantidad de familiares no puede estar vacio";
    } else if (input < 1) {
        return "Cantidad de familiares debe ser mayor o igual a 1";
    } else if (input > 10) {
        return "Cantidad de familiares debe ser menor o igual a 10";
    } else if (!/^[0-9]*$/.test(input)) {
        return "Cantidad de familiares debe ser un numero entero";
    } else {
        return false;
    }
}

function validarEdades(input) {
    if (input === "") {
        return "no puede estar vacio";
    } else if (!/^[0-9]*$/.test(input)) {
        return "debe ser un numero entero";
    } else if (input < 1) {
        return "debe ser mayor o igual a 1";
    } else if (input > 120) {
        return "debe ser menor o igual a 120";
    } else {
        return false;
    }
}

function validarSueldo(input) {
    if (input === "") {
        return "no puede estar vacio";
    } else if (input < 0) {
        return "no puede ser negativo";
    } else if (input.length > 10) {
        return "debe tener menos de 10 cifras";
    } else {
        return false;
    }
}
