const colors = require('colors')

const { argv } = require('./yargs')

const { crear } = require('./por-hacer')

let comando = argv._[0]

const descripcion = argv.descripcion || argv.d

switch ( comando ) {
    case 'crear': 
        const tarea = crear(descripcion)
        console.log(tarea)
    break
    case 'listar': 
        console.log('Lista las tareas por hacer');
    break
    case 'actualizar': 
        console.log('Actualiza una tarea por hacer');
    break
    default:
     console.log(`Comando ${colors.red(comando)} no es reconocido`)
}