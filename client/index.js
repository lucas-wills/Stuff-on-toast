console.log('bundle loads')

const morphdom = require('morphdom')
const events = require('./events')
const Store = require('./store')
const view = require('./views')

const model = {appName: 'Hello'}
const store = Store(model)

document.addEventListener('DOMContentLoaded', (e) => {

  events(store)
  store.subscribe((model) => {
    console.log('model:', model)

    render()
  })

  render()

  function render () {
    const root = document.querySelector('#app')
    morphdom(root, view(model))
  }



  //store.fetchCats()


})
