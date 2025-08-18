import React, { useState, useEffect } from "react";
import { Modal} from "react-bootstrap";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Grid } from "@mui/material";
import Desktop from "./Desktop";
import Desktoptwo from "./Desktoptwo";
import Pricess from './Princess'
import Mobile from "./Mobile";
import Animation from './video/pet.mp4'
import musicFile from "./music/an.mp3";

import Roadmap from "./Roadmaps";
import mo from './image/ch.jpg'

import Faq from './Faq'
import Price from '../LivePrice/Price'

import About from "./About";

import MinimizeIcon from '@mui/icons-material/Minimize';
import CloseIcon from '@mui/icons-material/Close';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';// Import the background image

import {
  Button,


  Window,

  WindowHeader,

} from 'react95';

const Home = () => {
  const [showModal, setShowModal] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const theme = useTheme();
  const smallScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
    };

    handleResize(); // Call once to initialize based on initial screen size

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleYesClick = () => {
    // Code to play music
    const audio = new Audio(musicFile);
    audio.play();
  };

  const handleNoClick = () => {
    window.location.href = "https://z.cash/";
  };

  return (
    <div className="mainContent">


<div className="garden">
      {/* THIS JAVASCRIPT CODE IS FOR Header of the Park Page*/}

      {/* <Slider /> */}
      {!smallScreen && (
        <div className="desk">
          <div className="video-background">
      <video autoPlay muted loop className="video-content">
        <source src={Animation} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay"></div> {/* Add the overlay */}
      {/* Other content goes here */}
    </div>
    <Price/>
        <Desktop/>
        <Pricess/>
        <Faq/>
        < About/>
        <Roadmap/>
        <Desktoptwo/>
     </div>
      )}
      {/* THIS JAVASCRIPT CODE IS FOR the Slider used for the Desktop View when you press on CustomSlider with ctrl and right arrow you move towards the Slider Page Desktop View*/}
      {smallScreen && (
         <div className="mob">
           <Price/>
         <Mobile/>
         <div className="video-background mobile-bg">
      <img src={mo} alt="Mobile Background" className="image-content" />
      <div className="overlay"></div>
    </div>
       </div>
      )}
      {/* THIS JAVASCRIPT CODE IS FOR the Slider used for the Mobile View when you press on MobileSlider with ctrl and right arrow you move towards the Slider Page Mobile View*/}
    </div>
     
      
      <>  
    <Modal
        show={showModal}
        backdrop="static"
        keyboard={false}
        onHide={() => {}}
        className="modalz"
      >
        <
        >
           <Window resizable className='window backoglogo' >
        <WindowHeader className='window-title'>
       <Grid container spacing={0}>
        
       <Grid item md={6} lg={6} xs={6}>
        <p className="fonttops">  &#9829; Hello ANI GANG &#9829;</p>
      

        
  </Grid>
       <Grid item md={6} lg={6} xs={6} className="indicate_modal">         
<Button>
<MinimizeIcon/>
</Button>
<Button>
<CheckBoxOutlineBlankIcon/>
</Button>
<Button>
 <CloseIcon/>  
</Button>  </Grid>


 </Grid>   
        
         
         
        </WindowHeader>
     
        <div className="sunken-panel w-full ">
  <p className="heal">ARE YOU READY TO EXPLORE ANIMECOIN AND ITS COMMUNITY?

</p>

<br/>
       <div className='centeralldivss' >        <  >
          <Button
            variant="primary"
            onClick={() => {
              handleYesClick();
              setShowModal(false);
            }}
            className="yes-no-buttons"
          >
            YES
          </Button>{" "}
          <Button
            variant="primary"
            onClick={() => {
              handleYesClick();
              setShowModal(false);
            }}
            className="yes-no-buttons"
          >
         HELL YEAH
          </Button>{" "}
        </> </div>
    </div>
   
   
      </Window> 
        </>
  
      </Modal>
      
      </>
   
    </div>
  );
};

export default Home;
