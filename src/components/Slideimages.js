import React from "react";
// import Myvideo from "../img/videoplay.mp4";
// import "./Sample.css";

// Matrial UI
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import sh_01 from '../img/slide_04.webp';
import sh_02 from '../img/slide_03.png';
import sh_03 from '../img/sh_04.png'
import banner from '../img/banner.jpg';
import Moveboard from "./Moveoffer";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    imgPath:
     sh_01,
  },
  { 
    imgPath:
    sh_02,
  },
  {
    imgPath:
    sh_03,
  },
  {
    imgPath:
      sh_02,
  },
];

const Imageslide = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  return (
    <>
    <div className="w- pt-5 h-auto rounded-md">
      <img src={banner} className="w-full rounded-sm"/>
    </div>
   
      {/* <div className="indexmain">
        <h1 className="webfirst">
          All Item <h1 className="offer-40">Up to 40% off</h1>
          <h2 className="men">
            <p>MEN</p>FASHION
          </h2>
        </h1> */}

        {/* <div className="contimg">
        <div className="slidemain"> */}
        {/* <video autoPlay className="indexvideo" muted loop src={Myvideo}></video>

        <br></br>
      </div> */}
        <Box sx={{ maxWidth: 1300, flexGrow: 1 }}>
       
      <Paper>
        <Typography>{images[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 255,
                  display: 'block',
                  maxWidth: 1300,
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
                className="object-contain"
              />
            ) : null}
    </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        background="black"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
         
            
          </Button>
        }
      />
    </Box>

      
    </>
  );
};
export default Imageslide;
