import React, { useState, useRef } from "react";
import "./SonUpload.css";
import upload from "./upload.png";
import Editor from "./Editor";

import Footer from "./Footer";

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef(null);

  // Handle file from input or drop
  const handleFile = (file) => {
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setSelectedImage(reader.result); // base64
      reader.readAsDataURL(file);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    handleFile(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  // Trigger file input when clicking on box
  const handleBoxClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="container">
      <br/>
 <div className="app">
      {!selectedImage ? (
        // Upload Screen
        <section className="hero">
          <div
            className={`hero-box ${dragActive ? "drag-active" : ""}`}
            onClick={handleBoxClick}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <div className="emoji centeritall">
              <img src={upload} className="logos" alt="upload logo" />
            </div>
            <h1>ARE YA PFP’ING, SON?</h1>
            <p>Upload. Edit. Meme it. Make your PFP legendary.</p>
            <label className="upload-btn" htmlFor="upload">
              + Upload an image
            </label>
            <input
              id="upload"
              type="file"
              ref={fileInputRef}
              className="file-input"
              accept="image/*"
              onChange={handleFileChange}
              style={{ display: "none" }} // hide default
            />
            <small>or drag & drop here</small>
          </div>
        </section>
      ) : (
        // Editor Screen
        <Editor image={selectedImage} onBack={() => setSelectedImage(null)} />
      )}
    </div>



<Footer />
    </div>
   
  );
}

export default App;
