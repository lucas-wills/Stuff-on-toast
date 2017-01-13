module.exports = function () {
  return (
    `<form action="#" id="make-new-form">
      <input type="button" name="home" value = "home" id="home">
      <h2>New Recipe</h2>
      <input type="text" name="recipe-name" placeholder= "write name here">
      <h3>Ingredients</h3>
      <input type="checkbox" name="ingredient" value = "1"> Cheese<br>
      <input type="checkbox" name="ingredient" value = "2"> feta<br>
      <input type="checkbox" name="ingredient" value = "3"> orange<br>
      <input type="checkbox" name="ingredient" value = "4"> mint<br>
      <input type="checkbox" name="ingredient" value = "5"> fig jam<br>
      <input type="checkbox" name="ingredient" value = "6"> ham<br>
      <input type="checkbox" name="ingredient" value = "7"> walnuts<br>
      <input type="checkbox" name="ingredient" value = "8"> butter<br>

      <h3>Instructions</h3>
      <input type="text" name="instructions" placeholder="write instructions here">

       <h3>Hints/Tips</h3>
       <input type="text" name="hints" placeholder="write hints/tips here">

       <h3>Image</h3>
       <input type="text" name="URL" placeholer="www.url"><br>
       <input type="button" name="add" value = "Make Recipe" id="make">
    </form>`
  )
}
