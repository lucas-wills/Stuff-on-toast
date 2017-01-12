const _ = require('lodash')
const form = require('./form')
const ingredientsForm = require('./ingredientsForm')

module.exports = function (model) {

  return (
    `<div id="app">
    <h1>My app: ${model.appName}</h1>
      ${form()}
      ${ingredientsForm()}

    </div>`
  )
}
