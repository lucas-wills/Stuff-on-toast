const Knex = require('knex')
const config = require('../knexfile')[process.env.NODE_ENV || 'development']

module.exports = Knex(config)

function listAllRecipes () {
  return knex('recipes')
  .select('*')
}
