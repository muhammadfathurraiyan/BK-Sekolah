'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Tipe extends Model {
    static get Tipe () {return 'tipe'}
}

module.exports = Tipe
