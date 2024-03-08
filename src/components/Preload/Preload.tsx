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
  );
};