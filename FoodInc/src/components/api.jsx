import React from 'react'
import '../style/info.css'

export const Api = () => {
  return (
    <div className="recipe-container">
    <div className="recipe-header">
      <h1>Dish</h1>
    </div>
    <div className="recipe-content">
      <div className="ingredients">
        <h2>Ingredientes</h2>
        <ul>
          <li>Papas</li>
          <li>Agua</li>
        </ul>
      </div>
      <div className="steps">
        <h2>Steps</h2>
        <ol>
          <li>Hervir Agua</li>
          <li>Sacar papas</li>
          <li>Pelarlas</li>
          <li>Ponerlas a hervir</li>
          <li>Sacar luego de 7min</li>
        </ol>
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
