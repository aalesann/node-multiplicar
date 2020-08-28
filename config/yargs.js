const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}
const argv = require('yargs')
    .command('listar', 'Imprime en la consola la tabla de multiplicar', opts)
    .command('crear', 'Crea un archivo con un límite determinado', opts)
    .help()
    .argv;


module.exports = {
    argv
}