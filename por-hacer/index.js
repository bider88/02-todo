const fs = require('fs')
const colors = require('colors')

let listadoPorHacer = []
const guardarDB = () => {
    const data = JSON.stringify(listadoPorHacer)
    fs.writeFile('db/data.json', data, err => {
        if (err) throw new Error('No se pudo grabar', err)
    })
}

const crear = descripcion => {
    let porHacer = {
        descripcion,
        completado: false
    }

    listadoPorHacer.push(porHacer)

    guardarDB()

    return porHacer
}

module.exports = {
    crear
}