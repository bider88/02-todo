const fs = require('fs')
const colors = require('colors')

let listadoPorHacer = []
const guardarDB = () => {
    const data = JSON.stringify(listadoPorHacer)
    fs.writeFile('db/data.json', data, err => {
        if (err) throw new Error('No se pudo grabar', err)
    })
}

const cargarDB = () => {

    try {
        listadoPorHacer = require('../db/data.json')
    } catch (err) {
        listadoPorHacer = []
    }
}

const crear = descripcion => {

    cargarDB()

    let porHacer = {
        descripcion,
        completado: false
    }

    listadoPorHacer.push(porHacer)

    guardarDB()

    return porHacer
}

const listar = () => {
    cargarDB()

    return listadoPorHacer
}

const actualizar = (descripcion, completado = true) => {
    cargarDB()

    const index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion )

    if (index >= 0) {
        listadoPorHacer[index].completado = completado
        guardarDB()
        return true
    }
     else { return false }
}

const borrar = (descripcion) => {
    cargarDB()

    listadoPorHacerTemp = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion)

    if (listadoPorHacerTemp !== listadoPorHacer) {
        listadoPorHacer = listadoPorHacerTemp
        guardarDB()
        return true
    }
    else { return false }

}

module.exports = {
    crear,
    listar,
    actualizar,
    borrar
}