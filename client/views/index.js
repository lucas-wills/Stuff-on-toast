const _ = require('lodash')
const form = require('./form')
const ingredientsForm = require('./ingredientsForm')
const displaySpecificRecipe = require('./displaySpecificRecipe')

module.exports = function (model) {

  return (
    `<div id="app">
    <h1>My app: ${model.appName}</h1>
      ${form()}
      ${ingredientsForm()}
      ${displaySpecificRecipe()}

    </div>`
  )
}
