
exports.up = function (knex, Promise) {
  return knex.schema.createTable('recipes', function (t) {
    t.increments('id')
    t.string('recipe_name')
    t.string('method')
    t.string('image')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('recipes')
}
