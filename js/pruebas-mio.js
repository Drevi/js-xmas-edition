function probarValidarNombre() {
    console.assert(
        validarNombre('') === "El campo nombre debe tener al menos 1 caracter",
        'Validar nombre no validó que el nombre no sea vacío',
    );

    console.assert(
        validarNombre(
            '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
        "El campo nombre debe tener menos de 50 caracteres",
        'Validar nombre no validó que el nombre sea menor a 50 caracteres',
    );

    console.assert(
        validarNombre("1") === "El campo nombre solo puede contener letras", "validarNombre no valido que solo se ingresen letras"
    );

    console.assert(
        validarNombre("Sarasa") === "", "validarNombre no funciono con un nombre valido"
    );
}

probarValidarNombre();


function probarValidarCiudad() {
    console.assert(
        validarCiudad("") === "El campo ciudad no puede estar vacio", "validarCiudad no valido que se haya elegido una ciudad"
    );

    console.assert(
        validarCiudad("Buenos Aires") === "", "Validar ciudad no funciono con un nombre de ciudad valido"
    );
};

probarValidarCiudad();

function probarValidarRegalo() {
    console.assert(
        validarRegalo("") === "El campo descripcion regalo no puede estar vacio", "validarRegalo no valido que el campo esta vacio"
    );

    console.assert(
        validarRegalo("111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111") === "El campo descripcion regalo debe tener menos de 100 caracteres", "validarRegalo no valido que el campo es demasiado largo"
    );

    console.assert(
        validarRegalo(".,,,,") === "El campo descripcion regalo solo puede contener letras y numeros", "validarRegalo no valido que solo contenga letras y numeros"
    );

    console.assert(
        validarRegalo("Sarasa") === "", "validarRegalo no funciono con una descripcion valida"
    );
}

probarValidarRegalo();