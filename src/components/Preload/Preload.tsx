import React, { useRef, useEffect } from "react";
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import "./style.sass";
import { handlePreloadAnimation } from "../../animation";

gsap.registerPlugin(TextPlugin);

export default function Preload(): JSX.Element {

  const zicon = useRef(null)

  useEffect(() => {

    handlePreloadAnimation()

  }, []);

  return (
    <>
      <div className="preload-elements" >
        <div className="preload-images">
          <img id="preload-image-1" className="preload-image animated animatedFadeInUp fadeInUp-1" src="https://maasi2404zip.merket.io/wp-content/uploads/2024/01/svg-shape-back.svg" />
          <img id="preload-image-2" className="preload-image animated animatedFadeInUp fadeInUp-2" src="https://maasi2404zip.merket.io/wp-content/uploads/2024/01/pexels-helena-lopes-1015568-scaled.jpg" />
          <img id="preload-image-3" className="preload-image animated animatedFadeInUp fadeInUp-3" src="https://maasi2404zip.merket.io/wp-content/uploads/2024/01/image-2.png" />
          <img id="preload-image-4" className="preload-image animated animatedFadeInUp fadeInUp-4" src="https://maasi2404zip.merket.io/wp-content/uploads/2024/01/svg-khung-luoi.svg" />
        </div>
        <div className="preload-text">
          <div className="wordToUnderline">
            <div id="underline-1" className="underline " />
            <p id="text-1">&nbsp;</p>
          </div>
          <div className="wordToUnderline">
            <div id="underline-2" className="underline underline" />
            <p id="text-2">&nbsp;</p>
          </div>
        </div>
      </div>
      <div className="icon-z"  >
        <svg ref={zicon} xmlns="http://www.w3.org/2000/svg" width="60" height="73" viewBox="0 0 118 136" fill="none">
          <path d="M0.564941 0.181519V13.6738H82.2601L0.564941 60.8401V135.105H117.414V121.557H35.7185L117.414 74.3896V0.181519H0.564941Z" fill="#0068FF" />
        </svg>
      </div>
    </>

  );
};