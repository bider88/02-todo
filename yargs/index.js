const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
}

const { argv } = require('yargs')
                .command('listar', 'Imprime en consola la lista de tareas por hacer')
                .command('crear', 'Crea una nueva tarea', { descripcion })
                .command('actualizar', 'Actualiza el estado completado de una tarea', {
                    descripcion,
                    completado: {
                        alias: 'c',
                        default: true,
                        desc: 'Marca como plentado o pendiente la tarea'
                    }
                })
                .command('borrar', 'Borra una tarea por hacer', {
                    descripcion,
                    borrar: {
                        alias: 'b',
                        desc: 'Borra una tarea por hacer'
                    }
                })
                .help()

module.exports = {
    argv
}