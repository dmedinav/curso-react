const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 1234341,
        lat: 14.21432,
        lng: 34.931002
    }
};

//console.table(persona);
console.log(persona);
//Clonar Objeto.
//const persona2 = persona;
const persona2 = {...persona };
persona2.nombre = 'Peter';

console.log(persona);

console.log(persona2);