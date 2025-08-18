import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaXTwitter, FaTelegramPlane, FaTiktok, FaInstagram } from "react-icons/fa6";
import "./Navbar.css";
import logo from './logo.png'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Animation variants for overlay
  const overlayVariants = {
    hidden: { y: "-100%", opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeInOut" } },
    exit: { y: "-100%", opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } },
  };

  // Animation variants for staggered menu items
  const listVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      {/* Hamburger button */}
      <div className="hamburger" onClick={() => setMenuOpen(true)}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Fullscreen overlay menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="menu-overlay"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <span className="close-btn" onClick={() => setMenuOpen(false)}>
              ✕
            </span>

            {/* Main menu links */}
            <motion.ul className="menu-list" variants={listVariants} initial="hidden" animate="visible">
             {[
  { text: "UPLOAD", link: "./" },
  { text: "What is Son PFP ?", link: "./about-son-pfp" },
  { text: "Son Meme", link: "./son-memes" },
  { text: "Love you Son", link: "https://son.meme/" },
  { text: "BUY $Son", link: "https://dexscreener.com/solana/gxqaxqzxmm7hmpqlrtbcm9tztukj2m4uatvqnqj1oznf" }
].map((item, i) => (
  <motion.li key={i} variants={itemVariants}>
    <a href={item.link} target={item.link.startsWith("http") ? "_blank" : "_self"} rel="noopener noreferrer">
      {item.text}
    </a>
  </motion.li>
))}

            </motion.ul>

            {/* Social icons */}
            <motion.div className="social-icons" variants={listVariants} initial="hidden" animate="visible">
             <div className="social-icons flex items-center gap-3">
          <a href="https://x.com/SonCoin_" target="_blank" rel="noopener" className="x-logo"></a>
          <a href="https://www.tiktok.com/@son_coin" target="_blank" rel="noopener" className="tiktok-logo"></a>
          <a href="https://t.me/winningsonsol" target="_blank" rel="noopener" className="telegram-logo"></a>
          <a 
            href="https://dexscreener.com/solana/gxqaxqzxmm7hmpqlrtbcm9tztukj2m4uatvqnqj1oznf"
            target="_blank"
            rel="noopener"
            className="dexscreener-logo"
          ></a>
        </div>
            </motion.div>

            {/* Footer */}
            <motion.div className="menu-footer" variants={itemVariants}>
              <p>
                Copyright © 2025 SON PFP . All rights reserved. 
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
