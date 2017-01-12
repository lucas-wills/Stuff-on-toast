
exports.up = function(knex, Promise) {
  return knex.schema.createTable('ingredients', function(t){
    t.increments('id');
    t.string('ingredient_name')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('ingredients')

};
