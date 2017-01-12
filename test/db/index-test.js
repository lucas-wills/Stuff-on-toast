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

test.only('findRecipesByIngredients | returns all recipes from db which include no more than the submitted ingredients', (t) => {
  t.plan(1)

  //Arrange
  const ingredients = [{id: 2}] //OR {cheese: true, eggs: true, bacon: false}
  const expected = [
    {
      id: 3,
      recipe_name: 'bacon and eggs',
      method: 'Cook bacon. Poach eggs. Add toast',
      image: 'http://www.eggcrackin.com/wp-content/uploads/2015/12/047a9eff.product_classic.png'
    }
  ]

  //Act
  return db.findRecipesByIngredients(ingredients)
  .then(function(data){

    //Assert
    t.deepEqual(data,expected)
  })

})
