import React from 'react';
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { Routes, Route } from "react-router-dom";

import ArtistSubmission from "./Artist/Automated";
import SonUpload from './Artist/SonUpload';
import AboutSon from './Artist/AboutSon';

import Editor from './Artist/Editor';

import Navbar from './Artist/Navbar';

import theme from "./Theme";

function App() {
  return (
    <div className="cursor">
      <MuiThemeProvider theme={theme}>
        {/* Navbar should be outside Routes so it appears on all pages */}
        <Navbar />

        <Routes>
          <Route path="/" element={<SonUpload />} />
          <Route path="/about-son-pfp" element={<AboutSon/>} />
            <Route path="/editor" element={<Editor />} />
          <Route path="/submission" element={<ArtistSubmission />} />
          {/* Add more routes as needed */}
        </Routes>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
