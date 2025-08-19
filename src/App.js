// App.js
import React from "react";
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
  return (
    <div className="cursor">
      <MuiThemeProvider theme={theme}>
        {/* ✅ Navbar stays on all pages */}
        <Navbar />

        {/* ✅ Routes */}
        <Routes>
          <Route path="/" element={<SonUpload />} />
          <Route path="/about-son-pfp" element={<AboutSon />} />
          <Route path="/editor" element={<Editor />} />
          <Route path="/son-memes" element={<SonMeme />} />
          <Route path="/submission" element={<ArtistSubmission />} />
        </Routes>

        {/* ✅ MusicPlayer is global, does not reset */}
        <MusicPlayer />
      </MuiThemeProvider>
    </div>
  );
}

export default App;
