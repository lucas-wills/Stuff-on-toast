const _ = require('lodash')

module.exports = function (ingredients) {
  return (
    `<table id="my-table">
       <tr> <th>Cat Name</th><th>Age</th><th> </th></tr>
      ${
        _.map(cats, (cat) => {
          return (
            `<tr id="cat-${cat.name}">
              <td>${cat.name}</td>
              <td>${cat.age}</td>
              <td>
                <button type="button" id="edit">Edit</button>
              </td>
            </tr>`
          )
        })
      }
    </table>`
  )
}
