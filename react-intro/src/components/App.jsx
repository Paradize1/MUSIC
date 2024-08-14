
import React, { useState } from 'react';
import SongList from './SongList';
import Player from './Player';
import './App.css';


const App = () => {
  const [currentSong, setCurrentSong] = useState(null);

  const songs = [
    { title: 'Song 1', url: '/songs/song1.mp3' },
    { title: 'Song 2', url: '/songs/song2.mp3' },
    { title: 'Song 3', url: '/songs/song3.mp3' },
    { title: 'Song 4', url: '/songs/song4.mp3' },

  ];

  return (
    <div className="App">
      <SongList songs={songs} setCurrentSong={setCurrentSong} />
      <Player currentSong={currentSong} />
    </div>
  );
};

export default App;
