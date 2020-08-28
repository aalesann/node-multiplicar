const fs = require('fs');
const colors = require('colors/safe');

let data = '';
let multiplicar = (base, limite) => {
    for (let i = 0; i <= limite; i++) {
        data += (`${base} * ${i} = ${i * base}\n`);
    }
    return data;
}

let listarTabla = (base, limite) => {
    console.log("=======================".green);
    console.log(`=== Tabla del ${base} ===`.green);
    console.log("=======================".green);
    console.log(multiplicar(base, limite));
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido (${base}) no es un numero`.red);
            return;
        }

        const data = multiplicar(base, limite);

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else
                resolve(`tabla-${base}.txt`)
        });

    });

}

module.exports = {
    crearArchivo,
    listarTabla
}