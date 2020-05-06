import React, { useState, useRef, useEffect } from "react";

import "./AudioMessage.scss";

import classNames from "classnames";
import waveSvg from "../../assets/wave.svg";
import playSvg from "../../assets/play.svg";
import pauseSvg from "../../assets/pause.svg";

const AudioMessage = ({ audio }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  let audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current !== null) {
      audioRef.current.volume = "0.04";
      audioRef.current.addEventListener(
        "playing",
        () => {
          setIsPlaying(true);
        },
        false
      );

      audioRef.current.addEventListener(
        "pause",
        () => {
          setIsPlaying(false);
        },
        false
      );

      audioRef.current.addEventListener(
        "ended",
        () => {
          setIsPlaying(false);
          setProgress(0);
        },
        false
      );

      audioRef.current.addEventListener(
        "timeupdate",
        () => {
          const duration = (audioRef.current && audioRef.current.duration) || 0;
          setCurrentTime(audioRef.current.currentTime);
          setProgress((audioRef.current.currentTime / duration) * 100);
        },
        false
      );

      audioRef.current.addEventListener(
        "loadedmetadata",
        () => {
          document.querySelector(
            ".message__audio-time"
          ).textContent = convertCurrentTime(audioRef.current.duration);
        },
        false
      );
    }
  });

  const togglePlayAudio = () => {
    if (!isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  const convertCurrentTime = currentTime => {
    const min = Math.floor(currentTime / 60);
    const sec = (currentTime % 60).toFixed();
    return `${min < 10 ? "0" : ""}${min}:${sec < 10 ? "0" : ""}${sec}`;
  };

  return (
    <>
      {audio && (
        <div className="message__audio">
          <audio ref={audioRef} src={audio} preload="auto" />
          <div
            className="message__audio-progress"
            style={{ width: progress + "%" }}
          ></div>
          <div className="message__audio-info">
            <div className="message__audio-button">
              <button
                className="message__audio-button-controll"
                onClick={togglePlayAudio}
              >
                <img src={isPlaying ? pauseSvg : playSvg} alt="Button Icon" />
              </button>
            </div>
            <div className="message__audio-tray">
              <img
                src={waveSvg}
                alt="Audio tray line"
                className="message__audio-tray-line"
              />
            </div>
            <div className="message__audio-time">
              {convertCurrentTime(currentTime)}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AudioMessage;
