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








{ type: "video", src: "https://res.cloudinary.com/dnbeefkuz/video/upload/v1755567169/IMG_4994_lgvlgw.mp4" },
  { type: "video", src: "https://res.cloudinary.com/dnbeefkuz/video/upload/v1755567173/IMG_4996_tqlqw3.mp4" },
  { type: "image", src: "https://res.cloudinary.com/dnbeefkuz/image/upload/v1755567189/6098008899622913591_agf245.jpg" },
  { type: "video", src: "https://res.cloudinary.com/dnbeefkuz/video/upload/v1755567636/soncumv6_esmno7.mp4" },
  { type: "video", src: "https://res.cloudinary.com/dnbeefkuz/video/upload/v1755567658/IMG_6466_p1wy3g.mp4" },
  { type: "video", src: "https://res.cloudinary.com/dnbeefkuz/video/upload/v1755567688/sontorloloo2_saklcj.mp4" },
  { type: "video", src: "https://res.cloudinary.com/dnbeefkuz/video/upload/v1755567633/im_proud_of_you_sonv1_r5gmcu.mp4" },














{ type: "image", src: "https://res.cloudinary.com/dnbeefkuz/image/upload/v1755567168/6098008899622913688_zx18de.jpg" },
  { type: "image", src: "https://res.cloudinary.com/dnbeefkuz/image/upload/v1755567168/6098008899622913592_o17lb8.jpg" },
  { type: "image", src: "https://res.cloudinary.com/dnbeefkuz/image/upload/v1755567168/6098008899622913295_re53jx.jpg" },
  { type: "image", src: "https://res.cloudinary.com/dnbeefkuz/image/upload/v1755567168/6098008899622913589_lay7xd.jpg" },





  { type: "image", src: "https://res.cloudinary.com/dnbeefkuz/image/upload/v1755567168/6098008899622913325_ktqemx.jpg" },
  { type: "image", src: "https://res.cloudinary.com/dnbeefkuz/image/upload/v1755567168/6098008899622913308_sz7dn8.jpg" },
  { type: "image", src: "https://res.cloudinary.com/dnbeefkuz/image/upload/v1755567167/6098008899622913309_g2kpkh.jpg" },
  { type: "image", src: "https://res.cloudinary.com/dnbeefkuz/image/upload/v1755567167/6098008899622913310_klwpia.jpg" },






    { type: "image", src: "https://res.cloudinary.com/dnbeefkuz/image/upload/v1755567167/6098008899622913292_r0n8lv.jpg" },
  { type: "image", src: "https://res.cloudinary.com/dnbeefkuz/image/upload/v1755567166/6098008899622913293_nkbzz4.jpg" },
  { type: "image", src: "https://res.cloudinary.com/dnbeefkuz/image/upload/v1755567166/6096042354357160111_k7rnqw.jpg" },
  { type: "image", src: "https://res.cloudinary.com/dnbeefkuz/image/upload/v1755567166/6096042354357160110_1_ba18w2.jpg" },




    { type: "image", src: "https://res.cloudinary.com/dnbeefkuz/image/upload/v1755567166/6096008312446372547_nlhr9y.jpg" },
  { type: "image", src: "https://res.cloudinary.com/dnbeefkuz/image/upload/v1755567165/6096008312446372541_akwp0v.jpg" },
  { type: "image", src: "https://res.cloudinary.com/dnbeefkuz/image/upload/v1755567166/6096008312446372537_y4tgtn.jpg" },
  { type: "image", src: "https://res.cloudinary.com/dnbeefkuz/image/upload/v1755567165/6096008312446372543_fpdvce.jpg" },







      { type: "image", src: "https://res.cloudinary.com/dnbeefkuz/image/upload/v1755567165/6096008312446372542_jhrnez.jpg" },
  { type: "image", src: "https://res.cloudinary.com/dnbeefkuz/image/upload/v1755567165/6096008312446372544_znlkzu.jpg" },
  { type: "image", src: "https://res.cloudinary.com/dnbeefkuz/image/upload/v1755567164/6100137472529910088_pd4mtx.jpg" },
  { type: "video", src: "https://res.cloudinary.com/dnbeefkuz/video/upload/v1755567164/IMG_4997_xi9c3d.mp4" },









        { type: "image", src: "https://res.cloudinary.com/dnbeefkuz/image/upload/v1755567163/6100137472529910089_kgz68w.jpg" },
  { type: "image", src: "https://res.cloudinary.com/dnbeefkuz/image/upload/v1755567163/6100137472529910090_wmqjam.jpg" },
  { type: "image", src: "https://res.cloudinary.com/dnbeefkuz/image/upload/v1755567163/6095693585832855155_z8ln3x.jpg" },













  { type: "image", src: "https://res.cloudinary.com/dnbeefkuz/image/upload/v1755567162/6095693585832855153_kzmzbi.jpg" },
  { type: "image", src: "https://res.cloudinary.com/dnbeefkuz/image/upload/v1755567162/6100231356220032556_a5nhe9.jpg" },
    { type: "image", src: "https://res.cloudinary.com/dnbeefkuz/image/upload/v1755567161/6100231356220032554_iiulbx.jpg" },











      { type: "image", src: "https://res.cloudinary.com/dnbeefkuz/image/upload/v1755567160/6100260699436599826_sftek2.jpg" },
      { type: "image", src: "https://res.cloudinary.com/dnbeefkuz/image/upload/v1755567159/6100260699436599736_jd3sno.jpg" },
      { type: "image", src: "https://res.cloudinary.com/dnbeefkuz/image/upload/v1755567159/6100260699436599734_yfwzzb.jpg" },
      { type: "image", src: "https://res.cloudinary.com/dnbeefkuz/image/upload/v1755567158/6109638876491530357_wpdgoh.jpg" },










            { type: "image", src: "https://res.cloudinary.com/dnbeefkuz/image/upload/v1755567158/6100260699436599735_lsfhlp.jpg" },
      { type: "video", src: "https://res.cloudinary.com/dnbeefkuz/video/upload/v1755567157/IMG_6461_lqkdao.mp4" },
      { type: "video", src: "https://res.cloudinary.com/dnbeefkuz/video/upload/v1755567157/IMG_6599_gts3hd.mp4" },












      { type: "image", src: "https://res.cloudinary.com/dnbeefkuz/image/upload/v1755567149/6111773994928686781_easqnc.jpg" },
      { type: "image", src: "https://res.cloudinary.com/dnbeefkuz/image/upload/v1755567149/6111773994928686782_bgwuf2.jpg" },
            { type: "image", src: "https://res.cloudinary.com/dnbeefkuz/image/upload/v1755567149/6111773994928686780_doboee.jpg" },
                  { type: "image", src: "https://res.cloudinary.com/dnbeefkuz/image/upload/v1755567149/6102423670736667988_dfqjrk.jpg" },













                  
      { type: "image", src: "https://res.cloudinary.com/dnbeefkuz/image/upload/v1755567148/6102423670736667990_o5g28m.jpg" },
      { type: "image", src: "https://res.cloudinary.com/dnbeefkuz/image/upload/v1755567148/6102423670736667989_rcub54.jpg" },
            { type: "image", src: "https://res.cloudinary.com/dnbeefkuz/image/upload/v1755567148/6111773994928686783_wamoby.jpg" },
                  { type: "video", src: "https://res.cloudinary.com/dnbeefkuz/video/upload/v1755567147/SON_chef_ujetil.mp4" },




















                                   
      { type: "image", src: "https://res.cloudinary.com/dnbeefkuz/image/upload/v1755567146/6102423670736668095_cozoa6.jpg" },
      { type: "image", src: "https://res.cloudinary.com/dnbeefkuz/image/upload/v1755567146/6104734955847403409_fpe109.jpg" },
            { type: "image", src: "https://res.cloudinary.com/dnbeefkuz/image/upload/v1755567146/6102423670736668096_loiinw.jpg" },
                  { type: "image", src: "https://res.cloudinary.com/dnbeefkuz/image/upload/v1755567145/6116269107700679145_q2pets.jpg" },














                                                  
      { type: "image", src: "https://res.cloudinary.com/dnbeefkuz/image/upload/v1755567144/GyH8W-raEAER171_srxyyp.jpg" },
      { type: "image", src: "https://res.cloudinary.com/dnbeefkuz/image/upload/v1755567144/6116269107700679144_zjv9by.jpg" },
            { type: "image", src: "https://res.cloudinary.com/dnbeefkuz/image/upload/v1755567144/6116269107700679146_wpzod3.jpg" },
                  { type: "image", src: "https://res.cloudinary.com/dnbeefkuz/image/upload/v1755567144/6116269107700679147_c1x2js.jpg" },


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
      <h1 className="gallery-title">$Son Memes </h1>

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

      <br /><br /><br /><br /><br />
      <Footer />
    </div>
  );
}

export default SonMeme;
