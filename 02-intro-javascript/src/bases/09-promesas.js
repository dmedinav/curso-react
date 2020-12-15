import { getHeroeById } from "./bases/08-imp-export";

/*
const promesa = new Promise((resolve, reject) => {

    setTimeout(() => {
        //console.log('2 segundo despues');
        const heroe = getHeroeById(2);
        //console.log(heroe);
        resolve(heroe);
        //reject('No se pudo encontrar el heroe');
    }, 2000);

});

promesa.then((heroe) => {
        console.log('Despues de la promesa');
        console.log(heroe);
    })
    .catch(err => console.log(err));
*/
const getHeroeByIdAsync = (id) => {
    const promesa = new Promise((resolve, reject) => {

        setTimeout(() => {
            const heroe = getHeroeById(id);
            if (heroe === undefined) reject('No se pudo encontrar el heroe');
            resolve(heroe);
        }, 2000);

    });
    return promesa;
}
getHeroeByIdAsync(1)
    //.then(heroe => console.log(heroe))
    //.catch(err => console.warn(err));
    .then(console.log)
    .catch(console.warn);