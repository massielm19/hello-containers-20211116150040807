const express = require('express');
const bodyParser = require('body-parser');

const fs = require('fs');

const app = express();
app.use(bodyParser.json());

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})

app.get('/', (req, res) => {
    let archivos;
    let archivosList = "";
    if (process.env.MONTURA) {
        archivos = fs.readdirSync(process.env.MONTURA);
        for (const archivo of archivos) {
            archivosList = archivosList + `<li>${archivo}</li>`
        }
    }

    res.send(`
    <h1>Hola ${process.env.NOMBRE ? process.env.NOMBRE : 'Anónimo'}! Bienvenido a tu aplicación!</h1>
    <p>${process.env.MONTURA ? `En la carpeta ${process.env.MONTURA} tienes los siguientes archivos:` : `No tienes una montura especificada, asigna la variable de entorno <strong>MONTURA</strong> para ver tus archivos disponibles`}</p>
    ${process.env.MONTURA ? `<ul>${archivosList}</ul>` : ``}
    `)
})

app.get('/scale', (req, res) => {
    const obj = {
        uno: "dos",
        tres: "cuatro"
    }
    let objs = []

    for (var i = 0; i <= 1000000; i++) {
        objs[i] = obj;
    }

    res.status(200).send({ message: "Done!" })
})
