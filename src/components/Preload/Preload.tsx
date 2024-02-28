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
          <img id="preload-image-1" className="preload-image animated animatedFadeInUp fadeInUp-1" src="/img/svg-shape-back.svg" />
          <img id="preload-image-2" className="preload-image animated animatedFadeInUp fadeInUp-2" src="/img/pexels-helena-lopes-1015568-scaled_1.webp" />
          <img id="preload-image-3" className="preload-image animated animatedFadeInUp fadeInUp-3" src="/img/image-2.webp" />
          <img id="preload-image-4" className="preload-image animated animatedFadeInUp fadeInUp-4" src="/img/svg-khung-luoi.svg" />
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
        <svg ref={zicon} width="66" height="75" viewBox="0 0 66 75" fill="none" xmlns="http://www.w3.org/2000/svg" >
          <path d="M0.773926 0.5L0.773926 7.93064L32.9642 7.93064L0.773926 26.5156L0.773926 74.81L65.1282 74.81L65.1282 67.3865L32.951 67.3865L65.1282 48.8087L65.1282 0.5L0.773926 0.5Z" fill="url(#pattern0)" />
          <defs>
            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
              <use href="#image0_1_7946" transform="matrix(0.00106917 0 0 0.000925926 -0.526402 0)" />
            </pattern>
            <image id="image0_1_7946" width="1920" height="1080" href="data:image/png;base64,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" />
          </defs>
        </svg>

      </div>
    </>

  );
};