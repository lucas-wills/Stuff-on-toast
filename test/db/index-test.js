const test = require('ava')

// instantiate test database and routes
const testKnex = require('knex')(require('../../knexfile').test)
const db = require('../../db')(testKnex)
// const db = require('../../db') //Don't forget to add the correct path here

//migrate the latest cats database table
test.beforeEach(() => {
  console.log('migrating....')
  return testKnex.migrate.latest()
    .then(() => {
      console.log('seeds....')
      return testKnex.seed.run()
    })
})

//rollback to the original state of the database
test.afterEach.always(() => {
  return testKnex.migrate.rollback()
})

test('findRecipesByIngredients | returns all recipes from db which include no more than the submitted ingredients', (t) => {
  t.plan(1)

  //Arrange
  const ingredients = [{ingredientId: 1, ingredients: 'eggs'}, {ingredientId: 3, ingredients: 'cheese'}] //OR {cheese: true, eggs: true, bacon: false}
  const expected = [
    {
          recipeId: 1,
          recipeName: 'poached egg',
          method: 'Add a little vinegar to water just coming to the boil. Turn off the heat and gently break eggs into the water. Leave for 3 mins. Drain eggs well before putting onto toast',
          image: 'http://www.jamieshomecookingskills.com/core_jo/images/jhcs/main-image-2556.jpg'
        }, {
          recipeId: 2,
          recipeName: 'omelette',
          method: 'Break two eggs into a bowl and whisk well with a little grated cheese. Melt butter in a pan and cook on a low heat, constantly stirring until just cooked.',
          image: 'http://www.bite.co.nz/images/recipes/exam_eggs_bite.jpg'
        }
      ]

  //Act
  const actual = db.findRecipesByIngredients(ingredients)

  //Assert
  t.deepEqual(expected, actual, 'returns all and only the recipes which can be made with selected ingredients')
})
