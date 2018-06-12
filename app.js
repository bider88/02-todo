const colors = require('colors')

const { argv } = require('./yargs')

const { crear, listar, actualizar, borrar } = require('./por-hacer')

let comando = argv._[0]

const descripcion = argv.descripcion || argv.d
const completado = argv.completado || argv.c

switch ( comando ) {
    case 'crear': 
        const tarea = crear(descripcion)
        console.log(tarea)
    break
    case 'listar': 
        let listado = listar();

        console.log('==============To Do================'.green)
        for (let tarea of listado) {
            console.log(tarea.descripcion)
            console.log('Estado:', tarea.completado)
            console.log('-----------------------------------')
        }
        console.log('==================================='.green)

    break
    case 'actualizar': 
        const actualizado = actualizar(descripcion, completado)
        console.log(actualizado)
    break
    case 'borrar':
        const borrado = borrar(descripcion)
        console.log(borrado);
    break
    default:
     console.log(`Comando ${colors.red(comando)} no es reconocido`)
}