import React, { useEffect, useRef } from 'react';
import '../style/searcher.css';
import { InputSearcher } from './InputSearcher';

import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';
import video3 from '../assets/video3.mp4';
import video4 from '../assets/video4.mp4';

export const Searcher = () => {
  const videoRefs = useRef([]);
  const videos = [video1, video2, video3, video4];
  let currentVideoIndex = 0;

  useEffect(() => {
    const handleVideoEnd = () => {
      videoRefs.current[currentVideoIndex].style.display = 'none'; 
      currentVideoIndex = (currentVideoIndex + 1) % videos.length;
      videoRefs.current[currentVideoIndex].style.display = 'block'; 
      videoRefs.current[currentVideoIndex].play();
    };

    videoRefs.current.forEach((video, index) => {
      if (video) {
        video.addEventListener('ended', handleVideoEnd);
        if (index !== 0) {
          video.load();
        }
      }
    });

    if (videoRefs.current[0]) {
      videoRefs.current[0].play();
    }

    return () => {
      videoRefs.current.forEach(video => {
        if (video) {
          video.removeEventListener('ended', handleVideoEnd);
        }
      });
    };
  }, [videos]);

  return (
    <>
      <div className="video-background">
        {videos.map((video, index) => (
          <video
            key={index}
            src={video}
            ref={el => (videoRefs.current[index] = el)}
            muted
            style={{ display: index === 0 ? 'block' : 'none' }}
          />
        ))}
        <div className="overlay">
          <div className="welcome-text">
            <h1>Welcome to FoodInc</h1>
            <p>Discover delicious recipes and learn how to cook amazing dishes.</p>
          </div>
          <div className="search-bar">
            {/* <InputSearcher  /> */}
          </div>
        </div>
      </div>
    </>
  );
};
