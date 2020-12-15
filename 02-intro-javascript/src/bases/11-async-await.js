// const getImagenPromesa = () => new Promise((resolve, reject) => resolve('https://google.cl'));
// getImagenPromesa().then(console.log);

const getImagen = async() => {

    try {
        const apiKey = '7KyNGwEElpTEE7i8hhmtSC87qjLIv9Am';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json();
        console.log(data);
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    } catch (error) {
        //manejo del error
        console.error(error);
    }

}

getImagen();



// const apiKey = '7KyNGwEElpTEE7i8hhmtSC87qjLIv9Am';

// const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

// peticion
//     .then(resp => resp.json())
//     .then(({ data }) => {
//         const { url } = data.images.original;
//         console.log(url);
//         const img = document.createElement('img');
//         img.src = url;
//         document.body.append(img);

//     })
//     .catch(console.warn);