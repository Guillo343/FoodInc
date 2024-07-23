import React from 'react'
import '../style/info.css'

export const Api = () => {
  return (
    <div className="recipe-container">
    <div className="recipe-header">
      <h1>Dish</h1>
    </div>
    <div className="recipe-content">
      <div className="steps">
        <h2>Steps</h2>
        <ol>
          <li>Preheat the Oven to 400°F or 200°C.</li>
          <li>Wash and peel potateos</li>
          <li>Cut them into evenly sized cubes or slices to ensure even cooking</li>
          <li>Place the cut potatoes in a pot of salted water</li>
          <li>Bring to a boil and cook until the potatoes are tender, about 10-15 min</li>
          <li>Drain the potatoes and return them to the pot</li>
          <li>Add the butter and milk or cream to the cooked potateos</li>
          <li>Mash the potateos until smooth and creamy.</li>
          <li>Stir in the shredded cheese until it's melted and evenly distributed</li>
          <li>Season with salt, peper and any additional seasonings to taste</li>
          <li>Transfer the cheesy mashed potatoes to a baking dish</li>
          <li>Smooth the top with a spatula</li>
          <li>Bake in the preheated oven for about 20 minutes, or until the top is golden brown and the cheese is bubbling.</li>
        </ol>
      </div>
      <div className="ingredients">
        <h2>Ingredients</h2>
        <ul>
          <li>Potatoes</li>
          <li>Cheese</li>
        </ul>
      </div>
      <div className="images">
        <img src="path/to/orange-juice.png" alt="Orange Juice" className="food-image" />
        <img src="path/to/sandwich.png" alt="Sandwich" className="food-image" />
      </div>
    </div>
    <div className="photos">
      <h2>Photos</h2>
      {/* Add photos here */}
    </div>
  </div>
  )
}
