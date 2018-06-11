const colors = require('colors')

const { argv } = require('./yargs')

const comando = argv._[0]

switch ( comando ) {
    case 'crear': 
        console.log('Crear una tarea por hacer');
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