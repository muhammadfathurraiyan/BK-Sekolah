'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TipeSchema extends Schema {
  up () {
    this.create('tipes', (table) => {
      table.increments()
      table.string('tipe', 255)
      table.timestamps()
    })
  }

  down () {
    this.drop('tipes')
  }
}

module.exports = TipeSchema
