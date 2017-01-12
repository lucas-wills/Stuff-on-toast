
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', function(t){
    t.string('recipes')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('recipes')
};
