
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('recipes').insert({
          id: 1,
          recipe_name: 'poached egg',
          method: 'Add a little vinegar to water just coming to the boil. Turn off the heat and gently break eggs into the water. Leave for 3 mins. Drain eggs well before putting onto toast',
          image: 'http://www.jamieshomecookingskills.com/core_jo/images/jhcs/main-image-2556.jpg'
        }),
        knex('recipes').insert({
          id: 2,
          recipe_name: 'omelette',
          method: 'Break two eggs into a bowl and whisk well with a little grated cheese. Melt butter in a pan and cook on a low heat, constantly stirring until just cooked.',
          image: 'http://www.bite.co.nz/images/recipes/exam_eggs_bite.jpg'
        }),
        knex('recipes').insert({
          id: 3,
          recipe_name: 'bacon and eggs',
          method: 'Cook bacon. Poach eggs. Add toast',
          image: 'http://www.eggcrackin.com/wp-content/uploads/2015/12/047a9eff.product_classic.png'
        })
      ])
    })
}
