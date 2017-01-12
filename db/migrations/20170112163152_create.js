
exports.up = function(knex, Promise) {
  return knex.schema.createTable('ingredients', function(t){
    t.string('ingredients')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('ingredients')

};
