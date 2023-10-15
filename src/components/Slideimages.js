import React from "react";
import Myvideo from "../img/videoplay.mp4";
import "./Sample.css";
const Imageslide = () => {
  return (
    <>
      <div className="indexmain">
        <h1 className="webfirst">
          All Item <h1 className="offer-40">Up to 40% off</h1>
          <h2 className="men">
            <p>MEN</p>FASHION
          </h2>
        </h1>

        {/* <div className="contimg">
        <div className="slidemain"> */}
        <video autoPlay className="indexvideo" muted loop src={Myvideo}></video>

        <br></br>
      </div>
    </>
  );
};
export default Imageslide;
