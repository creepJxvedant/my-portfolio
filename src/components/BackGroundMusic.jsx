import React, { useRef, useState } from "react";
import { FaPlay, FaPause, FaVolumeUp, FaVolumeDown } from "react-icons/fa";

const BackgroundMusic = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    audioRef.current.volume = newVolume;
    setVolume(newVolume);
  };

  return (
    <div className="flex items-center will-change-contents p-2 justify-center mt-4 bg-gray-100/5 rounded-full shadow-lg gap-4">
      <audio ref={audioRef} loop>
        <source src="/des mots.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      <button
        onClick={togglePlayPause}
        className="text-white bg-blue-500/80 hover:bg-blue-600/70 p-2 rounded-full"
      >
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
      <div className="flex items-center space-x-2">
        <FaVolumeDown className="text-white" />
        <input
          className="volume-slider"
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
        />
        <FaVolumeUp className="text-white" />
      </div>
    </div>
  );
};

export default BackgroundMusic;
