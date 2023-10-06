/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { TypingText } from "@/components/CustomTexts";
import styles from "@/styles";
import React, { useState, useEffect } from "react";
import { AiFillPauseCircle, AiFillPlayCircle } from "react-icons/ai";
import {
  BiSolidSkipNextCircle,
  BiSolidSkipPreviousCircle,
} from "react-icons/bi";

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
    <div className={`${styles.paddings} text-center`}>
      <TypingText textStyles="text-center" element="h3" title="| Descubre algo nuevo" />
      <h2 className="text-center">
        Lo que{" "}
        <span className="font-bold gradient-text">nuestros usuarios</span>{" "}
        escuchan
      </h2>
      <section className="flex flex-col md:flex-row justify-center items-center md:items-start gap-10 mt-10">
        <section className="flex flex-col items-center justify-center">
          <h3 className="mb-10">Opción Spotify</h3>
          <iframe
            src="https://open.spotify.com/embed/playlist/37i9dQZF1DXaaU1AaHpZeu?utm_source=generator&theme=0"
            width="100%"
            height="400"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </section>
        <section >
          <h3 className="mb-10">Opción Manual</h3>
          <div className="flex gap-10 justify-center">
            <button id="prevBtn" onClick={prevTrack}>
              <BiSolidSkipPreviousCircle className="text-4xl" />
            </button>
            <button id="playBtn" onClick={playPause}>
              {isPlaying ? (
                <AiFillPauseCircle className="text-4xl" />
              ) : (
                <AiFillPlayCircle className="text-4xl" />
              )}
            </button>
            <button id="nextBtn" onClick={nextTrack}>
              <BiSolidSkipNextCircle className="text-4xl" />
            </button>
          </div>
          <audio id="audioPlayer" controls>
            Your browser does not support the audio element.
          </audio>
          <ul className="w-[300px]">{audioListItems}</ul>
        </section>
      </section>
    </div>
  );
}

export default AudioPlayer;
