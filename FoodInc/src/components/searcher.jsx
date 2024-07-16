import React from 'react'
import '../style/searcher.css'
import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'
import video3 from '../assets/video3.mp4'
import video4 from '../assets/video4.mp4'

export const Searcher = () => {
    const videos = [video1, video2, video3, video4]  

  return (
    <>
      <div className="video-background">
        {videos.map((video, index) => (
          <video key={index} src={video} autoPlay loop muted />
        ))}
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
    </>
    );
};
