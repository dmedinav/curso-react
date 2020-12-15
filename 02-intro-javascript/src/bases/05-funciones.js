const saludar = function(nombre) {
    return `Hola, ${nombre}`;
}

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;

const saludar4 = () => 'Hola Mundo';

console.log(saludar);

console.log(saludar2);

console.log(saludar3('Goku'));

console.log(saludar4());


function usuarioActivo(nombre) {
    return {
        uid: '1234ABC',
        nombre: nombre
    };
}

const usuarioActivo2 = (nombre) => ({ uid: '1234qwerty', nombre: nombre });

console.log(usuarioActivo('Dante'));

console.log(usuarioActivo2('Paula'));