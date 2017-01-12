module.exports = function(id){
  return (
    `
    <input type="button" name="home" value = "home" id="home">
    <h2>Specific Recipe</h2>
    <h3 id="ingredients">Ingredients</h3>
      <ul>
        <li>2 eggs,</li>
        <li>125g butter,</li>
        <li>1 serving of bacon,</li>
      </ul>
    <h3 id="instructions">Instructions</h3>
      <p>
        Break the eggs in a bowl, whisk them until smooth.</br>
        Bring a frying pan to high temperature.</br>
        Sizzle the bacon and fry the eggs. </br>
        put it on toast. </br>
        Tadaa. </br>
      </p>
    <h3 id="hints">Tips / Hints</h3>
      <p>Serve hot</p>
    `
  )
}
