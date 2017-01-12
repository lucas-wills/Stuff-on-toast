const express = require('express')
const test = require('ava')
const request = require('supertest-as-promised')

// instaniate test database and routes
const testKnex = require('knex')(require('../../knexfile').test)
const db = require('../../db')(testKnex)
const recipesApi = require('../../api/recipes')(db)

function makeApp () {
  const app = express()
  // set route namespace under test
 app.use('/api/v1/recipes', recipesApi)
  return app
}

test.beforeEach(() => {
  return testKnex.migrate.latest()
    .then(() => {
      return testKnex.seed.run()
    })
})

test.afterEach.always(() => {
  return testKnex.migrate.rollback()
})

// test('' (t) => {
//   t.plan()
//
//   const expected = [] //contains ingredients
//
//   request(makeApp())
//     .get('api/v1/recipes')
//     .query({recipeList: []}) //contains ingredients
//     .then(res => {
//       t.deepEqual(res.body.data, expected)
//     })
// })
