// App.js
import React, { useRef } from "react";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { Routes, Route } from "react-router-dom";

import ArtistSubmission from "./Artist/Automated";
import SonUpload from './Artist/SonUpload';
import AboutSon from './Artist/AboutSon';
import Editor from './Artist/Editor';
import Navbar from './Artist/Navbar';
import SonMeme from './Artist/SonMeme';
import MusicPlayer from './MusicPlayer';

import theme from "./Theme";

function App() {
  const musicRef = useRef(null);
  const videoRefs = useRef([]); // shared between pages

  // ✅ Control functions
  const stopMusic = () => {
    if (musicRef.current) {
      musicRef.current.pause();
    }
  };

  const resumeMusic = () => {
    if (musicRef.current) {
      musicRef.current.play().catch(() => {});
    }
  };

  const stopAllVideos = () => {
    videoRefs.current.forEach((video) => {
      if (video) video.pause();
    });
  };

  return (
    <div className="cursor">
      <MuiThemeProvider theme={theme}>
        <Navbar />

        <Routes>
          <Route path="/" element={<SonUpload />} />
          <Route path="/about-son-pfp" element={<AboutSon />} />
          <Route path="/editor" element={<Editor />} />
          <Route
            path="/son-memes"
            element={
              <SonMeme
                stopMusic={stopMusic}
                resumeMusic={resumeMusic}
                videoRefs={videoRefs}
                stopAllVideos={stopAllVideos}
              />
            }
          />
          <Route path="/submission" element={<ArtistSubmission />} />
        </Routes>

        {/* ✅ MusicPlayer is global */}
        <MusicPlayer ref={musicRef} stopAllVideos={stopAllVideos} />
      </MuiThemeProvider>
    </div>
  );
}

export default App;
