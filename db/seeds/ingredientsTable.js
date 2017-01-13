
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('ingredients').insert({id: 1, ingredient_name: 'eggs'}),
        knex('ingredients').insert({id: 2, ingredient_name: 'bacon'}),
        knex('ingredients').insert({id: 3, ingredient_name: 'cheese'})
      ])
    })
}
