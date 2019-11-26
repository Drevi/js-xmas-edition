function probarValidarFamiliares() {
    console.assert(
        validarFamiliares("") === "Cantidad de familiares no puede estar vacio", "validarFamiliares no valido que el input no este vacio"
    );

    console.assert(
        validarFamiliares("0") === "Cantidad de familiares debe ser mayor o igual a 1", "validarFamiliares no valido que el numero sea mayor a 0"
    );

    console.assert(
        validarFamiliares("11") === "Cantidad de familiares debe ser menor o igual a 10", "validarFamiliares no valido que el numero sea menor o igual a 10"
    );

    console.assert(
        validarFamiliares("1.1") === "Cantidad de familiares debe ser un numero entero", "validarFamiliares no valido que el numero sea entero"
    );
}

probarValidarFamiliares();


function probarValidarEdades() {
    console.assert(
        validarEdades("") === "no puede estar vacio", "validarEdades no valido que el input no este vacio"
    );

    console.assert(
        validarEdades("121") === "debe ser menor o igual a 120", "validarEdades no valido que el numero sea menor o igual a 120"
    );

    console.assert(
        validarEdades("0") === "debe ser mayor o igual a 1", "validarEdades no valido que el numero sea mayor o igual a 1"
    );

    console.assert(
        validarEdades("1.2") === "debe ser un numero entero", "validarEdades no valido que el numero sea entero"
    );
}

probarValidarEdades();


function probarValidarSueldo() {
    console.assert(
        validarSueldo("1111111111111") === "debe tener menos de 10 cifras", "validarSueldo no valido que el numero tenga 10 cifras o menos"
    );

    console.assert(
        validarSueldo("") === "no puede estar vacio", "validarSueldo no valido que el input no este vacio"
    );

    console.assert(
        validarSueldo("-1") === "no puede ser negativo", "validarSueldo no valido que el numero no sea negativo"
    );
}


probarValidarSueldo();
