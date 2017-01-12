
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', function(t){
    t.integer('recipeId')
    t.string('recipeName')
    t.string('method')
    t.string('image')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('recipes')
};
