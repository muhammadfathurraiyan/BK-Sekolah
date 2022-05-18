'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SiswaSchema extends Schema {
  up () {
    this.create('siswas', (table) => {
      table.increments()
      table.string('nama', 255)
      table.string('nik', 255)
      table.string('status', 255)
      table.string('tipe', 255)
      table.timestamps()
    })
  }

  down () {
    this.drop('siswas')
  }
}

module.exports = SiswaSchema
