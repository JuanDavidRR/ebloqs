"use client";
import React, { useState, useEffect } from "react";
import { AiFillPauseCircle, AiFillPlayCircle } from "react-icons/ai";
import {BiSolidSkipNextCircle, BiSolidSkipPreviousCircle} from 'react-icons/bi'


function AudioPlayer() {
  const audioFiles = [
    "audios/audio1.mp3",
    "audios/audio2.mp3",
    "audios/audio3.mp3",
  ]; // List of audio files
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    loadTrack();
    playPause(); // Start playing immediately when changing the track
  }, [currentTrack]);

  const loadTrack = () => {
    const audioPlayer = document.getElementById("audioPlayer");
    audioPlayer.src = audioFiles[currentTrack];
    audioPlayer.load();
  };

  const playPause = () => {
    const audioPlayer = document.getElementById("audioPlayer");
    if (audioPlayer.paused) {
      audioPlayer.play();
      setIsPlaying(true);
    } else {
      audioPlayer.pause();
      setIsPlaying(false);
    }
  };

  const nextTrack = () => {
    setCurrentTrack((currentTrack + 1) % audioFiles.length);
  };

  const prevTrack = () => {
    setCurrentTrack((currentTrack - 1 + audioFiles.length) % audioFiles.length);
  };

  const audioListItems = audioFiles.map((audioFile, index) => (
    <li
      key={index}
      className="cursor-pointer bg-slate-200 my-2 p-2 rounded-full text-center"
      data-index={index}
      onClick={() => {
        setCurrentTrack(index);
      }}
    >
      Episodio {index + 1}: {audioFile}
    </li>
  ));

  return (
    <div className="flex flex-col justify-center items-center gap-10">
      <div className="flex gap-10">
        <button id="prevBtn" onClick={prevTrack}>
          <BiSolidSkipPreviousCircle className="text-4xl"/>
        </button>
        <button id="playBtn" onClick={playPause}>
          {isPlaying ? <AiFillPauseCircle className="text-4xl"/> : <AiFillPlayCircle className="text-4xl"/>}
        </button>
        <button id="nextBtn" onClick={nextTrack}>
          <BiSolidSkipNextCircle className="text-4xl"/>
        </button>
      </div>
      <audio id="audioPlayer" controls>
        Your browser does not support the audio element.
      </audio>
      <ul className="w-[300px]">{audioListItems}</ul>
    </div>
  );
}

export default AudioPlayer;
