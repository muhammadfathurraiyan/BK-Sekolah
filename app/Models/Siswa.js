'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Siswa extends Model {
    static get nama () {return 'nama'}
    static get nik () {return 'nik'}
    static get status () {return 'status'}
    static get tipe () {return 'tipe'}
}

module.exports = Siswa
