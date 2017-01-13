
exports.up = function (knex, Promise) {
  return knex.schema.createTable('ing_rec_join', function (t) {
    t.increments('id')
    t.integer('recipe_id')
    t.integer('ingredient_id')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('ing_rec_join')
}
