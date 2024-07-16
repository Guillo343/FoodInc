import React from 'react'
import '../style/searcher.css'

export const Searcher = () => {
  return (
    <>
      <div className="video-background">
        <video src="../assets/video1.mp4" autoPlay loop muted />
        <video src="../assets/video2.mp4" autoPlay loop muted />
        <video src="../assets/video3.mp4" autoPlay loop muted />
        <video src="../assets/video4.mp4" autoPlay loop muted />
        <div className="overlay">
          <div className="welcome-text">
            <h1>Welcome to FoodInc</h1>
            <p>Discover delicious recipes and learn how to cook amazing dishes.</p>
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Search recipes..." />
          </div>
        </div>
      </div>
    </>  )
}
