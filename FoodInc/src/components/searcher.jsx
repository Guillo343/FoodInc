import React from 'react'
import '../style/searcher.css'

export const Searcher = () => {
  return (
<>
      <div className="container">
        <h1>Welcome to FoodInc</h1>
        <p>Discover delicious recipes and learn how to cook amazing dishes.</p>
      </div>
      <div className="image-gallery">
        <div className="search-bar">
          <input type="text" placeholder="Search recipes..." />
        </div>
        <div className="images">
          <video src="../assets/video1.mp4" alt="Dish 1" />
          <video src="../assets/video2.mp4" alt="Dish 2" />
          <video src="../assets/video3.mp4" alt="Dish 3" />
          <video src="../assets/video4.mp4" alt="Dish 4" />
        </div>
      </div>
    </>  )
}
