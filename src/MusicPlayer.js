import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./MusicPlayer.css";
import son from './son.mp3'
const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState("00:00");
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const audioRef = useRef(null);

  const togglePlayPause = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((err) => {
        console.log("Autoplay blocked:", err);
      });
    }
    setIsPlaying(!isPlaying);
  };

  // format mm:ss
  const formatTime = (time) => {
    if (!time || isNaN(time)) return "00:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => {
      setCurrentTime(formatTime(audio.currentTime));
    };

    audio.addEventListener("timeupdate", updateTime);

    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {/* One <audio> works for both desktop & mobile */}
      <audio ref={audioRef} src={son}></audio>

      {isMobile ? (
        // --- MOBILE: Just Son Music button ---
        <button className="mobile-music-btn" onClick={togglePlayPause}>
          🎵 Son Music {isPlaying ? "⏸" : "▶"}
        </button>
      ) : (
        // --- DESKTOP: Full Player with animation ---
        <motion.div
          className="music-player"
          onClick={() => setIsMinimized(!isMinimized)}
          animate={{
            width: isMinimized ? "160px" : "196px",
            height: isMinimized ? "50px" : "336px",
            borderRadius: isMinimized ? "50px" : "25px",
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {isMinimized ? (
            <div className="minimized">🎵 Son Music</div>
          ) : (
            <>
              {/* Screen */}
              <div className="screen">
                <div className="top-bar">
                  <span>{currentTime}</span>
                  <div className="battery">
                    <div className="battery-level"></div>
                  </div>
                </div>

                <div className="screen-content">
                  <div className="note-icon">♪</div>
                  <div className="title">Music</div>
                  <div className="menu">
                    <span>♪</span>
                    <span>📁</span>
                    <span>⚙</span>
                    <span>🔔</span>
                    <span>⋯</span>
                  </div>
                </div>
              </div>

              {/* Circle control */}
              <div className="controls">
                <div className="circle">
                  <button
                    className="center-btn"
                    onClick={(e) => {
                      e.stopPropagation(); // don’t trigger minimize
                      togglePlayPause();
                    }}
                  >
                    {isPlaying ? "⏸" : "▶"}
                  </button>
                </div>
                <div className="vol-label">VOL</div>
              </div>
            </>
          )}
        </motion.div>
      )}
    </>
  );
};

export default MusicPlayer;
