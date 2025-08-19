import React from "react";
import { motion } from "framer-motion";
import "./SonMeme.css";
import Footer from "./Footer";

const mediaItems = [
  { type: "image", src: "https://res.cloudinary.com/dnbeefkuz/image/upload/v1755567189/6100231356220032555_vjlfhd.jpg" },
  { type: "image", src: "https://res.cloudinary.com/dnbeefkuz/image/upload/v1755567189/6098008899622913690_f2zrll.jpg" },
  { type: "image", src: "https://res.cloudinary.com/dnbeefkuz/image/upload/v1755567189/6098008899622913689_yrc1oc.jpg" },
  { type: "video", src: "https://res.cloudinary.com/dnbeefkuz/video/upload/v1755567832/IMG_6469_njioem.mp4" },
  { type: "video", src: "https://res.cloudinary.com/dnbeefkuz/video/upload/v1755567799/IMG_6467_qtgu89.mp4" },
  { type: "video", src: "https://res.cloudinary.com/dnbeefkuz/video/upload/v1755567781/IMG_6468_qspc4i.mp4" },
  { type: "video", src: "https://res.cloudinary.com/dnbeefkuz/video/upload/v1755567720/sonfuckmylife_kh5yga.mp4" },
];

// Different entry directions
const directions = [
  { x: -200, y: 0 }, // left
  { x: 200, y: 0 },  // right
  { x: 0, y: -200 }, // top
  { x: 0, y: 200 },  // bottom
];

const cardVariants = (dir) => ({
  hidden: { opacity: 0, ...dir },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.8,
      type: "spring",
      stiffness: 70,
    },
  },
});

function SonMeme({ stopMusic, videoRefs, stopAllVideos }) {
  const handlePlay = (index) => {
    videoRefs.current.forEach((video, i) => {
      if (video && i !== index) video.pause();
    });
    if (stopMusic) stopMusic();
  };

  return (
    <div className="gallery-container">
      <h1 className="gallery-title">✨ Meme Gallery ✨</h1>

      <div className="gallery-grid">
        {mediaItems.map((item, index) => {
          const randomDir = directions[index % directions.length];

          return (
            <motion.div
              key={index}
              className="gallery-card"
              variants={cardVariants(randomDir)}
              initial="hidden"
              whileInView="show"   // trigger on scroll in
              viewport={{ amount: 0.2 }} // 👈 removed once:true
              whileHover={{ scale: 1.08, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.type === "image" ? (
                <img src={item.src} alt="meme" className="gallery-media" />
              ) : (
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  className="gallery-media"
                  controls
                  playsInline
                  onPlay={() => handlePlay(index)}
                >
                  <source src={item.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}

              <motion.div
                className="gallery-overlay"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                Meme #{index + 1}
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      <br /><br /><br />
      <Footer />
    </div>
  );
}

export default SonMeme;
